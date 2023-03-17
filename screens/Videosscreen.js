import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native'
import React, { useEffect } from 'react'
import { SelectList } from 'react-native-dropdown-select-list'

const Videosscreen = ({navigation}) => {

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

      
        <View style={styles.view}>

        <TouchableOpacity onPress={() => navigation.navigate('Videoaula1')}>
        <Image source={require('../images/video1.png')} style={styles.imagevideo}/>
        </TouchableOpacity>


        <Image source={require('../images/video2.png')} style={styles.imagevideo2}/>

        <Image source={require('../images/video3.png')} style={styles.imagevideo}/>
        <Image source={require('../images/video4.png')} style={styles.imagevideo2}/>

        <Image source={require('../images/video5.png')} style={styles.imagevideo}/>
        <Image source={require('../images/video6.png')} style={styles.imagevideo2}/>

        </View>

    </View>
    </ScrollView>
  )
}

export default Videosscreen

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
  scrollview: {
    width: '100%',
    height: 1200,
    marginTop: 10
  },
  view: {
    width: '100%',
    height: 1200
  },
  imagevideo: {
    width: 155,
    height: 333,
    marginStart: 30,
    marginTop: 35,
    borderRadius: 20
  },
  imagevideo2: {
    width: 155,
    height: 333,
    marginTop: -332,
    marginEnd: 30,
    alignSelf: 'flex-end',
    borderRadius: 20
  },
  textlevel: {
    fontSize: 25,
    marginStart: 275,
    marginTop: -43,
    color: 'white'
  }
})