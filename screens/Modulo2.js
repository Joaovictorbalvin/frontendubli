import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Modulo2 = ({navigation}) => {
  return (
    <View style={styles.container}>

        <View style={{flexDirection: 'row', marginTop: -20}}>
        <TouchableOpacity onPress={() => navigation.navigate('Videos')}>
        <Image source={require('../images/fechar.png')}style={{marginEnd: 290}}/>
        </TouchableOpacity>
        
    <Image source={require('../images/logovermelhoreduzido.png')}/>
    </View>

    <View style={styles.view1}>
        <Text style={styles.textlet}>Let's get started!</Text>


        <TouchableOpacity onPress={() => navigation.navigate('Quiz2')}>
        <View style={styles.view2}>
            <Text style={styles.textfriends}>Chapter 2 - My surroundings</Text>
        </View>
        </TouchableOpacity>

        
    </View>
      
    </View>
  )
}

export default Modulo2

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        marginTop: 90
    },
    view1: {
        marginTop: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textlet: {
        fontSize: 30
    },
    view2: {
        width: 320,
        height: 60,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 20,
        elevation: 10
    },
    textcapitulo1: {
        textAlign: 'center',
        fontSize: 17
    },
    textfriends: {
        textAlign: 'center',
        fontSize: 17
    }
})