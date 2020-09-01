import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Image, StyleSheet, Text, Button, View, TextInput } from 'react-native';



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
      <ImageBackground source={require('./app/images/backgroundbb.png')} style={styles.background}>
        
      <View style={styles.container}>
      <Image source={require('./app/images/logoborabeber.png')}></Image>

          <Text style={styles.text}>Bora Beber?</Text>
        

          
       <View style={styles.cadastro}>
         
         <Text style={styles.cadastro}>Cadastrar</Text>
       </View>

       <View style={styles.cadastro}>
         <Text style={styles.cadastro}>Login</Text>
       </View>


       

         <StatusBar style="auto" />
      
      </View>
      <View style={styles.convite} >
         <Text style={styles.convite}>Indique Para os Amigos</Text>
       </View>
      </ImageBackground>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center' 
  },
  background: {
    flex: 1,
    resizeMode: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  logo: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'Roboto_500Medium_Italic',
    fontSize:  46,
    color: '#FFF'
  },
  cadastro: {
    width: 352,
    height: 52,
    marginTop: 10,
    backgroundColor: '#024A13',
    padding: 8,
    color: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 24,

    borderRadius: 8,
    fontFamily: 'Roboto_400Regular_Italic'
      
  },
  convite:{
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Roboto_300Light_Italic',

    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
});



