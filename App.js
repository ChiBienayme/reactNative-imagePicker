import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }
  
  return (
    <View style={styles.container}>

      <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />

      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>

      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    margin: 10,
  },
  logo: {
    width: 200,
    height: 100,
    margin: 50,
    alignItems: "center",
  },

  instructions: {
    margin: 10,
  },
  button: {
    width: 150,
    height: "auto",
    marginLeft: 80,
  },
  buttonText: {
    margin: 10,
    fontSize: 18,
    backgroundColor: "blue",
    color: "white",
    textAlign: "center"
  },

  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
})