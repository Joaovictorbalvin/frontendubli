import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native'
import React, { useEffect } from 'react'

const Estrelalevel = () => {

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
      <Image source={require('../images/logodubli.png')}/>

      <View style={styles.view1}>
        
        <View style={styles.estrelagrande}>
        <Image source={require('../images/estrelagrande.png')}/>
            <Image source={require('../images/Avatarcirculo.png')} style={styles.avatarcirculoestrelalevel}/>

            </View>

      </View>

        { userdata ?

       <View>
      <Text style={styles.congrats}>Congrats, João!{"\n"}Você está no nível {userdata.ano}</Text>
      <Text style={styles.continuemelhorando}>Continue sempre melhorando!</Text>
    </View>

        :

        <View>
      <Text style={styles.congrats}>Congrats, João!{"\n"}Você está no nível 7</Text>
      <Text style={styles.continuemelhorando}>Continue sempre melhorando!</Text>
    </View>
}

    </View>
   
  )
}

export default Estrelalevel

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        marginTop: 90
    },
    view1: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    estrelagrande: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarcirculoestrelalevel: {
        width: 100,
        height: 110,
        marginTop: -185
    },
    congrats: {
        fontSize: 25,
        marginTop: 100,
        textAlign: 'center'
    },
    continuemelhorando: {
        fontSize: 20,
        marginTop: 20,
        textAlign: 'center'
    }
})