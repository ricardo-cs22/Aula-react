import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

import api from '../../services/api';


const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  async function createUser() {
    // Validação básica
    if (!name || !email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos corretamente!');
      return;
    }
  
    const userData = {
      email: email,
      name: name,
      password: password,
    };
  
    // Log para verificar o conteúdo
    console.log('Enviando dados do usuário:', userData);
  
    try {
      const response = await api.post('/user', userData);
      console.log('Usuário criado com sucesso', response.data);
  
      Alert.alert('Sucesso', 'Usuário criado com sucesso!');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao criar o usuário:', error.response?.data || error.message);
      Alert.alert('Erro', 'Erro ao criar o usuário, tente novamente.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Crie sua conta </Text>
      <Text style={styles.subHeader}>Crie sua conta para acessar nossa plataforma.</Text>

      <TextInput
        style={styles.input}
        placeholder="nome"
        placeholderTextColor="#999"
        value={name}
        onChangeText={setName}

      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Text style={styles.orText}>Ou</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.createAccountText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginButton}
        on
        onPress={() => {

          createUser();


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
