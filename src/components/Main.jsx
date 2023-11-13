import React from 'react'
import { View } from 'react-native'
import RepositoryList from './RepositoryList.jsx'
import AppBar from './AppBar'
import { Route, Routes } from 'react-router-native'
import Login from '../pages/Login.jsx'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' exact element={<RepositoryList />} />
        <Route path='/signin' exact element={<Login />}/>
      </Routes>
    </View>
  )
}

export default Main
