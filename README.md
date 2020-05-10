# ra-auth-firebase-client

> 

[![NPM](https://img.shields.io/npm/v/ra-auth-firebase-client.svg)](https://www.npmjs.com/package/ra-auth-firebase-client) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Requirements

```bash
npm install firebase
```

## Install

```bash
npm install --save ra-auth-firebase-client
```

## Usage

```jsx
import { Admin, Resource } from 'react-admin'
import {emailAndPasswordAuthProvider} from "ra-auth-firebase-client";
import { PostList, PostEdit, PostCreate } from './Posts'

import dataProvider from 'your-data-provider';
import firebase from 'firebase/app'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: '**************',
  authDomain: '**************',
  databaseURL: 'https://myrealtimedatabase.firebaseio.com',
  projectId: 'myrealtimedatabase',
  storageBucket: 'myrealtimedatabase.appspot.com',
  messagingSenderId: '**************',
  appId: '**************',,
  measurementId: '**************'
})

export default () =>
  <Admin authProvider={emailAndPasswordAuthProvider(firebase)} dataProvider={dataProvider} >
    <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} />
  </Admin>
```

## Result
```json
console.log(localStorage.getItem("user"))
```

## Demo 
[https://aymendhaya.github.io/ra-auth-firebase-client](https://aymendhaya.github.io/ra-auth-firebase-client)

## Notice
```bash
- this is a basic migration to v3

- a lot of functionalities will be added soon

- please feel free to suggest new functionnalities
```
## About dataProvider 
Firebase dataProvider is a separate project. Check [ra-data-firebase-client](https://github.com/aymendhaya/ra-data-firebase-client)
