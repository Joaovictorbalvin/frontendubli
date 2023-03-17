import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Splashscreen2 = ({navigation}) => {
    setTimeout (() => {
        navigation.navigate('Login')
    }, 3000)
  return (
    <View style={styles.container}>
      <Image source={require('../images/lobodublibranca.png')}/>
    </View>
  )
}

export default Splashscreen2

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A81430',
        width: '100%',
        height: '100%'
    }
})