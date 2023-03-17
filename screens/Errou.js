import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Errou = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.lets}>Lets get better!</Text>
        <Text style={styles.yougot}>you got all the questions wrong.</Text>
      <Image style={styles.imagetop} source={require('../images/errou.png')}/>

      <TouchableOpacity style={styles.botao} onPress={() => {
        navigation.navigate('Modulo1')
      }}>
        <Text>Try it again!</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Errou

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lets: {
        fontSize: 35,
        marginTop: 100

    },
    yougot: {
        fontSize: 20
    },
    imagetop: {
        marginTop: 20
    },
    botao: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 50,
        borderRadius: 18,
        marginTop: 50,
        elevation: 10
    }
})