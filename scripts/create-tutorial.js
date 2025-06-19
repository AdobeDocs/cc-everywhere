const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function promptUser(question) {
  return new Promise(resolve => {
    rl.question(question, answer => resolve(answer));
  });
}

async function updateGatsbyConfig(tutorialName, title) {
  try {
    const configPath = path.join(__dirname, '../gatsby-config.js');
    
    // Check if config file exists
    if (!fs.existsSync(configPath)) {
      throw new Error('gatsby-config.js not found');
    }

    let configContent = fs.readFileSync(configPath, 'utf8');
    console.log('Reading gatsby-config.js...');

    // Find the tutorials section in the navigation with a more flexible regex
    const tutorialsNavRegex = /({[^}]*title:\s*["']Tutorials["'][^}]*path:\s*["']\/guides\/tutorials\/["'][^}]*pages:\s*\[)([\s\S]*?)(\s*\])/i;
    
    if (!tutorialsNavRegex.test(configContent)) {
      // Try alternate format that might be used
      const altTutorialsNavRegex = /({[^}]*path:\s*["']\/guides\/tutorials\/["'][^}]*title:\s*["']Tutorials["'][^}]*pages:\s*\[)([\s\S]*?)(\s*\])/i;
      
      if (!altTutorialsNavRegex.test(configContent)) {
        throw new Error('Could not find tutorials section in gatsby-config.js');
      }
      
      // Use the alternate regex if the first one didn't match
      tutorialsNavRegex = altTutorialsNavRegex;
    }

    // Create new tutorial entry with path to index.md
    const newTutorialEntry = `
          {
            title: "${title}",
            path: "/guides/tutorials/${tutorialName}/index.md"
          },`;

    // Add the new entry to the pages array
    const updatedContent = configContent.replace(
      tutorialsNavRegex,
      (match, start, items, end) => {
        console.log('Found tutorials section, adding new entry...');
        return `${start}${items}${newTutorialEntry}${end}`;
      }
    );

    // Verify content was actually changed
    if (configContent === updatedContent) {
      throw new Error('Failed to update gatsby-config.js - no changes were made');
    }

    // Write the updated config back to file
    fs.writeFileSync(configPath, updatedContent);
    console.log('✅ Successfully updated gatsby-config.js');

  } catch (error) {
    console.error('Error updating gatsby-config.js:', error.message);
    console.error('Please add the following entry manually to your gatsby-config.js:');
    console.error(`
    {
      title: "${title}",
      path: "/guides/tutorials/${tutorialName}/index.md",
    }`);
  }
}

async function createTutorial() {
  try {
    // Gather information
    const tutorialName = await promptUser('Enter tutorial file name (e.g., quick-actions): ');
    const title = await promptUser('Enter tutorial title: ');
    const description = await promptUser('Enter tutorial description (what users will learn/build): ');
    const username = await promptUser('Enter your GitHub username: ');

    // Format tutorial name for folder
    const folderName = tutorialName.toLowerCase().replace(/\s+/g, '-');

    // Setup paths
    const templatePath = path.join(__dirname, '../src/pages/guides/tutorials/tutorial-template.md');
    const tutorialDir = path.join(__dirname, `../src/pages/guides/tutorials/${folderName}`);
    const destPath = path.join(tutorialDir, 'index.md');

    // Create directory if it doesn't exist
    if (!fs.existsSync(tutorialDir)) {
      fs.mkdirSync(tutorialDir, { recursive: true });
    }

    // Read template
    let template = fs.readFileSync(templatePath, 'utf8');

    // Extract key task/feature from description for various replacements
    const taskDescription = description.toLowerCase();
    
    // Generate different variations of the description for different contexts
    const buildDescription = description.charAt(0).toLowerCase() + description.slice(1);
    const accomplishDescription = taskDescription;

    // Replace placeholders with consistent descriptions
    template = template
      // Replace title and basic info
      .replace(/\[Tutorial Title\]/g, title)
      .replace('Tutorial Template', title)
      .replace('yourusername', username)
      
      // Replace description in frontmatter and meta
      .replace('Step-by-step guide for implementing [Feature/Task] with Adobe Express Embed SDK', description)
      
      // Replace task descriptions consistently
      .replace(/\[accomplish specific task\]/g, accomplishDescription)
      .replace(/\[brief description of what you'll build\]/g, buildDescription)
      .replace(/\[Brief description of the end result with specific details about functionality\]/g, description)
      
      // Replace feature/task references
      .replace(/\[Feature\/Task\]/g, taskDescription.replace(/^(implementing?|building?|creating?)\s+/i, ''))
      .replace(/\[feature\/task\]/g, taskDescription.replace(/^(implementing?|building?|creating?)\s+/i, ''))
      .replace(/\[specific feature\/task\]/g, taskDescription.replace(/^(implementing?|building?|creating?)\s+/i, ''))
      
      // Replace project name references
      .replace(/\[your-project-name\]/g, folderName)
      .replace(/\[Your Project Title\]/g, title)
      .replace(/\[tutorial-name\]/g, folderName);

    // Write new tutorial file
    fs.writeFileSync(destPath, template);

    // Update Gatsby config
    await updateGatsbyConfig(folderName, title);

    console.log('\n✅ Tutorial created successfully!');
    console.log(`📁 Location: ${destPath}`);
    console.log('\nNext steps:');
    console.log('1. Replace remaining placeholders with specific content:');
    console.log('   - [Specific learning objective 1-3]');
    console.log('   - [Main Implementation Step]');
    console.log('   - [Test scenario 1-3]');
    console.log('   - [Expected result 1-2]');
    console.log('2. Add actual implementation code');
    console.log('3. Add screenshots and visual examples');
    console.log('4. Test all code samples thoroughly');
    console.log('5. Verify the tutorial appears in navigation');
    console.log('\n💡 Tip: The description you provided has been used consistently throughout the template.');

  } catch (error) {
    console.error('❌ Error creating tutorial:', error);
  } finally {
    rl.close();
  }
}

// Run the script
createTutorial(); 