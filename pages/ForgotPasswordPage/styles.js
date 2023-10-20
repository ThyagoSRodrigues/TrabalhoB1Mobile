import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#34495e', // Tom de azul mais escuro
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    heading: {
        fontSize: 24,
        color: 'white',
        marginBottom: 10,
    },
    subheading: {
        fontSize: 16,
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '80%',
        height: 50,
        backgroundColor: '#2c3e50', // Tom de cinza escuro
        borderRadius: 5,
        paddingLeft: 15,
        marginBottom: 15,
        fontSize: 16,
        color: 'white',
    },
    resetButton: {
        width: '80%',
        height: 50,
        backgroundColor: '#3498db', // Tom de azul
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '80%',
        marginTop: 15,
    },
    link: {
        color: 'white',
        fontSize: 16,
    },
});

export default styles;