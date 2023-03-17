import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Splashscreen = ({navigation}) => {
    setTimeout (() => {
        navigation.navigate('Splashscreen2')
    }, 3000);
  return (
    <View style={styles.container}>
      <Image source={require('../images/dublibranco.png')}/>
    </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#A81430',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }

})