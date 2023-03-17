import { StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator, AsyncStorage } from 'react-native'
import React, { useState } from 'react'


const Acertou = ({navigation}) => {
    setTimeout(() => {
        handleDescription()
        navigation.navigate('Modulo1') 
      }, 1000)

    const [ano, setAno] = useState('2')
    const [tarefa, setTarefa] = useState('1')
    const [pontos, setPontos] = useState('10')

    const [loading, setLoading] = useState(false)


    const handleDescription = () => {

        if (ano == '') {
            alert('Please enter username')
        }
        else {
            setLoading(true)
            AsyncStorage.getItem('user').then(
                data => {
                    fetch('http://192.168.0.19:3000/setano', {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: JSON.parse(data).user.email,
                            ano: ano, pontos: pontos, tarefa: tarefa
                        })
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.message === "Description Updated Successfully") {
                                setLoading(false)
                                
                                navigation.navigate('Modulo1')
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
    <View style={styles.container}>
        <Text style={styles.textcongra}>Congratulations!</Text>
        <Text style={styles.textfinish}>You finished the chapter!</Text>

        {
                loading ? <ActivityIndicator /> :
            
                <TouchableOpacity>
                <Image source={require('../images/acertou.png')} style={styles.imageacertou}/>
                </TouchableOpacity>
                    
                     
            }
    </View>
  )
}

export default Acertou

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textcongra: {
        fontSize: 35,
        marginTop: 40
    },
    textfinish: {
        fontSize: 20
    },
    imageacertou: {
        margin: 20
    }
})