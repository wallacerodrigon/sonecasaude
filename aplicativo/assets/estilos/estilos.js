import {StyleSheet, Dimensions} from 'react-native';
import {Constants} from 'expo';

export const TAMANHO_PADRAO = 14;
export const VERDE = "#04B486";
export const BRANCO = "#fff";
export const FUNDO = "#ddd";
export const FUNDO_ESCURO = "#666"
export const DESMARCADO = "#f00";
export const PRETO = "#000";

const EstilosComuns = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        flexDirection: 'column',
        backgroundColor: FUNDO,
        padding: 10
    },
    containerListening: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        flexDirection: 'column',
        backgroundColor: VERDE,
    },    
    backgroundToolbar: {
        backgroundColor: VERDE,
    },
    backgroundPadrao: {
        backgroundColor: FUNDO
    },
    sombra: {
        shadowColor: VERDE,
        shadowOpacity: 0.3,
        shadowRadius:30
    },
    fontePadrao: {
        fontFamily:'Roboto',
        fontSize: TAMANHO_PADRAO
    },
    fonteBotao: {
        fontFamily:'Roboto',
        color: BRANCO,
        fontSize: TAMANHO_PADRAO
    },
    centralizar: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    corVerde: {
        color: VERDE,
    },
    corBranca: {
        color: BRANCO,
    },
    botao: {
        backgroundColor: VERDE,
        height: 40,
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: FUNDO_ESCURO,
    },
    negrito: {
        fontWeight: 'bold'
    },
    sublinhado: {
        textDecorationLine: 'underline',
        
    },
    inputText: {
        borderBottomWidth: 1,
        borderColor: "#A4A4A4",
        fontSize: 16,
        padding: 8,
    },    
    textoTamanhoPadrao: {
        fontSize: TAMANHO_PADRAO
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
        color: FUNDO_ESCURO,
        padding: 10
    },
    bodyTitulo: {
        flex: 1,
        padding: 3
    },
    bodyMain : {
        flex: 8,
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