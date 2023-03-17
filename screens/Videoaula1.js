import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Videoaula1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../images/videoaula1.png')} style={styles.imageback}>

        <View style={styles.view1}>
      
      <Image source={require('../images/logoreduzidabranca.png')} style={styles.dublinreduzido}/>

      <TouchableOpacity onPress={() => navigation.navigate('Apostila')}>
      <Image source={require('../images/voltarbranco.png')} style={styles.voltarbranco}/>
      </TouchableOpacity>

      </View>

        <TouchableOpacity onPress={() => navigation.navigate('Video1')}>
        <Image source={require('../images/play.png')} style={styles.play}/>
        </TouchableOpacity>
        
        <View style={styles.containervermelho}>
            <Text style={styles.videotext}>Video Aula 1 - English</Text>
        </View>

      </ImageBackground>
    </View>
  )
}

export default Videoaula1

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageback: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    containervermelho: {
        backgroundColor: '#DC0A37',
        width: 350,
        height: 70,
        marginTop: 250,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    play: {
        alignSelf: 'center',
        marginTop: 250
        
    },
    videotext: {
        fontSize: 20,
        color: 'white'
    },
    dublinreduzido: {
      marginTop: 40,
      marginStart: 340
    },
    voltarbranco: {
     marginTop: 40,
      marginStart: -340
    },
    view1:{
      width: '100%',
      flexDirection: 'row'
    }
})