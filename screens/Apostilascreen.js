import { StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'

const Apostilascreen = ({navigation}) => {

  const [selected, setSelected] = React.useState("");
  
  const data = [
      {key:'1', value:'1st grade'},
      {key:'2', value:'2nd grade'},
      {key:'3', value:'3rd grade'},
      {key:'4', value:'4th grade'},
      {key:'5', value:'5th grade'},
     
  ]

  const [userdata, setUserdata] = React.useState(null)

  const loaddata = async () => {
      AsyncStorage.getItem('user')
          .then(async (value) => {
              fetch('http://192.168.0.19:3000/userdata', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'Bearer ' + JSON.parse(value).token
                  },
                  body: JSON.stringify({ email: JSON.parse(value).user.email })
              })
                  .then(res => res.json()).then(data => {
                      if (data.message == 'User Found') {
                          setUserdata(data.user)
                      }
                      else {
                          alert('Login Again')
                          navigation.navigate('Login')
                      }
                  })
                  .catch(err => {
                      navigation.navigate('Login')
                  })
          })
          .catch(err => {
              navigation.navigate('Login')
          })
  }
  useEffect(() => {
      loaddata()
  }, [])

  console.log('userdata ', userdata)

  return (
   <ScrollView>
      <View style={styles.container}>
      { userdata ?

<TouchableOpacity onPress={() => navigation.navigate('Configuracao')}>
<Image source={require('../images/avatarcirculomenu.png')} style={{width: 60.33, height: 66.41, marginStart: -155, marginTop: 50}}/>
</TouchableOpacity>

:
<TouchableOpacity onPress={() => navigation.navigate('Configuracao')}>
<Image source={require('../images/avatarcirculomenu.png')} style={{width: 60.33, height: 66.41, marginStart: -155, marginTop: 50}}/>
</TouchableOpacity>

}


<Image source={require('../images/logodubli.png')} style={{width: 71.4, height: 18.43, marginTop: -20}}/>

{ userdata ?

  

<TouchableOpacity onPress={() => navigation.navigate('Estrelalevel')}>
<Image source={require('../images/estrela.png')} style={{width: 52.59, height: 51.81, alignSelf: 'flex-end', marginEnd: -22, marginTop: -50}}/>
<Text style={styles.textlevel}>{userdata.ano}</Text>
</TouchableOpacity>

:

<TouchableOpacity onPress={() => navigation.navigate('Estrelalevel')}>
<Image source={require('../images/estrela.png')} style={styles.estrela}/>
</TouchableOpacity>
}


<View style={{marginTop: 40}}>
<Text style={{width: 320, height: 20}}>  Escolha o seu ano:</Text>

<SelectList boxStyles={{width: 320, height: 39, backgroundColor: 'white', borderRadius: 15, borderColor: 'white', marginTop: 15, elevation: 10}}
  setSelected={(val) => setSelected(val)} 
  data={data} 
  save="value"
/>
</View>

<TouchableOpacity onPress={() => navigation.navigate('Modulo1')} style={{width: 320, height: 102, backgroundColor: 'white', marginTop: 25, borderRadius: 20, justifyContent: 'center', elevation: 10}}>
  <View style={{flexDirection: 'row'}}>
    <View>
  <Image source={require('../images/imagemquiz1.png')} style={{marginStart: 10}}/>
  </View>
  <View style={{marginStart: 15}}>
    <Text style={{marginTop: 15, fontSize: 16}}>Chapter 1</Text>
    <Text style={{marginTop: 5, fontSize: 20}}>Knowing my school</Text>
  </View>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('Modulo2')} style={{width: 320, height: 102, backgroundColor: 'white', marginTop: 25, borderRadius: 20, justifyContent: 'center', elevation: 10}}>
  <View style={{flexDirection: 'row'}}>
    <View>
  <Image source={require('../images/capaquiz2.png')} style={{marginStart: 10}}/>
  </View>
  <View style={{marginStart: 15}}>
    <Text style={{marginTop: 15, fontSize: 16}}>Chapter 2</Text>
    <Text style={{marginTop: 5, fontSize: 20}}>My surroundings</Text>
  </View>
  </View>
</TouchableOpacity>

<TouchableOpacity style={{width: 320, height: 102, backgroundColor: 'white', marginTop: 25, borderRadius: 20, justifyContent: 'center', elevation: 10}}>
  <View style={{flexDirection: 'row'}}>
    <View>
  <Image source={require('../images/capaquiz3.png')} style={{marginStart: 10}}/>
  </View>
  <View style={{marginStart: 15}}>
    <Text style={{marginTop: 15, fontSize: 16}}>Chapter 3</Text>
    <Text style={{marginTop: 5, fontSize: 20}}>Knowing myself</Text>
  </View>
  </View>
</TouchableOpacity>

<TouchableOpacity style={{width: 320, height: 102, backgroundColor: 'white', marginTop: 25, borderRadius: 20, justifyContent: 'center', elevation: 10}}>
  <View style={{flexDirection: 'row'}}>
    <View>
  <Image source={require('../images/capaquiz4.png')} style={{marginStart: 10}}/>
  </View>
  <View style={{marginStart: 15}}>
    <Text style={{marginTop: 15, fontSize: 16}}>Chapter 4</Text>
    <Text style={{marginTop: 5, fontSize: 20}}>Land</Text>
  </View>
  </View>
</TouchableOpacity>

<TouchableOpacity style={{width: 320, height: 102, backgroundColor: 'white', marginTop: 25, borderRadius: 20, justifyContent: 'center', elevation: 10}}>
  <View style={{flexDirection: 'row'}}>
    <View>
  <Image source={require('../images/capaquiz5.png')} style={{marginStart: 10}}/>
  </View>
  <View style={{marginStart: 15}}>
    <Text style={{marginTop: 15, fontSize: 16}}>Chapter 5</Text>
    <Text style={{marginTop: 5, fontSize: 20}}>Plants</Text>
  </View>
  </View>
</TouchableOpacity>

<View>
<TouchableOpacity style={{width: 320, height: 40, marginTop: 20, borderRadius: 20}}>
</TouchableOpacity>
</View>

      </View>

   </ScrollView>
  )
}

export default Apostilascreen

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  dubli: {
    marginTop: -30
  },
  avatarcirculo: {
    marginTop: 50,
    marginEnd: 260,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  estrela: {
    marginStart: 260,
    marginTop: -42
  },
  view1: {
    width: 350,
    height: 100,
    borderRadius: 25,
    marginTop: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textcapitulo1: {
    marginTop: -70,
    marginStart: -75
  },
  myfriends: {
    marginTop: 5,
    marginStart: 60,
    width: 200,
    fontSize: 17
  },
  imageexercicio: {
    marginTop: -20,
    marginStart: 15,
    alignSelf: 'flex-start'
  },
  imageexercicio1: {
    marginTop: -5,
    marginStart: 15,
    alignSelf: 'flex-start'
  },
  textlevel: {
    fontSize: 25,
    marginStart: 275,
    marginTop: -43,
    color: 'white'
  }
})