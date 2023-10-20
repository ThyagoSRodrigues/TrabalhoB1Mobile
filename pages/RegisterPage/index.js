import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import styles from './styles';

export default function RegisterPage({ navigation }) {
    const handleRegister = () => {
        // Lógica de registro (pode ser deixada em branco para fins de teste)
        // Se o registro for bem-sucedido, navegue para a tela de "Home" ou outra tela desejada
        navigation.navigate('HomePage'); // Substitua 'HomePage' pelo nome da tela de destino
    };

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Cadastre-se</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#777"
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#777"
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#777"
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Confirme a senha"
                placeholderTextColor="#777"
                secureTextEntry
            />
            <TouchableOpacity
                style={styles.registerButton}
                onPress={handleRegister}
            >
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <View style={styles.linkContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('LoginPage')}
                >
                    <Text style={styles.link}>Já tem uma conta? Faça login.</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}