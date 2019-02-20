import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import {TELA_HOME, TELA_LOGIN, TELA_COMANDO_VOZ} from '../../constants/AppScreenData';

//import WidgetMenu from '../../components/widgets/widgetMenu';
import Botao from '../../components/botao/Botao';
//import { Ionicons as Icon } from '@expo/vector-icons';

const imgMicrophone = require('../../assets/img/microphone_green.png');

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: TELA_HOME.title,
        headerRight: ( 
            <View>
                <Botao tituloBotao="..." onClick={() => this.abrirMenu()}/>
            </View>
        )
      };

       

    constructor(){
        super();
        
    }

    abrirMenu() {
        alert('ok')
    }

    retornarLogin = () => {
        this.props.navigation.navigate(TELA_LOGIN.name);
        
    }

    abrirTela(item){
       this.props.navigation.navigate(item.screen);
    }

    abrirTelaOuvindo(){
        this.props.navigation.navigate(TELA_COMANDO_VOZ.name);
    }

    render() {
        return (
            <View style={EstilosComuns.container}>
                <View style={[styles.microfone]}>
                    <TouchableOpacity onPress={()=> this.abrirTelaOuvindo()}>
                        <Image source={imgMicrophone}/>
                        <Text style={[styles.textoMicrofone, EstilosComuns.corVerde]}>Toque no microfone e fale</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.widgets]}>
                    <View style={styles.widgetGroup}>
                        <View style={[styles.widgetItem, EstilosComuns.circuloWidget]}>
                            <Text>Transporte do Paciente</Text>
                        </View>
                        <View style={[styles.widgetItem, EstilosComuns.circuloWidget]}>
                            <Text>Controlar Medicação</Text>
                        </View>
                    </View>

                    <View style={styles.widgetGroup}>
                        <View style={[styles.widgetItem, EstilosComuns.circuloWidget]}>
                            <Text>Comparar preço Medicamento</Text>
                        </View>
                        <View style={[styles.widgetItem, EstilosComuns.circuloWidget]}>
                            <Text>Marcar Consulta ou Exame</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    microfone: {
        flex: 3,
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
        alignItems: 'center'
    },
    widgets: {
        flex: 7,
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        padding: 5,
    }, 
    widgetGroup:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    widgetItem: {
        flex: 1,
        padding: 5,
        marginTop: 4,
        justifyContent: 'space-between'
    },
    textoMicrofone: {
        justifyContent: 'center',
        fontWeight: 'bold'
    }

})

//axios.get(url)
//retorna promise --> then(resp => resp.data)

