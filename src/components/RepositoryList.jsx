import React, { useEffect, useState } from 'react'
import { FlatList, Text } from 'react-native'
import RepositoryItem from './RepositoryItem.jsx'
import useRepositories from '../hooks/useRepositories.js'

const RepositoryList = () => {
  const {repositories} =  useRepositories()
  console.log(repositories)
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text> </Text>}
      renderItem={({ item: repo }) => (
        <RepositoryItem {...repo} />
      )}
    />
  )
}

export default RepositoryList
