import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import GestureFlipView from  'react-native-gesture-flip-card'
import { Audio } from 'expo-av';


const renderFront = () => {
  return (
    <View style={{marginTop: 100}}>
       <Image source={require('../images/court.png')} style={styles.topcard}/>
    </View>
  );
};

const renderBack = () => {
  return (
    <View style={{marginTop: 100}}>
      <Image source={require('../images/quadra.png')} style={styles.topcard}/>
    </View>
  );
};

const Cards = ({navigation}) => {
  const playSound = async() => {
   const {sound} = await Audio.Sound.createAsync(
      require('../audio/court.mp3'));
     await sound.playAsync();
    
  }
 
  return(
    <View style={{alignItems: 'center'}}>

      <View style={{flexDirection: 'row', marginTop: 60}}>
        <TouchableOpacity onPress={() => navigation.navigate('Exercicios')}>
      <Image source={require('../images/fechar.png')}style={styles.voltar}/>
      </TouchableOpacity>
    <Image source={require('../images/logoreduzidadublin.png')}style={styles.logoreduzido2}/>
    </View>

    <Text style={styles.texttradutorcard}>Arraste o card para traduzir</Text>
    
    <View style={styles.cardview}>
      <GestureFlipView width={200} height={200}>
        {renderFront()}
        {renderBack()}
      </GestureFlipView>
      </View>

      <TouchableOpacity onPress={() => playSound()}>
      <Image source={require('../images/sompreto.png')}style={styles.som}/>
      </TouchableOpacity>

  
    </View>
  )
}

export default Cards

const styles = StyleSheet.create({
  viewrow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 30,
    width: '100%'
  },
  nextbutton: {
    width: 10,
    height: 25,
    marginHorizontal: 75,

    
  },
  textpreviewcard: {
    marginStart: -70,
    marginEnd: 70
  },
  botaoircard: {
    flexDirection: 'row'
  },
  textnextcard: {
    marginStart: 100,
    marginEnd: -70
  },
  som: {
    marginTop: 25,
    alignItems: 'center',
  },
  voltar: {
    marginEnd: 290
  },
  texttradutorcard: {
    marginTop: 30,
    fontSize: 15
  },
  cardbranco1: {
    backgroundColor: 'white',
    width: 350,
    height: 450,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  cardvermelho1: {
    backgroundColor: '#B9273F',
    width: 350,
    height: 450,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  cardview: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 170
  },
  topcard: {
    width: 350,
    height: 500,
    margin: 60,
    marginTop: 0
  },
  textvideogame1: {
    fontSize: 45,
    color: 'white'
  },
  textvideogame: {
    fontSize: 30,
    marginTop: -30
  }
})