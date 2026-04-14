# Gooboo

![Hits](https://count.getloli.com/get/@gooboo?theme=booru-helltaker)

## 🌟 新特性 / New Features
- **[2026.04.14]** 新增中文汉化支持。已接入基础环境并汉化了游戏基础界面的核心词汇。后续可在 `src/lang/zh.js` 与 `src/lang/zh/` 内继续完善翻译。

## Project setup
Install dependencies
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Lints and fixes files
```
yarn lint
```

### Debug mode
Debug mode is a set of tools to make testing and development easier.
It can be used in testing versions of the game (and locally if you enable APP_TESTING in constants.js).
To enable debug mode, import the debug.json file as savefile or edit your savefile to include the feature debugFeature.
You should see a new icon in the navigation bar, which takes you to the debug feature.
Additional debug tools can now also be found in the settings (such as keybinds to skip time).
Please note that the debug feature does not support translations and may break on small screens.

## Testing

### Unit tests
Run all tests
```
yarn test:unit
```

Run tests without parameters. This allows to run only selected tests by passing a name as argument
```
yarn test:unit-custom
```

### E2E tests
Open cypress (Project needs to be running locally on port 8080 and APP_TESTING needs to be set to true in constants.js)
```
yarn test:e2e
```

## Building for production

Don't forget to set the desired APP_ENV in constants.js before building!

### Build for use on a webserver
```
yarn build
```

### Preview electron app
```
yarn forge:start
```

### Create electron app
```
yarn forge:make
```

## Compatibility

### Devices
Supports desktop, tablet, and mobile with a screen width of 375px or higher

### Browsers
Supports firefox, electron and chromium-based browsers
