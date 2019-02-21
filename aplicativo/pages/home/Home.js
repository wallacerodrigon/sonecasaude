import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import {TELA_HOME, TELA_LOGIN, TELA_COMANDO_VOZ, TELA_CONTROLE_MEDICACAO} from '../../constants/AppScreenData';

import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';

const imgMicrophone = require('../../assets/img/microphone_green.png');

const imgTransporte = require('../../assets/icons/home/transporte.png');
const imgConsulta   = require('../../assets/icons/home/consulta.png');
const imgComparacao = require('../../assets/icons/home/comparacao.png');
const imgMedicacao  = require('../../assets/icons/home/medicacao.png');

//https://react-native-training.github.io/react-native-elements/docs/avatar.html
export default class HomeScreen extends React.Component {
    static navigationOptions =  ({navigation}) => ({
        title: TELA_HOME.title,
        headerRight:(
            <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <Icon name="menu" size={30} />
            </TouchableOpacity>
        ),
      });

       

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
       this.props.navigation.navigate(item);
    }

    abrirTelaOuvindo(){
        this.props.navigation.navigate(TELA_COMANDO_VOZ.name);
    }

    render() {
        return (
            <View style={EstilosComuns.container}>
                <View style={[styles.microfone]}>
                    <TouchableOpacity onPress={()=> this.abrirTelaOuvindo()}>
                        <Image style={styles.imgWidget} aspectRadio={1} source={imgMicrophone} resizeMode="cover"/>
                        <Text style={[styles.textoMicrofone, EstilosComuns.corVerde]}>Toque no microfone e fale</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.widgets]}>
                    <View style={styles.widgetGroup}>
                        <TouchableOpacity style={[styles.widgetItem,EstilosComuns.widget]} onPress={() => this.abrirTela(TELA_CONTROLE_MEDICACAO.name)}>
                                <Image style={styles.imgWidget} aspectRadio={1} source={imgTransporte} resizeMode="cover"/>
                                <Text style={styles.textoWidget}>Transporte do Paciente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.widgetItem, EstilosComuns.widget]} onPress={() => this.abrirTela(TELA_CONTROLE_MEDICACAO.name)}>
                            <Image style={styles.imgWidget} aspectRadio={1} source={imgMedicacao} resizeMode="cover"/>
                            <Text style={styles.textoWidget}>Controlar Medicação</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.widgetGroup}>
                        <TouchableOpacity style={[styles.widgetItem, EstilosComuns.widget]} onPress={() => this.abrirTela(TELA_CONTROLE_MEDICACAO.name)}>
                            <Image style={styles.imgWidget} aspectRadio={1} source={imgComparacao} resizeMode="cover"/>
                            <Text style={styles.textoWidget}>Comparar Preços</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.widgetItem, EstilosComuns.widget]} onPress={() => this.abrirTela(TELA_CONTROLE_MEDICACAO.name)}>
                            <Image style={styles.imgWidget} aspectRadio={1} source={imgConsulta} resizeMode="cover"/>
                            <Text style={styles.textoWidget}>Marcar Consulta ou Exame</Text>
                        </TouchableOpacity>
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
        flexDirection: 'column', 
        justifyContent: 'space-between',
        padding: 5,
    }, 
    widgetGroup:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10
    },
    widgetItem: {
        borderWidth: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    imgWidget: {
        marginLeft: 15,
        marginRight: 15
        
    },
    textoWidget: {
        position: 'absolute', 
        width: '100%',
        textAlign: 'center',
        bottom: 0,
        backgroundColor: '#ddd',
        opacity: 0.5
    },
    textoMicrofone: {
        justifyContent: 'center',
        fontWeight: 'bold'
    }
    
})

//axios.get(url)
//retorna promise --> then(resp => resp.data)

