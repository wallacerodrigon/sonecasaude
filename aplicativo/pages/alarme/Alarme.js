import { Body, Container, Left, List, ListItem, Thumbnail } from "native-base";
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { BotaoOpacity } from '../../components/botao/Botao';

export default class Alarme extends React.Component {
    static navigationOptions = {
        title: 'alarme',
        header: null
      };

    constructor(props){
        super(props);
        this.state= {
            bolAlertaEstoque: true,
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

    componentDidMount(){
        if (this.props.navigation.state.routeName == 'alarme'){
            this.setState({bolAlertaEstoque: false});
            this.setState({mensagemAlerta: 'Alerta de medicamento'});
            this.setState({mensagemHorarioEstoque: '08:50'}); 
            this.setState({lembreteSoneca:'Lembrar em 5 minutos'});
        }

    }

    getFoto(){
        return this.state.medicamento.foto;
    }

    adiar(){
        return this.fecharTela();
    }

    confirmar(){
        return this.fecharTela();
    }

    fecharTela(){
        return this.props.navigation.goBack();

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
                        <BotaoOpacity onClick={()=>this.adiar()} >
                            <Thumbnail large circular source={require('../../assets/img/alerta/adiamento.jpeg')} />
                        </BotaoOpacity>                      
        
                        <BotaoOpacity  onClick={()=>this.confirmar()}>
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