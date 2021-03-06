import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BottomTabs = () => {
  return (
    <View style={{ flexDirection: 'row', margin: 10, marginHorizontal: 30, justifyContent: 'space-between', }}>
      <Icons icon='home' text='Home' />
      <Icons icon='search' text='Browse' />
      <Icons icon='shopping-bag' text='Grocery' />
      <Icons icon='receipt' text='Orders' />
      <Icons icon='user' text='Account' />
    </View>
  )
}


const Icons = (props) => (
  <TouchableOpacity>
    <FontAwesome5 size={25} name={props.icon} style={{ marginBottom: 3, alignSelf: 'center' }} />
    <Text>{props.text}</Text>
  </TouchableOpacity>
)


export default BottomTabs