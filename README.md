# aheMobileLiveChat
Aplikacja mobilna do zaliczenia przedmiotu Programowanie urządzeń mobilnych na AHE w Łodzi

## Ready .apk file for android available on:

### https://1drv.ms/u/s!AlMGY0l7Qzz_j61sJJY4HJu21Lr-ZA?e=bT4wCQ

## Environmental Setup:
### Windows:

--//--

### Linux: (tested on Ubuntu 20.04)
1. First update the apt package manager:
```
$ sudo apt-get update
$ sudo apt-get upgrade
```
2. Setting up the development environment following steps from tutorial

   https://reactnative.dev/docs/environment-setup

3. Run android studio app:
```
/opt/android-studio/bin/studio.sh
```
4. Create and run your android emulator:
```
- push More Actions
- select Virtual Device Manager
- if you are using it first time, create a new device using top left button, "Create device"
- device spec: Pixel 6, Tiramisu API Level 33, others don't care
- lunch your emulator from "Actions" panel
- after proper lunching device should appear like phone layout
```
5. clone this repository and update all necessary package:
```
git clone git@github.com:SebekO/aheMobileLiveChat.git
cd aheMobileLiveChat
git checkout sebek
npm i
yarn add react-native-reanimated
npx react-native run-android
npx react-native start
```
## Other useful info ##

- versions:
  - node.js: 19.0.1,
  - npm: 9.1.3,
  - yarn: 1.22.19
  - Android Studio Dolphin: 2021.3.1 Patch 1
