import React from 'react'
import { List, Datagrid, Edit, Create, SimpleForm, TextField, EditButton, TextInput } from 'react-admin'

export const PostList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source='id' />
      <TextField source='title' />
      <EditButton basePath='/posts' />
    </Datagrid>
  </List>
)

export const PostEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source='id' />
      <TextInput source='title' />
    </SimpleForm>
  </Edit>
)

export const PostCreate = (props) => (
  <Create title='Create a Post' {...props}>
    <SimpleForm>
      <TextInput source='id' />
      <TextInput source='title' />
    </SimpleForm>
  </Create>
)
