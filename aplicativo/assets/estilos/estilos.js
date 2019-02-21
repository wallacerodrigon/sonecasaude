import {StyleSheet, Dimensions} from 'react-native';
import {Constants} from 'expo';

const tamanhoPadrao = 14;
const corVerde = "#04B486";
const corBranco = "#fff";
const corCinza = "#ddd"

const EstilosComuns = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        flexDirection: 'column',
        backgroundColor: corCinza,
        padding: 10
    },
    backgroundToolbar: {
        backgroundColor: corVerde,
    },

    backgroundPadrao: {
        backgroundColor: corCinza
    },
    sombra: {
        shadowColor: corCinza,
        shadowOpacity: 0.3,
        shadowRadius:30
    },
    fontePadrao: {
        fontFamily:'Roboto',
        fontSize: tamanhoPadrao
    },
    fonteBotao: {
        fontFamily:'Roboto',
        color: '#fff',
        fontSize: tamanhoPadrao
    },
    centralizar: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    corVerde: {
        color: '#04B486',
    },
    corBranca: {
        color: '#fff',
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
        borderBottomWidth: 0.8,
        borderColor: '#666',
        fontSize: 16,
        padding: 8
    },    
    widget: { 
        height: 160,
        width: 160, 
       //borderRadius: 160, 
        backgroundColor: '#04B486',
        shadowColor: '#fff',
        shadowOpacity: 0.3,
    },
    textoTamanhoPadrao: {
        fontSize: tamanhoPadrao
    },
    textoJustificado: {
        textAlign: 'justify'
    },
    textoCentralizado: {
        textAlign: 'center'
    } ,
    tituloJanelas: {
        fontSize: 20, 
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#666',
        padding: 10
    },
    bodyTitulo: {
        flex: 1
    },
    bodyMain : {
        flex: 8,
       // padding: 10
    },
    rodape: {
        flex: 1
    },
    rodapeDuplo:{
        flex: 2
    }      
     
});

export default EstilosComuns;

//elevation resolve o espaço da tab bar...