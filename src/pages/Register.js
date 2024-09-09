import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';


import logo from '../../assets/favicon.png'; 

export default function Register({navigation}) {
  return (
    <View style={styles.container}>
      <Image 
        source={logo}  
        style={styles.logo}
      />
      <Text style={styles.loginText}>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        autoCapitalize="none"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Repita sua Senha"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={() =>
        navigation.navigate('Home', {name: 'Home'})
      }>Acessar</Text>
      </TouchableOpacity>
      
      <Text style={styles.signupText}>
        Não possui conta? <Text style={styles.signupLink} onPress={() =>
          navigation.navigate('Register', {name: 'Register'})
        }
         >faça inscrição!</Text>
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
