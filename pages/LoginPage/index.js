import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from './styles';

export default function LoginPage({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        // Simulando credenciais válidas (substitua por suas credenciais reais)
        const validEmail = 'usuario@example.com';
        const validPassword = 'senha123';

        if (email === validEmail && password === validPassword) {
            // Credenciais corretas, navegue para a tela de Home
            navigation.navigate('HomePage');
        } else {
            // Credenciais incorretas, exiba uma mensagem de erro
            setErrorMessage('Credenciais inválidas. Tente novamente.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Bem-vindo de volta!</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#777"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#777"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
            <View style={styles.linkContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPasswordPage')}
                >
                    <Text style={styles.link}>Esqueceu a senha?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('RegisterPage')}
                >
                    <Text style={styles.link}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
