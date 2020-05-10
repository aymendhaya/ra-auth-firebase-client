import React from 'react'
import { Admin, Resource } from 'react-admin'
import {emailAndPasswordAuthProvider} from "ra-auth-firebase-client";
import { PostList, PostEdit, PostCreate } from './Posts'
import fakeDataProvider from 'ra-data-fakerest';
import firebaseConfig from './firebaseConfig'
import firebase from 'firebase/app'
import 'firebase/auth'

const dataProvider = fakeDataProvider({
  posts: [
      { id: 0, title: 'Hello, world!' },
      { id: 1, title: 'FooBar' },
  ]
})

firebase.initializeApp(firebaseConfig)

export default () =>
  <Admin authProvider={emailAndPasswordAuthProvider(firebase)} dataProvider={dataProvider} >
    <Resource name='posts' list={PostList} edit={PostEdit} create={PostCreate} />
  </Admin>
