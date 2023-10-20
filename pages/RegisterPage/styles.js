import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#34495e',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    heading: {
        fontSize: 24,
        color: 'white',
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 50,
        backgroundColor: '#2c3e50', 
        borderRadius: 5,
        paddingLeft: 15,
        marginBottom: 15,
        fontSize: 16,
        color: 'white',
    },
    registerButton: {
        width: '80%',
        height: 50,
        backgroundColor: '#3498db', 
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
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 15,
    },
    link: {
        color: 'white',
        fontSize: 16,
    },
});

export default styles;