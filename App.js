import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splashscreen from './screens/Splashscreen';
import Splashscreen2 from './screens/Splashscreen2';
import Login from './screens/Login';
import Telawelcome from './screens/Telawelcome';
import Menu from './screens/Menu';
import Estrelalevel from './screens/Estrelalevel';
import Modulo1 from './screens/Modulo1';
import Videoaula1 from './screens/Videoaula1';
import Configuracao from './screens/Configuracao';
import Video1 from './screens/Video1';
import Escolheravatar from './screens/Escolheravatar';
import Quiz1 from './screens/Quiz1';
import Acertou from './screens/Acertou';
import Cards from './screens/Cards1';
import Errou from './screens/Errou';
import Quiz2 from './screens/Quiz2';
import Modulo2 from './screens/Modulo2';
import Register from './screens/Register';
import Avatar1 from './screens/AvatarScreen/Avatar1';
import Avatar2 from './screens/AvatarScreen/Avatar2';
import Avatar3 from './screens/AvatarScreen/Avatar3';
import Avatar4 from './screens/AvatarScreen/Avatar4';
import Avatar5 from './screens/AvatarScreen/Avatar5';
import Avatar6 from './screens/AvatarScreen/Avatar6';
import Avatar7 from './screens/AvatarScreen/Avatar7';
import Avatar8 from './screens/AvatarScreen/Avatar8';
import Avatar9 from './screens/AvatarScreen/Avatar9';


const Stack = createNativeStackNavigator();
 

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Splashscreen' component={Splashscreen} options={{headerShown: false}}/>
      <Stack.Screen name='Splashscreen2' component={Splashscreen2} options={{headerShown: false}}/>
      <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
      <Stack.Screen name='Register' component={Register} options={{headerShown: false}}/>
      <Stack.Screen name='Telawelcome' component={Telawelcome} options={{headerShown: false}}/>
      <Stack.Screen name='Menu' component={Menu} options={{headerShown: false}}/>
      <Stack.Screen name='Estrelalevel' component={Estrelalevel} options={{headerShown: false}}/>
      <Stack.Screen name='Modulo1' component={Modulo1} options={{headerShown: false}}/>
      <Stack.Screen name='Videoaula1' component={Videoaula1} options={{headerShown: false}}/>
      <Stack.Screen name='Configuracao' component={Configuracao} options={{headerShown: false}}/>
      <Stack.Screen name='Video1' component={Video1} options={{headerShown: false}}/>
      <Stack.Screen name='Escolheravatar' component={Escolheravatar} options={{headerShown: false}}/>
      <Stack.Screen name='Acertou' component={Acertou} options={{headerShown: false}}/>
      <Stack.Screen name='Cards' component={Cards} options={{headerShown: false}}/>
      <Stack.Screen name='Errou' component={Errou} options={{headerShown: false}}/>
      <Stack.Screen name='Quiz1' component={Quiz1} options={{headerShown: false}}/>
      <Stack.Screen name='Quiz2' component={Quiz2} options={{headerShown: false}}/>
      <Stack.Screen name='Modulo2' component={Modulo2} options={{headerShown: false}}/>
      <Stack.Screen name='Avatar1' component={Avatar1} options={{headerShown: false}}/>
      <Stack.Screen name='Avatar2' component={Avatar2} options={{headerShown: false}}/>
      <Stack.Screen name='Avatar3' component={Avatar3} options={{headerShown: false}}/>
      <Stack.Screen name='Avatar4' component={Avatar4} options={{headerShown: false}}/>
      <Stack.Screen name='Avatar5' component={Avatar5} options={{headerShown: false}}/>
      <Stack.Screen name='Avatar6' component={Avatar6} options={{headerShown: false}}/>
      <Stack.Screen name='Avatar7' component={Avatar7} options={{headerShown: false}}/>
      <Stack.Screen name='Avatar8' component={Avatar8} options={{headerShown: false}}/>
      <Stack.Screen name='Avatar9' component={Avatar9} options={{headerShown: false}}/>

    </Stack.Navigator>
  
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
