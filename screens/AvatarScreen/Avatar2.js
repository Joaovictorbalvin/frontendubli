import { StyleSheet, Text, View, AsyncStorage, ActivityIndicator, TextInput, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'



const Avatar2 = ({navigation}) => {
  setTimeout(() => {
    handleDescription()
    navigation.navigate('Configuracao')
  }, 1000)
  const [avatar, setAvatar] = useState('2')

    const [loading, setLoading] = useState(false)


    const handleDescription = () => {

        if (avatar == '') {
            alert('Please enter username')
        }
        else {
            setLoading(true)
            AsyncStorage.getItem('user').then(
                data => {
                    fetch('http://192.168.0.19:3000/setavatar', {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: JSON.parse(data).user.email,
                            avatar: avatar
                        })
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.message === "Description Updated Successfully") {
                                setLoading(false)
                                
                                navigation.navigate('Configuracao')
                            }
                            else if (data.error === "Invalid Credentials") {
                                alert('Invalid Credentials')
                                setLoading(false)
                                navigation.navigate('Configuracao')
                            }
                            else {
                                setLoading(false)
                                alert("Please Try Again");
                            }
                        })
                        .catch(err => {
                            alert('Something went wrong')
                            setLoading(false)
                        })
                }
            )
                .catch(err => {
                    alert('Something went wrong')
                    setLoading(false)
                })
        }

        // navigation.navigate('Signup_ChoosePassword')
    }

  return (
    <View style={styles.view1}>
        <Text style={styles.textinput}/>

      {
                loading ? <ActivityIndicator /> :
            
                <TouchableOpacity onPress={() => handleDescription()} style={styles.touch}>
                    <Image  source={require('../../images/Avatar2.png')} style={{width: 220, height: 410}}
                        
                    />
                    <Image source={require('../../images/acertou.png')} style={styles.botaoacertou}/>
                    </TouchableOpacity>
                    
                     
            }

    </View>
  )
}

export default Avatar2

const styles = StyleSheet.create({
    textinput:{
      marginTop: 100
    },
    view1: {
      justifyContent: 'center', 
      width: '100%',
      height: '100%',
      alignItems: 'center'
  },
  touch: {
    justifyContent: 'center', 
    alignItems: 'center'
  },
  botaoacertou: {
    marginTop: 40
  }
})