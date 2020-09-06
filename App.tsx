import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, Button, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';



import { AppLoading } from 'expo';
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';

export default () => {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ImageBackground source={require('./src/assets/backgroundbb.png')} style={styles.background}>
        
      <View style={styles.container}>
      <Image source={require('./src/assets/logoborabeber.png')}></Image>
      <Text style={styles.text}>Bora Beber?</Text>

      

      </View>

      <View style={styles.form}>
      <TouchableOpacity style={styles.Button}>
        <Text style={{ fontFamily: 'Roboto_300Light_Italic', fontSize: 24, color: '#FFF' }}> CADASTRAR</Text>
      </TouchableOpacity>

      <TouchableOpacity  style={styles.Button}>
        <Text style={{ fontFamily: 'Roboto_300Light_Italic', fontSize: 24, color: '#FFF' }}> LOGIN</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
        <Text 
        style={{ fontFamily: 'Roboto_300Light', fontSize: 14, color: '#FFF' }}>
          Indique para os Amigos 
          <Image source={require('./src/assets/localização.png')}></Image>
        </Text>
        </TouchableOpacity>
      </View>
      
      </ImageBackground>
    );
  };
};

const styles = StyleSheet.create({
  container: {
  marginTop: 90, justifyContent: 'center', alignItems: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
  flex: 1, justifyContent: 'center', alignItems: 'center' 
  },
  text: {
    fontFamily: 'Roboto_500Medium_Italic',
    fontSize:  42,
    color: '#FFF'
  },
  Button: {
    marginTop: 20,
    backgroundColor: '#024A13',
    width: 332,
    height: 52,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,

  },
  footer: {
   alignItems: 'center',
   justifyContent: 'center',
   marginBottom: 20,
   
  
  }
  
});



