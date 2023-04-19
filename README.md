# Sample Npm Package

- npm: https://www.npmjs.com/package/@chan-naru-way/sample-npm-package

This package provides a feature to detect HTML tags with specific data attributes and insert React components accordingly.

The data attribute is `data-js-target`, and its value should be a JSON formatted string.

## How to install

```bash
npm i @chan-naru-way/sample-npm-package
```

## How to use

```typescript
import { dispatch } from '@chan-naru-way/sample-npm-package/src/index.tsx';

dispatch();
```

## Note

If you use this package in a `Vite` project, please add the following configuration to your `vite.config.js` or `vite.config.ts` file.

```typescript
export default defineConfig({
	...,
	// Necessary to resolve dependencies for @chan-naru-way/sample-npm-package
	optimizeDeps: {
		include: ['styled-components', 'react-is']
	}
});
```
