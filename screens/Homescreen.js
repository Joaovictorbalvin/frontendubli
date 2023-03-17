import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, AsyncStorage } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'

const Homescreen = ({navigation}) => {

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
    <View style={styles.container}>

      { userdata ?

      <TouchableOpacity onPress={() => navigation.navigate('Configuracao')}>
      <Image source={require('../images/avatarcirculomenu.png')} style={{width: 60.33, height: 66.41, marginStart: -155, marginTop: 50}}/>
      </TouchableOpacity>

      :
      <TouchableOpacity onPress={() => navigation.navigate('Configuracao')}>
      <Image source={require('../images/avatarcirculomenu.png')} style={{width: 60.33, height: 66.41, marginStart: -150, marginTop: 50}}/>
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

      <View style={styles.view3}>
        <Text style={{ width: 320, height: 30, marginTop: 40}}>  Continue de onde parou</Text>


        <TouchableOpacity style={{width: 320, height: 430, backgroundColor: 'white', alignItems: 'center', marginTop: 0, borderRadius: 15, elevation: 10}} onPress={() =>
        navigation.navigate('Modulo1')}>
          <Image source={require('../images/capamenuano1.png')} style={{width: 320, height:440,  borderRadius: 15}}/>
          <Text style={{fontSize: 20, marginTop: -120, elevation: 15, marginStart: -190}}>Chapter 1</Text>
          <Text style={{fontSize: 25, marginTop: 10, elevation: 15, marginStart: -70}}>Me, my friends and{'\n'}my school</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default Homescreen

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
  deonde: {
    marginEnd: 100,
    marginTop: 20,
    fontSize: 18
  },
  homedeonde1: {
    width: 328,
    height: 300,
    marginTop: 10,
  },
  menuimagem: {
    width: 328,
    height: 100,
    backgroundColor: 'white',
    marginTop: -110,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    
  },
  view3: {
    marginTop: -10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button1: {
    backgroundColor: '#A5D112',
    borderRadius: 20,
    width: 330,
    height: 90,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  button2: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#DC0A37',
    borderRadius: 20,
    width: 330,
    height: 90,
    marginTop: 10
  },
  textgrammar: {
    color: 'white',
    fontSize: 24,
    padding: 10
  },
  capituloview: {
   marginTop: 10
  },
  capitulotext: {
    marginTop: -10,
    margin: 5,
    marginStart: 20
  },
  capitulotext1: {
    fontSize: 17,
    marginStart: 20
  },
  textlevel: {
    fontSize: 25,
    marginStart: 275,
    marginTop: -43,
    color: 'white'
  }
})