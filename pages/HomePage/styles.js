import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        padding: 20,
        backgroundColor: 'lightblue',
        width: '100%',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
    featureCard: {
        backgroundColor: 'lightgray',
        padding: 20,
        marginBottom: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    featureTitle: {
        fontSize: 18,
    },
    footer: {
        padding: 20,
    },
    logoutButton: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    logoutButtonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default styles;