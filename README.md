# Create Vechain Dapp 🚀

Welcome to Create Vechain Dapp! This is your one-stop solution for kickstarting development on the Vechain blockchain. Whether you're building a complex X2Earn application, a simple decentralized app, or just working on smart contracts, we've got you covered with our carefully crafted templates. Each template comes with pre-configured tools, best practices, and comprehensive documentation to help you start building right away.

## Usage 📦

```bash
npm create vechain-dapp
```

or

```bash
yarn create vechain-dapp
```

or

```bash
npx create-vechain-dapp@latest
```

## Available Templates 📚

### X2Earn Template 💰

A comprehensive monorepo setup using Turbo with:

- React frontend ⚛️
- Express.js backend 🚀
- Hardhat for smart contract development 🔨
- Advanced features including ChatGPT image recognition 🖼️
- VeBetterDAO contract interactions 🤝
- Complete X2Earn application infrastructure

Perfect for building sophisticated X2Earn applications on VeChain.

### Simple Dapp Template 🛠️

A streamlined monorepo setup using Turbo with:

- React frontend ⚛️
- Hardhat for smart contract development 🔨
- Basic Dapp infrastructure

Ideal for developers starting new projects on VeChain from scratch.

### Smart Contract Template 📜

A focused template for smart contract development:

- Hardhat development environment 🔨
- Contract deployment tools 🚀
- Testing infrastructure 🧪

Best suited for developers focusing solely on smart contract development without frontend requirements.

Each template includes detailed documentation and setup instructions in its respective directory.

## Contributing New Templates 🤝

Want to add your own template? Follow these steps:

1. Create a public repository with your template
2. Fork this repository and create a Pull Request with the following changes:

   a. Add your repository to `scripts/update-templates.sh`:

   ```bash
   REPOS=(
     // ... existing repos ...
     "https://github.com/your-username/your-template.git your-template-name"
   )
   ```

   b. Add your template details to `index.js`:

   ```javascript
   const templates = [
     // ... existing templates ...
     {
       value: "your-template-name",
       title: "Your Template Title",
       description: "A brief description of your template 🚀",
     },
   ];
   ```

3. Submit your PR with a description of your template and its use cases

### For Repository Maintainers 🔧

After merging template PRs, follow these steps to publish the changes:

1. Increment the version in `package.json`:

2. Run `npm link` to test the package locally

3. Run `npm publish` to publish the new version to npm registry

Note: Make sure you have the necessary npm permissions to publish the package.

## License 📄

This project is licensed under the MIT License.
