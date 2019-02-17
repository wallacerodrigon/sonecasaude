import {StyleSheet, Dimensions} from 'react-native';
import {Constants} from 'expo';

const EstilosComuns = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        flexDirection: 'column',
        backgroundColor: '#ddd',
        padding: 10
    },
    backgroundPadrao: {
        backgroundColor: '#ddd'
    },
    sombra: {
        shadowColor: '#666',
        shadowOpacity: 0.3,
        shadowRadius:30
    },
    fontePadrao: {
        fontFamily:'Roboto',
        fontSize: 14
    },
    fonteBotao: {
        fontFamily:'Roboto',
        color: '#fff',
        fontSize: 14
    },
    centralizar: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    corVerde: {
        color: '#04B486',
    },
    botao: {
        backgroundColor: '#04B486',
        height: 40,
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#666',
    },
    negrito: {
        fontWeight: 'bold'
    },
    sublinhado: {
        textDecorationLine: 'underline',
        
    },
    inputText: {
        borderBottomWidth: 1,
        borderColor: '#666',
        fontSize: 14
    },    
    circuloWidget: { 
        height: 146,
        width: 146, 
        borderRadius: 146, 
        backgroundColor: '#fff',
        shadowColor: '#04B486',
        shadowOpacity: 0.8,
    }  ,
    textoJustificado: {
        textAlign: 'justify'
    }    
     
});

export default EstilosComuns;

