import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../store/userSlice';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Validação de campos conforme o requisito 2.1
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    // Armazenamento temporário via Redux Toolkit
    const user = { email, name: 'Usuário FECAF' };
    dispatch(login(user));
    
    // Navega para a listagem principal
    navigation.replace('Main');
  };

  return (
    <View style={styles.container}>
      {/* Importação do Logo da pasta Assets */}
      <Image 
        source={require('../assets/logo.png')} 
        style={styles.logo} 
      />
      
      <Text style={styles.subtitle}>FECAF ECOMERCE</Text>
      
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 25, backgroundColor: '#fff' },
  logo: { width: 200, height: 150, alignSelf: 'center', marginBottom: 10, resizeMode: 'contain' },
  subtitle: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 30, color: '#333' },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 15, borderRadius: 10, marginBottom: 15, backgroundColor: '#f9f9f9' },
  button: { backgroundColor: '#28a745', padding: 15, borderRadius: 10, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});