import { StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'

const Exerciciosscreen = ({navigation}) => {

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

<TouchableOpacity onPress={() => navigation.navigate('Cards')} style={{width: 320, height: 102, backgroundColor: 'red', marginTop: 20, borderRadius: 20, justifyContent: 'center'}}>
  <View style={{flexDirection: 'row'}}>
  <Text style={{marginStart: 30, fontSize: 24, color: 'white'}}>01 - Court</Text>
  <Image source={require('../images/som.png')} style={{marginStart: 130}}/>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('Cards')} style={{width: 320, height: 102, backgroundColor: 'red', marginTop: 20, borderRadius: 20, justifyContent: 'center'}}>
  <View style={{flexDirection: 'row'}}>
  <Text style={{marginStart: 30, fontSize: 24, color: 'white'}}>02 - Classroom</Text>
  <Image source={require('../images/som.png')} style={{marginStart: 80}}/>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('Cards')} style={{width: 320, height: 102, backgroundColor: 'red', marginTop: 20, borderRadius: 20, justifyContent: 'center'}}>
  <View style={{flexDirection: 'row'}}>
  <Text style={{marginStart: 30, fontSize: 24, color: 'white'}}>03 - Library</Text>
  <Image source={require('../images/som.png')} style={{marginStart: 115}}/>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('Cards')} style={{width: 320, height: 102, backgroundColor: 'red', marginTop: 20, borderRadius: 20, justifyContent: 'center'}}>
  <View style={{flexDirection: 'row'}}>
  <Text style={{marginStart: 30, fontSize: 24, color: 'white'}}>04 - Happy</Text>
  <Image source={require('../images/som.png')} style={{marginStart: 120}}/>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('Cards')} style={{width: 320, height: 102, backgroundColor: 'red', marginTop: 20, borderRadius: 20, justifyContent: 'center'}}>
  <View style={{flexDirection: 'row'}}>
  <Text style={{marginStart: 30, fontSize: 24, color: 'white'}}>05 - Sad</Text>
  <Image source={require('../images/som.png')} style={{marginStart: 150}}/>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('Cards')} style={{width: 320, height: 102, backgroundColor: 'red', marginTop: 20, borderRadius: 20, justifyContent: 'center'}}>
  <View style={{flexDirection: 'row'}}>
  <Text style={{marginStart: 30, fontSize: 24, color: 'white'}}>06 - Sick</Text>
  <Image source={require('../images/som.png')} style={{marginStart: 145}}/>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('Cards')} style={{width: 320, height: 102, backgroundColor: 'red', marginTop: 20, borderRadius: 20, justifyContent: 'center'}}>
  <View style={{flexDirection: 'row'}}>
  <Text style={{marginStart: 30, fontSize: 24, color: 'white'}}>07 - Angry</Text>
  <Image source={require('../images/som.png')} style={{marginStart: 130}}/>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('Cards')} style={{width: 320, height: 102, backgroundColor: 'red', marginTop: 20, borderRadius: 20, justifyContent: 'center'}}>
  <View style={{flexDirection: 'row'}}>
  <Text style={{marginStart: 30, fontSize: 24, color: 'white'}}>08 - Pencil</Text>
  <Image source={require('../images/som.png')} style={{marginStart: 130}}/>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('Cards')} style={{width: 320, height: 102, backgroundColor: 'red', marginTop: 20, borderRadius: 20, justifyContent: 'center'}}>
  <View style={{flexDirection: 'row'}}>
  <Text style={{marginStart: 30, fontSize: 24, color: 'white'}}>09 - Pen</Text>
  <Image source={require('../images/som.png')} style={{marginStart: 155}}/>
  </View>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('Cards')} style={{width: 320, height: 102, backgroundColor: 'red', marginTop: 20, borderRadius: 20, justifyContent: 'center'}}>
  <View style={{flexDirection: 'row'}}>
  <Text style={{marginStart: 30, fontSize: 24, color: 'white'}}>10 - Eraser</Text>
  <Image source={require('../images/som.png')} style={{marginStart: 130}}/>
  </View>
</TouchableOpacity>

<TouchableOpacity style={{width: 320, height: 40, marginTop: 20, borderRadius: 20, justifyContent: 'center'}}>
</TouchableOpacity>

      </View>

   </ScrollView>
  )
}

export default Exerciciosscreen

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