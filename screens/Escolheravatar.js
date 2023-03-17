import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SwiperFlatList} from 'react-native-swiper-flatlist';

const { width } = Dimensions.get('window');

const Escolheravatar = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.view3}>

      <TouchableOpacity style={styles.voltarbutton} onPress={() => navigation.navigate('Configuracao')}>
      <Image source={require('../images/voltar.png')} style={{marginTop: 0}}/>
      </TouchableOpacity>
      </View>
      <View style={styles.view4}>
      <Image source={require('../images/logodubli.png')} style={{marginTop: 0}}/>
      
      </View>

    <View style={styles.view1}>
      <SwiperFlatList showPagination style={{width: '100%', height: 540, alignSelf: 'center'}}>
        <View style={styles.view2}>
          <TouchableOpacity onPress={() => navigation.navigate("Avatar1")}>
          <Image source={require('../images/Avatar1.png')} style={styles.avatar1}/>
          </TouchableOpacity>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity  onPress={() => navigation.navigate("Avatar2")}>
          <Image source={require('../images/Avatar2.png')} style={styles.avatar2}/>
          </TouchableOpacity>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity  onPress={() => navigation.navigate("Avatar3")}>
          <Image source={require('../images/Avatar3.png')} style={styles.avatar3}/>
          </TouchableOpacity>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity  onPress={() => navigation.navigate("Avatar4")}>
          <Image source={require('../images/Avatar4.png')} style={styles.avatar1}/>
          </TouchableOpacity>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity  onPress={() => navigation.navigate("Avatar5")}>
          <Image source={require('../images/Avatar5.png')} style={styles.avatar2}/>
          </TouchableOpacity>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity  onPress={() => navigation.navigate("Avatar6")}>
          <Image source={require('../images/Avatar6.png')} style={styles.avatar3}/>
          </TouchableOpacity>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity  onPress={() => navigation.navigate("Avatar7")}>
          <Image source={require('../images/Avatar7.png')} style={styles.avatar1}/>
          </TouchableOpacity>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity  onPress={() => navigation.navigate("Avatar8")}>
          <Image source={require('../images/Avatar8.png')} style={styles.avatar2}/>
          </TouchableOpacity>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity  onPress={() => navigation.navigate("Avatar9")}>
          <Image source={require('../images/Avatar9.png')} style={styles.avatar3}/>
          </TouchableOpacity>
        </View>
       
      </SwiperFlatList>
    </View>

    <Text style={styles.textarraste}>Arraste para escolher outro avatar</Text>
    </View>

   
  )
}

export default Escolheravatar

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'center'
  },
  view1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  avatar1: {
    width: width * 0.45,
    height: 410,
    alignSelf: 'center',
    justifyContent: 'center'
  
  },
  avatar2: {
    width: width * 0.45,
    height: 410,
    alignSelf: 'center',
    justifyContent: 'center'
  
  },
  avatar3: {
    width: width * 0.45,
    height: 410,
    alignSelf: 'center',
    justifyContent: 'center'
  
  },
  button: {
    width: 180,
    height: 65,
    marginTop: 15,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 65

  },
  textescolher: {
    fontSize: 24
  },
  textarraste: {
    marginTop: 30
  },
  irprafrente1: {
    marginTop: 200,
    marginStart:30
  },
  irprafrente2: {
    marginTop: 200,
    marginStart:5
  },
  view2: {
    justifyContent: 'center',
    alignItems: 'center',
    width
  },
  view3: {
    flexDirection: 'row'
  },
  voltarbutton:{
    marginStart: -175,
    marginTop:-50
  },
  view4:{
    justifyContent: 'center',
    alignItems:'center'
  }
})