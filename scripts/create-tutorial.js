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

    // Find the tutorials section in the navigation
    const tutorialsNavRegex = /(title: "Tutorials",\s+path: "\/guides\/tutorials\/",\s+pages: \[)([\s\S]*?)(\s+\])/;
    
    if (!tutorialsNavRegex.test(configContent)) {
      throw new Error('Could not find tutorials section in gatsby-config.js');
    }

    // Create new tutorial entry with path to index.md
    const newTutorialEntry = `
          {
            title: "${title}",
            path: "/guides/tutorials/${tutorialName}/index.md",
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
    const tutorialName = await promptUser('Enter tutorial name (e.g., quick-actions): ');
    const title = await promptUser('Enter tutorial title: ');
    const description = await promptUser('Enter tutorial description: ');
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

    // Replace placeholders
    template = template
      .replace('Tutorial Template', title)
      .replace('Step-by-step guide for implementing [Feature/Task]', description)
      .replace('yourusername', username)
      .replace('Tutorial Title', title)
      .replace('[accomplish specific task]', description);

    // Write new tutorial file
    fs.writeFileSync(destPath, template);

    // Update Gatsby config
    await updateGatsbyConfig(folderName, title);

    console.log('\n✅ Tutorial created successfully!');
    console.log(`📁 Location: ${destPath}`);
    console.log('\nNext steps:');
    console.log('1. Add your tutorial content');
    console.log('2. Update the key learning objectives');
    console.log('3. Add code examples and screenshots');
    console.log('4. Test all code samples');
    console.log('5. Verify the tutorial appears in navigation');

  } catch (error) {
    console.error('❌ Error creating tutorial:', error);
  } finally {
    rl.close();
  }
}

// Run the script
createTutorial(); 