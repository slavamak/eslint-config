# @slavamak/eslint-config

ESLint shareable configs.

## Installation

To use these configurations in your project, install the package via pnpm:

```bash
pnpm add -D @slavamak/eslint-config
```

## Usage

To use the ESLint configurations, create or update your `eslint.config.js` in your project root:

```javascript
import { configs } from "@slavamak/eslint-config";

export default [configs.ignore, configs.base, configs.node, configs.typescript];
```

## Available Configurations

- `base`: Basic configuration for JavaScript projects.
- `browser`: Configuration for browser environments.
- `node`: Configuration for Node.js applications.
- `react`: Configuration for React applications.
- `typescript`: Configuration for TypeScript projects.
- `remix`: Configuration for Remix applications.
- `ignore`: Configuration for ignoring certain files or patterns.

## Utils

This package also exports all utilities from the `eslint-flat-config-utils` package, which helps manage and manipulate ESLint flat config arrays. You can find more details [here](https://github.com/antfu/eslint-flat-config-utils).

## Example Usage

For a Node.js application without TypeScript:

```javascript
import { configs } from "@slavamak/eslint-config";

export default [configs.ignore, configs.base, configs.node];
```

For a Remix application with TypeScript:

```javascript
import { concat, configs } from "@slavamak/eslint-config";

export default concat(configs.remix, configs.typescript);
```

> [!NOTE]
> We use the `concat` utility here because `configs.remix` is actually an array of multiple configs. So we could use the spread operator or the `concat` utility.

You can easily modify any of configs using the `composer` utility:

```javascript
import { composer, concat, configs } from "@slavamak/eslint-config";

export default concat(
  await composer(configs.remix)
    .overrideRules({
      "n/no-unsupported-features/node-builtins": "error",
    })
    .override("@slavamak/eslint-config/base", {
      rules: {
        "no-console": "error",
      },
    }),
  configs.typescript,
);
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
