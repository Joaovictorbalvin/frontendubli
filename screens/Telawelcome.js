import { StyleSheet, Text, View, Image, AsyncStorage } from 'react-native'
import React, { useEffect } from 'react'

const Telawelcome = ({navigation}) => { 
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

    setTimeout (() => {
        navigation.navigate('Menu')
    }, 3000);
    
  return (
    <View style={styles.View}>
      <Image source={require('../images/Avatarcirculo.png')} style={styles.avatarcirculo}/>

      { userdata ?
      <Text style={styles.textwelcome}>Hi {userdata.nome},{'\n'}welcome back!</Text> :
      <Text>Name</Text>
}
      <Image source={require('../images/logodublivermelho.png')} style={styles.dublivermelho}/>
    </View>
  )
}

export default Telawelcome

const styles = StyleSheet.create({
    View: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#F3F3F3'
    },
    avatarcirculo: {
        width: 120,
        height: 130
    },
    textwelcome: {
        fontSize: 30,
        margin: 5
    },
    dublivermelho: {
        width: 70,
        height: 18,
        marginEnd: 131
    }
})