import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import EstilosComuns, { BRANCO, FUNDO } from '../../assets/estilos/estilos';
import {TELA_LOGIN, TELA_COMANDO_VOZ, TELA_CONTROLE_MEDICACAO, TELA_LISTA_MEDICOS, TELA_ALARME, TELA_SHARE_INFO, TELA_MEDICACOES, TELA_HOME, TELA_MEDICOS} from '../../constants/AppScreenData';

import { Card, CardItem, Body } from 'native-base';
import StatusBar from '../../components/statusBar/StatusBar';

const imgMicrophone = require('../../assets/img/microphone_green.png');

const imgTransporte = require('../../assets/icons/home/transporte.png');
const imgConsulta   = require('../../assets/icons/home/consulta.png');
const imgComparacao = require('../../assets/icons/home/comparacao.png');
const imgMedicacao  = require('../../assets/icons/home/medicacao.png');

//https://react-native-training.github.io/react-native-elements/docs/avatar.html
export default class HomeScreen extends React.Component {
    // static navigationOptions = {
    //     title: TELA_LISTA_MEDICOS.title,
    //     headerRight: ({navigation}) => (
    //         <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
    //             <Text>Sair</Text>
    //         </TouchableOpacity>
    //     )
    //     /* No more header config here! */
    //   };
    

    constructor(){
        super();
        
    }

    abrirMenu() {
        this.props.navigation.openDrawer();
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
                {/* <StatusBar style={styles.containerStatusBar} {...this.props}/> */}

                <Card style={[styles.microfone, EstilosComuns.backgroundPadrao]}>
                    <CardItem cardBody>
                        <Body style={styles.microfone}>
                            <TouchableOpacity onPress={()=> this.abrirTelaOuvindo()} >
                                <Image spectRadio={1} source={imgMicrophone} resizeMode="cover"/>
                            </TouchableOpacity>
                        </Body>
                    </CardItem>

                    <CardItem footer style={styles.rodapeMicrofone}>
                        <Text style={EstilosComuns.corVerde}>Clique no microfone para falar</Text>
                    </CardItem>                    
                </Card>


                <Card style={[styles.icones, EstilosComuns.backgroundPadrao]}>
                    <CardItem cardBody style={[styles.linhaIcones,EstilosComuns.backgroundPadrao]}>
                        <Card style={styles.card}>
                            <TouchableOpacity onPress={() => null}>
                                <CardItem cardBody>
                                        <Image style={styles.imgWidget} aspectRadio={1} source={imgTransporte} resizeMode="cover"/>
                                </CardItem>
                                <CardItem footer  style={styles.textoWidget}>
                                    <Text>Transporte</Text>
                                </CardItem>
                            </TouchableOpacity>

                        </Card>

                        <Card style={styles.card}>
                            <CardItem cardBody>
                                <TouchableOpacity  onPress={() => this.abrirTela(TELA_MEDICACOES.name)}>
                                   <Image style={styles.imgWidget} aspectRadio={1} source={imgMedicacao} resizeMode="cover"/>
                                </TouchableOpacity>                            
                            </CardItem>
                            <CardItem footer  style={styles.textoWidget}>
                                <Text>Medicação</Text>
                            </CardItem>

                        </Card>

                  </CardItem>  

                  <CardItem cardBody style={[styles.linhaIcones,EstilosComuns.backgroundPadrao]}>
                        <Card style={[styles.card]}>
                            <TouchableOpacity  onPress={() => this.retornarLogin()}>
                                <CardItem cardBody>
                                    <Image style={styles.imgWidget} aspectRadio={1} source={imgComparacao} resizeMode="cover"/>
                                </CardItem>
                                <CardItem footer  style={styles.textoWidget}>
                                    <Text>Comparação</Text>
                                </CardItem>
                            </TouchableOpacity>
                        </Card>  

                        <Card style={styles.card}>
                            <TouchableOpacity  onPress={() => this.abrirTela(TELA_MEDICOS.name)}>
                                <CardItem cardBody>
                                            <Image style={styles.imgWidget} aspectRadio={1} source={imgConsulta} resizeMode="cover"/>

                                </CardItem>
                                <CardItem footer style={styles.textoWidget}>
                                    <Text>Marcar Consulta ou Exame</Text>
                                </CardItem>
                            </TouchableOpacity>
                        </Card>                           

                  </CardItem>

                </Card>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    microfone: {
        flex: 3,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: FUNDO
    },
    containerStatusBar: {
        flex: 1
    },  
    rodapeMicrofone: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: FUNDO,
        marginBottom: 5
    },
    icones: {
        flex: 6,
        flexDirection: 'column', 
        justifyContent: 'space-between',
        padding: 8,
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
    },
    linhaIcones: {
        flex: 1,
        padding: 10, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#04B486'
    },
    
});

//axios.get(url)
//retorna promise --> then(resp => resp.data)
