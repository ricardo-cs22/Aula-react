import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import api from '../../services/api';
const RegisterScreen = ({ navigation }) => {
  const [neme,setName] = useState("");
  const [email,setEmail] = useState ("");
  const [password,setPassword] = useState("");
  const [cpassword,setCPassword] = useState("");

  async function createUser() {
    const userFromApi = await api.post('/user',{
      name:neme.current.value,
      email:email.current.value,
      password:password.current.value 
    })
    
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Crie sua conta </Text>
      <Text style={styles.subHeader}>Crie sua conta para acessar nossa plataforma.</Text>

      <TextInput
        style={styles.input}
        placeholder="nome"
        placeholderTextColor="#999"
        value={setName}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
        value={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        value={setPassword}
        secureTextEntry
      />
       <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={setCPassword}
      />
      <Text style={styles.orText}>Ou</Text>
      <TouchableOpacity 
      onPress={() => navigation.navigate('Login')}>
        <Text style={styles.createAccountText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        on
        onPress={() =>{ if(name!=null || email!=null || password == cpassword){
          createUser(),
          navigation.navigate('Login')}
        }
          
        
          
        }>
        <Text style={styles.loginButtonText}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeader: {
    color: '#ccc',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  orText: {
    color: '#666',
    textAlign: 'center',
    marginVertical: 10,
  },
  createAccountText: {
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#4B0082',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
