import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { Video } from 'expo-av'

const Video1 = () => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video 
      ref={video}
      style={styles.video}
      source={require('../images/videoaulas1.mp4')}
      useNativeControls
      resizeMode='cover'
      isLooping
      onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
     
    </View>
  )
}

export default Video1

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'

    },
    video: {
        alignSelf: 'center',
        width: '100%',
        height: '100%'
        
    },
   
})