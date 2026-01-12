const { getDeployableFiles } = require('./scriptUtils.js');
const path = require('path');

console.log('Testing getDeployableFiles...');
try {
    const files = getDeployableFiles('src/pages/v4');
    console.log(`Found ${files.length} files.`);
    if (files.length > 0) {
        console.log('First 5 files:', files.slice(0, 5));
    }
} catch (error) {
    console.error('Error:', error);
}
