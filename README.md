# aheMobileLiveChat
Aplikacja mobilna do zaliczenia przedmiotu Programowanie urządzeń mobilnych na AHE w Łodzi

## Ready .apk file for android available on:

### https://1drv.ms/u/s!AlMGY0l7Qzz_j61rj7d4PAYNAsu9CA?e=cWJO3E7

## Environmental Setup:

### Windowns (tested on Windows 11 Pro):
1. Setting up the development environment following steps from tutorial

   https://reactnative.dev/docs/environment-setup

2. Run android studio app:
```
/opt/android-studio/bin/studio.sh
```
3. Create and run your android emulator:
```
- push More Actions
- select Virtual Device Manager
- if you are using it first time, create a new device using top left button, "Create device"
- device spec: Pixel 6, Tiramisu API Level 33, others don't care
- lunch your emulator from "Actions" panel
- after proper lunching device should appear like phone layout
```
4. clone this repository and update all necessary package:
```
git clone https://github.com/SebekO/aheMobileLiveChat-public.git
cd aheMobileLiveChat-public
npm i
yarn add react-native-reanimated
```
5. before you can start app you need to create and fulfill your auth data from cometchat and firebase in files:

./constants.js - for cometchat:
```
export const COMETCHAT_CONSTANTS = {
  APP_ID: 'XXX',
  REGION: 'XXX',
  AUTH_KEY: 'XXX',
};
```

./src/firebase.js - for firebase:
```
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "XXX",
  authDomain: "XXX",
  databaseURL: "XXX",
  projectId: "XXX",
  storageBucket: "XXX,
  messagingSenderId: "XXX",
  appId: "XXX",
  measurementId: "XXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
```
6. after creating this two file you are ready to run app:
```
npx react-native run-android
npx react-native start
```
###  Linux (tested on Ubuntu 20.04): 
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
git clone https://github.com/SebekO/aheMobileLiveChat-public.git
cd aheMobileLiveChat-public
npm i
yarn add react-native-reanimated
```
6. before you can start app you need to create and fulfill your auth data from cometchat and firebase in files:

./constants.js - for cometchat:
```
export const COMETCHAT_CONSTANTS = {
  APP_ID: 'XXX',
  REGION: 'XXX',
  AUTH_KEY: 'XXX',
};
```

./src/firebase.js - for firebase:
```
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "XXX",
  authDomain: "XXX",
  databaseURL: "XXX",
  projectId: "XXX",
  storageBucket: "XXX,
  messagingSenderId: "XXX",
  appId: "XXX",
  measurementId: "XXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
```
7. after creating this two file you are ready to run app:
```
npx react-native run-android
npx react-native start
```
## Other useful info ##

- versions:
  - node.js: 19.0.1,
  - npm: 9.1.3,
  - yarn: 1.22.19
  - Android Studio Dolphin: 2021.3.1 Patch 1
