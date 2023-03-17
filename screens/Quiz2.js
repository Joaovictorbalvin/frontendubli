import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import questions from '../data/Questiondata1';
import {AntDesign} from '@expo/vector-icons';


const Quiz2 = ({navigation}) => {
  const data = questions;
  const totalQuestions = data.length;
  // points
  const [points, setPoints] = useState(0);

  // index of the question
  const [index, setIndex] = useState(0);

  // answer Status (true or false)
  const [answerStatus, setAnswerStatus] = useState(null);

  // answers
  const [answers, setAnswers] = useState([]);

  // selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  // Counter
  const [counter, setCounter] = useState(15);

  // interval
  let interval = null;

  // progress bar
  const progressPercentage = Math.floor((index/totalQuestions) * 100);

  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setPoints((points) => points + 10);
        setAnswerStatus(true);
        answers.push({ question: index + 1, answer: true });
      } else {
        setAnswerStatus(false);
        answers.push({ question: index + 1, answer: false });
      }
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  {/*useEffect(() => {
    const myInterval = () => {
      if (counter >= 1) {
        setCounter((state) => state - 1);
      }
      if (counter === 0) {
        setIndex(index + 1);
        setCounter(15);
      }
    };

    interval = setTimeout(myInterval, 1000);

    // clean up
    return () => {
      clearTimeout(interval);
    };
  }, [counter]);*/}

  useEffect(() => {
    if (index + 1 > data.length) {
      clearTimeout(interval)
      navigation.navigate("Acertou", {
        answers: answers,
        points: points,
      });
    }
  }, [index]);

  useEffect(() => {
    if (!interval) {
      setCounter(15);
    }
  }, [index]);

  const currentQuestion = data[index];
  console.log(answerStatus)

  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Modulo2')}>
        <Image source={require('../images/voltar.png')} style={styles.voltar}/>
        </TouchableOpacity>

         <Image source={require('../images/logoreduzidadublin.png')} style={styles.dublireduzido}/>
     
      </View>

      <View
        style={{
          marginTop: 10,
          padding: 10,
          borderRadius: 6,
        }}
      >
        <Text style={{ fontSize: 30, alignSelf: 'center', marginTop: 25, textAlign: 'center' }}>
          {currentQuestion?.question}
        </Text>
        <View style={{ marginTop: 40, alignItems: 'center', }}>
          {currentQuestion?.options.map((item, index) => (
            <Pressable
              onPress={() => 
                selectedAnswerIndex === null && setSelectedAnswerIndex(index)  
              }
              
              style={
                selectedAnswerIndex === index &&
              index === currentQuestion.correctAnswerIndex
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 20,
                      backgroundColor: "#A5D112",
                      borderRadius: 20,
                      height: 55,
                      width: 350,
                    }
                  : selectedAnswerIndex != null && selectedAnswerIndex === index
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 1,
                      borderColor: "#DC0A37",
                      marginVertical: 20,
                      backgroundColor: "white",
                      borderRadius: 20,
                      height: 55,
                      width: 350
                    }
                  : {
                      flexDirection: "row",
                      alignItems: "center",
                      height: 55,
                      width: 350,
                      backgroundColor: 'white',
                      marginVertical: 20,
                      borderRadius: 20,
                    }
              }
            >

              <Text 
                style={
                  selectedAnswerIndex === index &&
                  index === currentQuestion.correctAnswerIndex
                      ? {
                          color: "#A5D112",
                          width: 70,
                          marginBottom: 25,
                          marginStart: 270,
                          height: 30,
                          marginBottom: 70
                        }
                      : selectedAnswerIndex != null && selectedAnswerIndex === index
                      ? {
                        marginBottom: 25,
                          marginStart: 400,
                          height: 30,
                          marginBottom: 70
                        }:
                        {
                          marginBottom: 25,
                          marginStart: 400,
                          height: 30,
                          marginBottom: 70
                          
                        }
                      }>
                +10 points
              </Text>

              <Text style={  selectedAnswerIndex === index &&
              index === currentQuestion.correctAnswerIndex
                  ? {
                      fontSize: 25,
                      color: 'white',
                      padding: 10,
                      marginStart: -330
                    }
                  : selectedAnswerIndex != null && selectedAnswerIndex === index
                  ? {
                    fontSize: 25,
                    color: 'black',
                    padding: 10,
                    marginStart: -390
                    } : {
                      fontSize: 25,
                      color: 'black',
                      padding: 10,
                      marginStart: -390
                    } 
                  }>{item.answer}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      <View
        style={
          answerStatus === null
            ? null
            : {
                marginTop: 20,
                padding: 10,
                borderRadius: 7,
                height: 120,
              }
        }
      >
        {index + 1 >= questions.length ? (
          <Pressable
            onPress={() =>
              setTimeout(() =>{
                if(points >= 20){
                navigation.navigate("Acertou", {
                  points: points,
  
                  answers: answers,
                })
              }else if(points <=10){
                navigation.navigate("Errou", {
                  points: points,
  
                  answers: answers,
                })
              }
              },30)
            
            }
            style={{
              backgroundColor: "#A5D112",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              width: 150,
              height: 40
            }}
          >
            <Text style={{ color: "white" }}>Done</Text>
          </Pressable>
        ) : answerStatus === null ? null : (
          <Pressable
            onPress={() => setIndex(index + 1)}
            style={{
              backgroundColor: "#A5D112",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 6,
              justifyContent: 'center',
              alignItems: 'center',
              width: 150,
              height: 40
            }}
          >
            <Text style={{ color: "white" }}>Next Question</Text>
          </Pressable>
        )}

            {/* Progress Bar */}
  
      <View
          style={{
            backgroundColor: "white",
            width: '100%',
            flexDirection: "row",
            alignItems: "center",
            height: 20,
            borderRadius: 20,
            justifyContent: "center",
            marginTop: 115,
            alignSelf: 'center'
            
          }}
        >
          <Text
            style={{
              backgroundColor: "#DC0A37",
              borderRadius: 12,
              position: "absolute",
              left: 0,
              height: 20,
              right: 0,
              width: `${progressPercentage}%`,
              marginTop: 20,
            }}
          />
         
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Quiz2;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 20
  },
  view1: {
    backgroundColor: 'white',
    marginTop: 30,
    padding: 10,
    borderRadius: 6
  },
  texttitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#00fff',
    marginVertical: 15,
    borderRadius: 20
  },
  options: {
    borderColor: '#00fff',
    textAlign: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 10,
  },
  voltar: {
    marginTop: 40,
    marginStart: 10
  },
  dublireduzido: {
    marginEnd: 20,
    marginTop: 40
  }

})