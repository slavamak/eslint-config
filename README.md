# @slavamak/eslint-config

ESLint sharable configs.

```js
// eslint.config.js
import { configs } from "@slavamak/eslint-config";

export default configs.typescript()

// or

export default [
  {
    ignores: [
      ...
    ],
  },
  ...configs.typescript({
    alias: {
      "@": "./app",
    },
  }),
  ...configs.react(),
];
```
