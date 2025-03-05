# Adobe Express Embed SDK Documentation

## Creating Tutorials

This repository includes a tutorial template and script to help create new tutorials consistently.

### Tutorial Template

The template (`src/pages/guides/tutorials/tutorial-template.md`) provides a standardized structure for tutorials with sections for:

- Prerequisites
- Implementation steps
- Code examples
- Testing instructions
- Common issues and solutions
- Next steps
- Related resources

### Creating a New Tutorial

1. Use the provided script:
```bash
npm run create-tutorial
```

2. The script will prompt for:
   - Tutorial name (for folder structure)
   - Tutorial title
   - Description
   - GitHub username

3. The script will:
   - Create a new directory under `src/pages/guides/tutorials/`
   - Generate an `index.md` file from the template
   - Replace key placeholders with provided information

### Tutorial Structure

Each tutorial should include:

```
tutorials/
└── your-tutorial-name/
    └── index.md
```

### Next Steps After Creation

1. Add your tutorial content
2. Update the key learning objectives
3. Add code examples and screenshots
4. Test all code samples

### Template Sections

The tutorial template includes these main sections:

1. **Prerequisites** - Required setup and knowledge
2. **What you'll build** - Overview of the end result
3. **Project Setup** - Initial configuration steps
4. **Implementation Steps** - Main tutorial content
5. **Testing** - Validation steps
6. **Common Issues** - Troubleshooting guide
7. **Next Steps** - Further learning paths
8. **Related Resources** - Additional documentation

### Contributing

When creating a new tutorial:

1. Follow the existing template structure
2. Include clear code examples
3. Add helpful screenshots where needed
4. Link to relevant documentation
5. Include troubleshooting tips
6. Test all code samples thoroughly

For more information, see:
- [Quickstart Guide](/guides/quickstart/)
- [Full Documentation](/guides/)

## Sample

To run the sample, `cd` into `v4-sample` first and follow the instructions in the [sample.md](/v4-sample/sample.md) file.

## Contributing

Before raising a pull request, please run the following tests:

```bash
yarn test:links
yarn test:lint
```

Markdown linting errors can be fixed automatically (with some luck) by running:

```bash
yarn fix:lint
```
