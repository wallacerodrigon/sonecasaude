import {StyleSheet, Dimensions} from 'react-native';

const EstilosComuns = StyleSheet.create({
    container: {
        height: '100%',
        padding: 5,
        flexDirection: 'column',
        borderWidth: 1,
        borderColor: '#666'
    },
    sombra: {
        shadowColor: '#666',
        shadowOpacity: 0.3,
        shadowRadius:30
    },
    fontePadrao: {
        fontFamily:'Roboto'
    },
    botao: {
        backgroundColor: '#fff',
        height: 30,
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#666',
        
    }
});

export default EstilosComuns;

