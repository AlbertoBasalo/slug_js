# lepton

Fundamental JavaScript template

## Package.json

### Dependencies

```
npm i -D eslint prettier jest
npm i -D eslint-config-prettier eslint-plugin-prettier eslint-plugin-jest
npm i -D jest-esm-transformer
npm i -D standard-version
npm i -D npm-check-updates
```

### Scripts

```
  "scripts": {
    "start": "node ./src/main.js",
    "test": "jest",
    "test:dev": "jest --watch",
    "prerelease": "standard-version ",
    "release": "git push --follow-tags origin main",
    "update": "ncu -u"
  },
```