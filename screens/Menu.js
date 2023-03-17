import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Homescreen from './Homescreen';
import Exerciciosscreen from './Exerciciosscreen';
import Videosscreen from './Videosscreen';
import Apostilascreen from './Apostilascreen';

const Tab = createBottomTabNavigator();

const Menu = () => {
 
  return (
    <Tab.Navigator tabBarOptions={{
      showLabel: false,
      }}
      screenOptions={{
        tabBarStyle: {height: 90, marginBottom: -20, alignItems: 'center'},
      }}>
      <Tab.Screen name='Home' component={Homescreen} options={{headerShown: false, tabBarIcon:
      ({size, focused, color}) => {
        return (
          <Image source={require('../images/home.png')} style={{
            width: 25.21,
            height: 24,
    tintColor: focused ? '#DC0A37' : "#4E4E4E",
          }}
           />
        )
      }}}/>
      <Tab.Screen name='Exercicios' component={Exerciciosscreen} options={{headerShown: false, tabBarIcon: 
      ({size, focused, color}) => {
        return (
          <Image source={require('../images/cards.png')} style={{
            width: 23.21,
            height: 24,
            tintColor: focused ? '#DC0A37' : "#4E4E4E",
          }}/>
        )
      }}}/>
      <Tab.Screen name='Videos' component={Apostilascreen} options={{headerShown: false, tabBarIcon: 
      ({size, focused, color}) => {
        return (
          <Image source={require('../images/trofeu.png')}style={{
            width: 21.21,
    height: 25,
            tintColor: focused ? '#DC0A37' : "#4E4E4E",
          }}/>
        )
      }}}/>
      <Tab.Screen name='Apostila' component={Videosscreen} options={{headerShown: false, tabBarIcon: 
      ({size, focused, color}) => {
        return (
          <Image source={require('../images/videos.png')}style={{
            width: 23.21,
            height: 22,
            tintColor: focused ? '#DC0A37' : "#4E4E4E",
          }}/>
        )
      }}}/>
    </Tab.Navigator>
  )
}

export default Menu

const styles = StyleSheet.create({
  container: {
    height: 100,
  },
  icon: {
    width: 41,
    height: 35,
    marginTop: -10,

  },
  icon1: {
    width: 34,
    height: 40,
    marginTop: -5
  },
  icon2: {
    width: 30,
    height: 40,
    marginTop: -5
  }
})