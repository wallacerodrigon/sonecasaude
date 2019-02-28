import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import EstilosComuns, { BRANCO } from '../../assets/estilos/estilos';
import Botao, { BotaoOpacity } from '../../components/botao/Botao';
import {  TELA_PRESCRICAO, TELA_CADASTRO_MEDICAMENTO } from '../../constants/AppScreenData';
import {InputTexto} from '../../components/input/InputTexto';
import { Label, Icon, Switch, Picker, Left, Right, Radio } from 'native-base';
import StatusBar from '../../components/statusBar/StatusBar';
import { Input } from 'react-native-elements';

export default class PrescricaoMedicamento extends React.Component {
    static navigationOptions = {
        title: TELA_PRESCRICAO.title,
        headerRight: null
      };


    constructor(props){
        super(props);

        this.state = {email: '', medicamento: 'Xarope 1'}
    }

    onChangeInput(fieldname, text){
        this.setState({[fieldname]: text});
    }


    render() {
        return (
            <View style={[{flex: 1}, EstilosComuns.backgroundPadrao]}>
                <View style={[EstilosComuns.bodyMain]}>
                        <View style={[styles.containerDadosRemedio, EstilosComuns.bordaSeparacaoBlocos]}>
                            <Text style={EstilosComuns.negrito}>Medicamento: {this.state.medicamento} </Text>
                            <Text  style={EstilosComuns.negrito}>Laboratório: xxxxx</Text>
                            <Text  style={EstilosComuns.italico}>Detalhes: caixa com 100 comprimidos</Text>
                        </View>

                        <View style={[styles.containerDadosConfiguracao, EstilosComuns.bordaSeparacaoBlocos]}>
                            <View style={styles.containerConfiguracaoGrupo}>
                                <Label style={EstilosComuns.corVerde}>Quantidade em estoque:</Label>
                                <Label>10 comprimidos</Label>
                            </View>

                            <View style={styles.containerConfiguracaoGrupo}>
                                <Label style={EstilosComuns.corVerde}>Avisar quando estoque estiver em:</Label>
                                <InputTexto keyboardType={InputTexto.KEYBOARD_NUMBER} onChangeInput={value => this.onChangeInput(value)}/>
                            </View>

                            <View style={styles.containerConfiguracaoGrupo}>
                                <Label style={EstilosComuns.corVerde}>Soneca:</Label>
                                <InputTexto keyboardType={InputTexto.KEYBOARD_NUMBER} onChangeInput={value => this.onChangeInput(value)}/>
                            </View>
                        </View>

                    <View style={[styles.containerDadosPrescricao, EstilosComuns.bordaSeparacaoBlocos]}>
                            <Label style={[EstilosComuns.corVerde, EstilosComuns.negrito]}>Dias da semana do medicamento</Label>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <BotaoOpacity onClick={()=> alert('clicou')}>
                                    <Text>DOM</Text>
                                </BotaoOpacity>
                                <BotaoOpacity onClick={()=> alert('clicou')}>
                                    <Text>SEG</Text>
                                </BotaoOpacity>
                                <BotaoOpacity onClick={()=> alert('clicou')}>
                                    <Text>TER</Text>
                                </BotaoOpacity>
                                <BotaoOpacity onClick={()=> alert('clicou')}>
                                    <Text>QUA</Text>
                                </BotaoOpacity>
                                <BotaoOpacity onClick={()=> alert('clicou')}>
                                    <Text>QUI</Text>
                                </BotaoOpacity>
                                <BotaoOpacity onClick={()=> alert('clicou')}>
                                    <Text>SEX</Text>
                                </BotaoOpacity>
                                <BotaoOpacity onClick={()=> alert('clicou')}>
                                    <Text>SAB</Text>
                                </BotaoOpacity>
                            </View>
                        </View>

                        <View style={[styles.containerDadosPrescricao, EstilosComuns.bordaSeparacaoBlocos]}>
                            <Label style={[EstilosComuns.corVerde, EstilosComuns.negrito]}>Prazo do tratamento</Label>  
                            <Text style={[EstilosComuns.corVerde]}>Uso contínuo?</Text>
                            {/* <Switch value="Uso contínuo"/> */}

                            {/*<Left>
                                <Text>Intervalo de horários</Text>
                            </Left>
                            <Right>
                                <Radio selected={true} />
                            </Right> */}

                        </View>
                        

                        <View style={[styles.containerDadosPrescricao, EstilosComuns.bordaSeparacaoBlocos]}>
                            <Label style={[EstilosComuns.corVerde, EstilosComuns.negrito]}>Horários</Label>                
                            <Picker>
                                <Picker.Item label="Tomar de 8 em 8 horas" value="1" />
                                <Picker.Item label="Tomar de 12 em 12 horas" value="2" />
                                <Picker.Item label="Tomar de 24 em 24 horas" value="3" />
                            </Picker>
                        </View>



                        <View style={[styles.containerDadosMedico, EstilosComuns.bordaSeparacaoBlocos]}>
                            <Label style={[EstilosComuns.corVerde, EstilosComuns.negrito]}>Médico desta prescrição</Label>                
                            <Picker>
                                <Picker.Item label="Médico 1" value="1" />
                                <Picker.Item label="Médico 2" value="2" />
                                <Picker.Item label="Médico 3" value="3" />
                            </Picker>

                        </View>
                </View>

                <View style={[EstilosComuns.rodape, styles.rodape]}>
                    <Botao style={styles.botaoEnviar} tituloBotao='Adicionar' onClick={() =>  this.props.navigation.navigate(TELA_CADASTRO_MEDICAMENTO.name)}/>
                </View>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    containerStatusBar: {
        flex: 1
    },
    containerDadosRemedio: {
        flex: 2,
        padding: 5
    },

    containerDadosConfiguracao: {
        flex: 2,
        padding: 3
    },

    containerConfiguracaoGrupo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 8
    },

    containerDadosPrescricao: {
        flex: 1,
        padding: 5
    },

    containerDadosMedico: {
        flex: 1
    },

 

})