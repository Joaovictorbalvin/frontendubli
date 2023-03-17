import { StyleSheet, Text, View, Image, Switch, TouchableOpacity, AsyncStorage, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'

const Configuracao = ({navigation}) => {
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
    <View style={styles.container} >
        
        <TouchableOpacity style={styles.voltar} onPress={() => navigation.navigate('Home')}>
            <Image source={require('../images/voltar.png')}/>
        </TouchableOpacity>
        

        <Image source={require('../images/logodubli.png')} style={styles.dublilogo}/>

        <TouchableOpacity onPress={() => navigation.navigate('Escolheravatar')} >
      <Image source={require('../images/avatarcirculoconfiguracao.png')} style={styles.avatarcirculo}/>
      </TouchableOpacity>

        { userdata ?
      <View style={styles.view1}>
        <Text style={styles.nomejoao}>{userdata.nome}</Text>
      </View>
        :
        <View style={styles.view1} />

        }
        { userdata ?
      <View style={styles.view2}>
        <Text style={styles.numeroestatistico1}>{userdata.pontos}</Text>
        <Text style={styles.pontostext}>Pontos </Text>
        <Text style={styles.numeroestatistico2}>{userdata.tarefa}</Text>
        <Text style={styles.tarefastext}>Tarefas{'\n'}Concluidas </Text>
      </View>
      : 
      <View style={styles.view2}/>
        }

        { userdata ?
      <View style={styles.view3}>
        <Text style={styles.estrelatext}>Level</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Estrelalevel')}>
        <Image style={styles.estrelaconfig} source={require('../images/levelconfig.png')}/>
        <Text style={styles.textano}>{userdata.ano}</Text>
        </TouchableOpacity>
        </View>
            :
            <View style={styles.view3}>
            <Text style={styles.estrelatext}>Level</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Estrelalevel')}>
            <Image style={styles.estrelaconfig} source={require('../images/levelconfig.png')}/>
            </TouchableOpacity>
            </View>
}

        <Image style={styles.imageconfig} source={require('../images/imageconfiguracao.png')}/>
        <Text style={styles.textconfiguracao}>Configurações</Text>

        <View style={styles.view4}>
            <Text style={styles.textlingua}>Língua</Text>
            
            <View style={styles.efeitossonorosswitch}>
            <Text style={{marginTop: 0, alignSelf: 'flex-start', height: 30}}>Efeitos Sonoros</Text>
            <Switch style={{marginStart: 250, marginTop: -45}}  />
            </View>

            <View style={styles.notificacaoswitch}>
            <Text style={{marginTop: 0, alignSelf: 'flex-start', height: 30}}>Notificações</Text>
            <Switch style={{marginStart: 250, marginTop: -40}}  />
            </View>

            <Text style={styles.textsobre}>Sobre</Text>
            <Text style={styles.sairtext} onPress={() => navigation.navigate('Login')}>Sair</Text>
        </View>

    </View>
  )
}

export default Configuracao

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    dublilogo: {
        marginTop: 10
    },
    avatarcirculo: {
        marginTop: 20
    },
    view1: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: 270,
        height: 70,
        borderRadius: 50,
        marginTop: 20
    },
    view2: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 120,
        marginEnd: 140,
        borderRadius: 30,
        marginTop: 20,
    },
    view3: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: 110,
        height: 120,
        marginStart: 230,
        borderRadius: 30,
        marginTop: -120
    },
    view4: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 250,
        borderRadius: 30,
        marginTop: 0
    
    },
    nomejoao: {
        fontSize: 35
    },
   sairtext: {
    width: 300,
    height: 40,
    marginTop: 10
   },
   textsobre: {
    width: 300,
    height: 40,
    marginTop: 10,
    margin: -10
    
   },
   efeitossonorosswitch: {
    width: 300,
    height: 40,
    margin: -20
    
   },
   notificacaoswitch: {
    width: 300,
    height: 40,
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
   },
   textlingua: {
    width: 300,
    height: 40,
    margin: 25,
    marginTop: 25
    
   },
   textconfiguracao: {
    fontSize: 20,
    marginTop: -27,
    height: 40,
    width: '100%',
    marginStart: 160
   },
   imageconfig: {
    marginTop: 15,
    marginEnd: 270
   },
   estrelaconfig: {
    marginTop: 5,
   },
   estrelatext: {
    fontSize: 20,
    marginTop: -20
   },
   pontostext: {
    fontSize: 17,
    marginStart: 40,
    marginTop: -20
    
   },
   tarefastext: {
    fontSize: 17,
    marginStart: 70,
    marginTop: -30
   },
   numeroestatistico1: {
    marginStart: -125,
    marginTop: 0,
    fontSize: 17,
    color: '#A5D112'
    
   },
   numeroestatistico2: {
    marginStart: -125,
    marginTop: 30,
    fontSize: 17,
    color: '#A5D112'
    
   },
   voltar: {
    marginEnd: 330,
    marginTop: 50
   },
   textano: {
    marginTop: -42,
    marginStart: 20,
    fontSize: 20,
    color: 'white'
   }
})