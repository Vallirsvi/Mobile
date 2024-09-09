import React, { useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AuthContext from '../contexts/auth';


import logo from '../../assets/favicon.png'; 

export default function Home({navigation}) {
  const { signed, token, email} = useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Tela Home</Text> 
      <Text>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>
      <Text> email : {email}</Text>
      <Text>logado : {signed}</Text>
      <Text>token : {token}</Text>
      <Text>- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</Text>

      <TouchableOpacity   style={styles.button}>
        
        <Text style={styles.buttonText} onPress={() =>
        navigation.navigate('Login', {name: 'Sair'})
      }>Sair</Text>
      </TouchableOpacity >
      
      <Text style={styles.signupText} 
     >
        Não possui conta? <Text style={styles.signupLink}>faça inscrição!</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 15,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#7289da', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    fontSize: 14,
    color: '#777',
  },
  signupLink: {
    color: '#7289da', 
    fontWeight: 'bold',
  },
});
