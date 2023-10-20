import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import styles from './styles';

export default function ForgotPasswordPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Esqueci a Senha</Text>
            <Text style={styles.subheading}>
                Insira seu endereço de e-mail para redefinir a senha.
            </Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#777"
            />
            <TouchableOpacity style={styles.resetButton}>
                <Text style={styles.buttonText}>Redefinir Senha</Text>
            </TouchableOpacity>
            <View style={styles.linkContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('LoginPage')}
                >
                    <Text style={styles.link}>Voltar ao Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}