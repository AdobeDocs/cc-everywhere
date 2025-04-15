const path = require('path');
const fs = require('node:fs');
const { pathPrefix } = require('./gatsby-config.js');
const { globSync }= require('glob');
const matchAll = require('string.prototype.matchall');

function getMarkdownFiles() {
    return globSync(__dirname + '/src/pages/**/*.md')
        .map(f => path.resolve(f));
}

function listLinksInFile({ file, filePattern, getFindPattern }) {
    let data = fs.readFileSync(file, 'utf8');
    const findPattern = getFindPattern(filePattern);
    const re = new RegExp(findPattern, "gm");
    const matches = matchAll(data, re);
    [...matches].forEach(m => {
        console.log(`${m[0]}`);
    })
}

// node testRenameFiles.js > markdownLinks.md
function listLinksInMarkdownFiles() {
    const files = getMarkdownFiles();
    files.forEach(file => {
        listLinksInFile({
            file,
            filePattern: '[^)#]*',
            getFindPattern: (from) => `(\\[[^\\]]*]\\()(${from})(#[^\\()]*)?(\\))`,
        })
    })
}

// node testRenameFiles.js > gatsbyConfigLinks.js
function listLinksInGatsbyConfigFiles() {
    const files = ['gatsby-config.js', 'api-refs-sidebar.json'];
    files.forEach(file => {
        listLinksInFile({
            file,
            filePattern: '[^"#]*',
            getFindPattern: (from) => `(path|"path")(\\s*:\\s*")(${from})(#[^"]*)?(")`,
        });
    })
}

listLinksInGatsbyConfigFiles();