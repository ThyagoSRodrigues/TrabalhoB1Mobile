import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './styles'; // Importe o arquivo de estilos

export default function HomePage({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Bem-vindo à Página Inicial</Text>
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Recursos Disponíveis</Text>
                <TouchableOpacity style={styles.featureCard}>
                    <Text style={styles.featureTitle}>Calendário</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.featureCard}>
                    <Text style={styles.featureTitle}>Notificações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.featureCard}>
                    <Text style={styles.featureTitle}>Configurações</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={() => navigation.navigate('LoginPage')}
                >
                    <Text style={styles.logoutButtonText}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}