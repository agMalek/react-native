



import React, {useState} from 'react'
import {Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
/* import { useState } from 'react' */


const App = () => {


   const [selectedImage, setSelectedImage] = useState(null) 

  


  let openImagePicker = async () => {
    let rta = await ImagePicker.requestMediaLibraryPermissionsAsync()   
  
    if(rta.granted === false){
      alert('Los permisos son requeridos')
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync()
    
    if(result.cancelled === true){
      return
    }

    setSelectedImage({localUri: result.uri})

  }

  


  return (
    <View style={styles.container}>
      <Text style={styles.texto}> Hola Mundo !!!</Text>
      <Image
        source={{uri: selectedImage !== null ? selectedImage.localUri : 'https://picsum.photos/200/200'}}
        style={styles.imagen}
      ></Image>
      <TouchableOpacity
          //onPress={()=> Alert.alert('Hola!!!!')}
          onPress={openImagePicker}
          style= {styles.boton}
      >
        <Text style={styles.textoBoton}>
          Press me
        </Text>
      </TouchableOpacity>
      
      
      
      {/* <Button
        color = 'red'
        title = 'Apretame'
        onPress= {()=> Alert.alert('Hola!!!!')}
      ></Button> */}
    </View>
  );

}; 

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#555'
  },
  texto: {
    fontSize: 50,
    color: '#fff'
  },
  imagen:{
    height: 200,
    width: 200,
  },
  boton: {
    backgroundColor: 'cyan',
    padding: 10,
    marginTop: 15,
    borderRadius: 30,
    width: 300
  },
  textoBoton: {
    textAlign: 'center'
    
  }



})


export default App
















/* import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hola Mundo!</Text>
      <StatusBar style="auto" />
    </View>
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
 */