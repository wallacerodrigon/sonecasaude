import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { List, ListItem, Thumbnail, Left, Body, Content, Container, Button, Icon } from "native-base";
import Botao, { BotaoOpacity } from '../../components/botao/Botao';
import { TELA_CONTROLE_MEDICACAO, TELA_HOME, TELA_ADD_MEDICAMENTO } from '../../constants/AppScreenData';

export default class Alarme extends React.Component {
    static navigationOptions = {
        title: 'alarme',
        header: null
      };

    constructor(props){
        super(props);
        this.state= {
            bolAlertaEstoque: false,
            mensagemAlerta: 'Alerta estoque',
            mensagemHorarioEstoque: 'Restam apenas 10 comprimidos',
            medicamento: {
                nome: 'Losartana',
                laboratorio: 'Biosintética',
                quantidade: '01 comprimido',
                foto: '../../assets/img/alerta/losartana.jpeg',
                unidade: 'comprimido'
            },
            lembreteSoneca: 'Lembrar-me com estoque menor que 10 comprimidos'
        }
    }

    getFoto(){
        return this.state.medicamento.foto;
    }

    adiar(){
        if (this.state.bolAlertaEstoque){
            return this.navigation.navigate(TELA_HOME.name);
        } else {
            return this.navigation.navigate(TELA_CONTROLE_MEDICACAO.name);
        }
    }

    confirmar(){
        if (this.state.bolAlertaEstoque){
            return this.navigation.navigate(TELA_ADD_MEDICAMENTO.name);//encaminhar para a medicacao
        } else {
            return this.navigation.navigate(TELA_CONTROLE_MEDICACAO.name);
        }

    }

    render() {
        return (
            <View style={[EstilosComuns.container]}>
                    
                    
                <Container style={[styles.row, EstilosComuns.backgroundPadrao]} thumbnail>
                    <Thumbnail circular large source={require('../../assets/img/logo-login.jpeg')}/>
                </Container>

                <View style={styles.row}>
                    <View style={styles.mensagens}>
                        <Text style={styles.mensagemDestaque} >{this.state.mensagemAlerta}</Text>
                        <Text style={[styles.mensagemHorarioEstoque]} >{this.state.mensagemHorarioEstoque}</Text>

                    </View>
                </View>

                <Container style={[{flex: 2}, EstilosComuns.backgroundPadrao]}>
                    <List>
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail large circular source={require('../../assets/img/alerta/losartana.jpeg')} />
                                </Left>
                                <Body>
                                    <Text style={[styles.dadosMedicamento]}>{this.state.medicamento.nome}</Text>
                                    <Text style={[styles.dadosMedicamento]}>Laboratório: {this.state.medicamento.laboratorio}</Text>
                                    <Text style={[styles.dadosMedicamento]}>Prescrição: {this.state.medicamento.quantidade}</Text>
                                </Body>
                            </ListItem>
                    </List>
               </Container>

                <View style={styles.row}>
                    <View style={styles.botoesAlerta}>
                        <BotaoOpacity /*onClick={()=>this.adiar()}*/ >
                            <Thumbnail large circular source={require('../../assets/img/alerta/adiamento.jpeg')} />
                        </BotaoOpacity>                      
        
                        <BotaoOpacity  /*onClick={()=>this.confirmar()}*/>
                            <Thumbnail large circular source={require('../../assets/img/alerta/confirmacao.png')} />
                        </BotaoOpacity>                      
                    </View>
                </View>



            </View>
        )
    };
}

const styles = StyleSheet.create({
    row: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    mensagemAlerta: {
        textAlign: 'center',
        color: '#666',
        fontWeight: 'bold',
        fontSize: 20,
    },
    mensagemDestaque: {
        color: '#666',
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'

    },
    mensagemHorarioEstoque:{
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },
    dadosMedicamento: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    mensagens: {
        flexDirection: 'column', justifyContent: 'space-between', padding: 10
    },
    centralizar:  {
        alignItems: 'center'
    },
    botoesAlerta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center'
    }
})