import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, AsyncStorage } from 'react-native'
import React, { useState } from 'react'
import { Font } from 'expo-font';


const Login = ({navigation}) => {
   


    const [email, setEmail] = React.useState('')
    const [senha, setSenha] = React.useState('')
   
    const handleLogin = () => {
        if (email == '' || senha == '') {
            alert('Please enter email and senha')
        }
        else {
            fetch('http://192.168.0.19:3000/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    senha
                })
            })
                .then(res => res.json())
                .then(async data => {
                    if (data.error) {
            
                        alert(data.error)
                    }
                    else if (data.message == 'Successfully Signed In') {
                        
                        await AsyncStorage.setItem('user', JSON.stringify(data))
                        navigation.navigate('Telawelcome', { data })
                    }
                })
                .catch(err => {
                    alert(err)
                })
            }
        }
 
  return (
    <View style={styles.container}>

        <View style={styles.dublivermelho}>
        <Image source={require('../images/logodublivermelho.png')}/>
        <Text style={styles.texteducacao}>APRENDER INGLÊS COM FLUÊNCIA{'\n'}NA ESCOLA REGULAR É POSSÍVEL!</Text>
        </View>

        <View style={styles.viewlogin}>
      <TextInput style={styles.email} placeholder=' Email' onChangeText={(text) => setEmail(text)}/>
      <TextInput style={styles.email} placeholder=' Senha' secureTextEntry={true}
      onChangeText={(text) => setSenha(text)}/>
      <TouchableOpacity onPress={() =>  handleLogin()} style={styles.buttonlogin}>
        <Text style={styles.textlogin}>LOGIN</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.viewregistrar}>
        <Text style={styles.textvocenaotemumaconta}>Esqueceu a senha?<Text style={styles.textcliqueaqui}> Clique aqui.</Text></Text>
        <Text style={styles.textvocenaotemumaconta}>Não tem uma conta?<Text style={styles.textcliqueaqui} onPress={() => navigation.navigate('Register')}> Registre-se aqui.</Text></Text>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F3F3F3',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    email: {
        backgroundColor: 'white',
        width: 300,
        height: 50,
        padding: 10,
        borderRadius: 26,
        elevation: 10,
        margin: 10,
    },
    dublivermelho: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0
    },
    viewlogin: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80
    },
    texteducacao: {
        margin: 10,
    },
    buttonlogin: {
        backgroundColor: '#1099A0',
        width: 85,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 26,
        margin: 10
    },
    textlogin: {
        color: 'white',

    },
    viewregistrar: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40

    },
    textcliqueaqui: {
        margin: 10,
        color: '#1099A0'
    },
    textvocenaotemumaconta: {
        margin: 3,
    }
})