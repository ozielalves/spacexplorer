# **SpaceX Missions** (SpaceXplorer) &middot; [![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://flutter.dev/docs/get-started/install) [![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://flutter.dev/docs/get-started/install) [![Issues](https://img.shields.io/github/issues/ozielalves/spacexplorer.svg)](https://flutter.dev/docs/get-started/install) [![Issues](https://img.shields.io/github/issues-pr-closed/ozielalves/spacexplorer.svg)](https://flutter.dev/docs/get-started/install)

<div align="center">
<img src="assets\cover.png" alt="logo" align="center">
</div>

<br>

The SpaceXplorer app is an app that displays SpaceX mission launches using the [SpaceX GraphQL API](https://api.spacex.land/graphql/). The application was developed using [React Native](https://reactnative.dev) and [Expo](https://expo.dev), a set of tools and services built around React Native and native platforms that helps the development, build and deploy of multiplatform projects and quickly iterate on iOS, Android, and web apps from the same codebase.

# Table of content

<!--ts-->
- [Features](#features)
- [Getting Started](#getting-started)
  - <sub>[Requirements](#requirements)</sub>
- [Development](#development)
  - <sub>[Install Dependencies](#install-dependencies)</sub>
  - <sub>[Network Configuration](#network-configuration)</sub>
  - <sub>[Running the Project](#running-the-project)</sub>
- [Main Packages](#main-packages)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
<!--te-->

## Features
### **Flow** [(Figma)](https://www.figma.com/file/Pb1Y4QXILmZCHimwVqF2JL/SpaceXplorer?node-id=61187%3A1001)

<br>

<a href="https://www.figma.com/file/Pb1Y4QXILmZCHimwVqF2JL/SpaceXplorer?node-id=61187%3A1001"><img src="assets\flux.PNG" alt="logo" align="center"></a>

<br>


### **Intro Screen** **(Bonus)** 
A simple welcome screen.

### **Home Screen**
Displays latest launches data chronologically in a user-friendly manner.

- List pagination using infinite scroll. **(Bonus)** 
- Minor modifications to the request query to provide performance improvements (added launch id) and infinite scroll (query variables). **(Bonus)** 
- Preview of the number of images and rocket name **(Bonus)**
- Visual Feedbacks
  - List skeleton loading **(Bonus)**
  - List empty state **(Bonus)**
### **Launch Details**
Displays launch details including images and the link to the launch article. The launch images can be be toggled as a favorite. You can access the article by tapping the article description item or share the link to the article by tapping the share option in the upper right corner of the screen.

- Share launch article **(Bonus)**
- Image modal **(Bonus)**

[Link to project visualization in Figma](https://www.figma.com/file/Pb1Y4QXILmZCHimwVqF2JL/SpaceXplorer?node-id=61187%3A1001)

## Getting Started

```bash
git clone git@github.com:ozielalves/spacexplorer.git
cd spacexplorer
```

### Requirements

Instructions for setting up your development workstation and phone.

##### Workstation

Mac `OSX`:

- Install [node](https://nodejs.org/en/) `v6`+

  - npm `v3`+

- Install [yarn](https://yarnpkg.com/lang/en/docs/migrating-from-npm/) for package management

```bash
npm install -g yarn
```

- [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
  - `Xcode` command line tools

```bash
xcode-select --install
```

#### Phone

[`CRNA`](https://github.com/react-community/create-react-native-app)'s development environment uses a client app called `Expo Client` for live-reloading in development. Its pretty magical.

Go to the App Store on your iOS or Andriod device, and install the Expo Client app ([ios](https://itunes.apple.com/us/app/expo-client/id982107779), [andriod](https://play.google.com/store/apps/details?id=host.exp.exponent)).

## Development
Run the project on your workstation and preview app on your phone or in simulator.

### Pitfalls
There's an [open issue](https://github.com/react-community/create-react-native-app/issues/234) affecting OSX & Linux developers - to prevent the startup script from failing, users must increase their system-level [file/process limits](https://www.freebsd.org/doc/handbook/configtuning-kernel-limits.html). You may want to write these commands to your shell config file, as the following commands are temporary until reboot.

```bash
sudo sysctl -w kern.maxfiles=5242880
sudo sysctl -w kern.maxfilesperproc=524288
```

### Install dependencies
This will create a `node_modules` folder in your application's root directory and a [lock file](https://yarnpkg.com/lang/en/docs/yarn-lock/).
```bash
yarn install
```

### Network configuration
If you are running the project on your iOS or Android device, **both the device and your workstation must be on the same network**! If you are on Windows using WSL, use Tunnel connection option.

### Running the project
```bash
expo start
```
To view the app on your phone:
```
1. Open Expo Client on phone
2. Scan QR code presented in terminal
3. Enjoy launches
```

Alternatively, you can run the app in a simulator on your workstation:

`IOS`:
```bash
expo start --ios
```

`Android`:
```bash
expo start --android
```

## Main Packages

All packages used in these project can be found in the package.json file.

### **Fonts**

The `inter` and `rajdhani` fonts from the `expo-google-fonts` package were used in the project.

### **Navigation**

The `react-navigation` package is responsible for the app's `stack` navigation.

### **Beatiful Gradients**

The `expo-linear-gradient` package was used to render some beautiful linear gradients within the application.

### **Should not be a problem for Iphone X**

The `react-native-iphone-x-helper` package was imported and used to ensure that iPhone X and onwards users can correctly view all screen elements.

### **Vectors for life**

`react-native-svg` and `react-native-svg-transformer` were necessary packages for using SVG elements.

## Project Structure

```bash
├── src
│   ├── assets
│   │   ├── camera.svg
│   │   ├── empty-avatar.png
│   │   ├── illustration.png
│   │   ├── launch-rocket.svg
│   │   └── spaceship.svg
│   ├── components
│   │   ├── Avatar
│   │   ├── Background
│   │   ├── ButtonIcon
│   │   ├── DetailItem
│   │   ├── GuildIcon
│   │   ├── Header
│   │   ├── ImageModal
│   │   ├── ImageSlider
│   │   ├── ListDivider
│   │   ├── ListHeader
│   │   ├── ListItem
│   │   ├── ListSkeleton
│   │   ├── MissionErrorState
│   │   ├── Missions
│   │   ├── Profile
│   │   └── Skeleton
│   ├── global
│   │   └── styles
│   │       └── theme.ts
│   ├── hooks
│   │   └── useMissions
│   │       ├── constants.ts
│   │       ├── index.tsx
│   │       └── queries.ts
│   ├── models
│   │   └── mission.ts
│   ├── routes
│   ├── screens
│   │   ├── Home
│   │   ├── Intro
│   │   └── LaunchDetails
│   ├── services
│   │   ├── cache.ts
│   │   └── client.ts
│   ├── @types
│   │   ├── png.d.ts
│   │   └── svg.d.ts
│   └── utils
│       └── getFormatedDate.ts
├── .gitignore
├── app.json
├── App.tsx
├── babel.config.js
├── metro.config.js
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

## Contributing
PR's welcome!
