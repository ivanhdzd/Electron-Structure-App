# Electron App

This project is a basic desktop app developed with a web app structure.

##How does works it?

This project includes:

- `Electron` - Build cross platform for creating native applications with web technologies like JavaScript, CSS and HTML.
You can learn more through it official page [Electron](http://electron.atom.io/docs/).
- `NodeJS` - Is a JavasScript runtime built. It contains an extensive set of open source libraries.
You can read more through it official page [NodeJS](https://nodejs.org/en/docs/).
- `Bower` - A packager manager for the web, it can manager frameworks, libraries, assets and utilities for your web project.
To learn more about it, visit their official page [Bower](https://bower.io/docs/api/). 
- `Gulp` - It's a build system to automatize develop tasks.
To know more for it, go to it oficial page [Gulp](https://gulp.readme.io/docs/).

##Quick start

First, you need to have installed NodeJS, NPM, Gitbash (Only for Windows) and next NodeJS packages:
- `electron-prebuilt`
- `electron-packager`
- `bower`

You can install above packages writing it in a gitbash console window:

```bash
npm install -g electron-prebuilt electron-packager bower
```

Then, you need to install all necesarry packages inside package.json and bower.json by:

```bash
npm install
```

This instruction executes a postinstall task, it install bower components after all node modules was installed.

Then you can run this app:

```bash
npm start
```

##Add more packages with bower

To install packages by bower use:

```bash
bower install --save [package-name]
```

Doesn't use (Because packages installed by --save-dev will be ignored by 'inject-dependencies' gulp task):

```bash
bower install --save-dev [package-name]
```

#### License [CC0 (Public Domain)](LICENSE.md)