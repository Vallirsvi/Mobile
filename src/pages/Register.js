import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";


const icon = require("../../assets/favicon.png");

const Register= ({navigation}) => (
    <View style={styles.container}>
      <Image style={styles.image} source={icon} />
      <View style={styles.body}>
        <Text style={styles.title}>Registro</Text>
        <View style={styles.areaInput}>
          <TextInput
            style={styles.textField}
            placeholder=" informe seu Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.textField}
            placeholder="informe sua senha"
            keyboardType="default"
            secureTextEntry
          />
          <TextInput
            style={styles.textField}
            placeholder="repita a senha"
            keyboardType="default"
            secureTextEntry
          />
          <TouchableOpacity style={styles.button}
           onPress={() =>  navigation.navigate('Home', {name: 'home'})
          }
          >
            <Text style={(styles.buttonText)}>
              Registrar
            </Text>
          </TouchableOpacity>

          <View style={styles.rodape}>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
 );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    height: "60%",
    width: "100%",
    alignItems: "center",
  },
  image: {
    height: "20%",
    width: "100%",
    resizeMode: "contain",
  },
  areaInput: {
    width: "100%",
    height: "80%",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 32,
    marginTop: 15,
  },
  textField: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
    width: "80%",
    height: 50,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#778eec",
    borderRadius: 10,
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  rodape: {
    flexDirection: "row",
    width: "62.75%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  rodapeText: {
    fontSize: 11,
  },
  buttonText : {
    fontSize: 18,
    color: "red",
    fontWeight: "bold"
  }
});

export default Register;