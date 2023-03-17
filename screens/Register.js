import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Register = ({navigation}) => {

  const [fdata, setFdata] = useState({
    nome: '',
    email: '',
    senha: '',
    datadenascimento: '',
    ano: '',
    tarefa: '',
    pontos: '',
    avatar: '',
    telefone: '',
    

  })

  const [errormsg, setErrormsg]= useState(null);

  const Sendtobackend = () => {
    if(fdata.nome == '' ||
    fdata.email == '' ||
    fdata.senha == '' ||
    fdata.tarefa == '' ||
    fdata.telefone == '' ||
    fdata.ano == '' ||
    fdata.avatar == '' ||
    fdata.datadenascimento == '' ||
    fdata.pontos == ''
    ){
      setErrormsg("Please fill all the fields");
      return;
  }
  else{
    fetch('http://192.168.0.19:3000/signup',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(fdata)

    })
    .then(res => res.json()).then(
      data => {
          console.log(data);
          if(data.error){

          }else{
          
            navigation.navigate('Login')
          }
      }
    )
  }
}

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
      <TextInput placeholder='Nome' onChangeText={(text) => setFdata({...fdata, nome: text})}/>
      <TextInput placeholder='Email' onChangeText={(text) => setFdata({...fdata, email: text})}/>
      <TextInput placeholder='Senha' onChangeText={(text) => setFdata({...fdata, senha: text})}/>
      <TextInput placeholder='Telefone' onChangeText={(text) => setFdata({...fdata, telefone: text})}/>
      <TextInput placeholder='Pontos' onChangeText={(text) => setFdata({...fdata, pontos: text})}/>
      <TextInput placeholder='Avatar' onChangeText={(text) => setFdata({...fdata, avatar: text})}/>
      <TextInput placeholder='Tarefas' onChangeText={(text) => setFdata({...fdata, tarefa: text})}/>
      <TextInput placeholder='Data de Nascimento' onChangeText={(text) => setFdata({...fdata, datadenascimento: text})}/>
      <TextInput placeholder='Ano' onChangeText={(text) => setFdata({...fdata, ano: text})}/>

      <TouchableOpacity onPress={() => {
        Sendtobackend();
      }}>
        <Text>Registrar</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  view1: {
    marginTop: 100
  }
})