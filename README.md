# PandaRocket Types

The `pandarocket-types` project is designed to be used as a Git submodule in other projects. It provides a set of TypeScript definitions and utilities that can be shared across multiple projects.

## Installation

To include `pandarocket-types` as a submodule in your project, use the following command:

```bash
git submodule add https://bitbucket.org/yakkyo1/pandarocket-types/
```

After adding the submodule, make sure to initialize and update it:

```bash
git submodule update --init --recursive
```

## Scripts

This project contains three main scripts to manage the submodule:

### 1. types-init.ts

Use this script if the pandarocket-types submodule is empty after cloning the superproject. This script will initialize and update the submodule to pull the latest content.

#### Usage:

Add the following script to your superproject's package.json:

```bash
"scripts": {
  "init-types": "node pandarocket-types/types-init.ts"
}
```

Run the script with Yarn:

```bash
yarn init-types
```

### 2. types-update.ts

Use this script to update the submodule in your superproject with the latest changes from the pandarocket-types repository. This is useful when the submodule has been updated in another project and you want to incorporate those changes into your current superproject.

#### Usage:

Add the following script to your superproject's package.json:

```bash
"scripts": {
  "update-types": "node pandarocket-types/types-update.ts"
}
```

Run the script with Yarn:

```bash
yarn update-types
```

### 3. types-pre-commit.ts

This script should be used in a Husky pre-commit hook to push changes to the pandarocket-types repository from within the superprojects. This ensures that any updates to the types are committed to the submodule repository.

#### Usage:

In your Husky pre-commit hook in your superproject add:

```bash
node pandarocket-types/types-pre-commit.ts
```
