import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EstilosComuns, { BRANCO } from '../../assets/estilos/estilos';
import Botao, { BotaoOpacity } from '../../components/botao/Botao';
import {  TELA_PRESCRICAO, TELA_CADASTRO_MEDICAMENTO } from '../../constants/AppScreenData';
import {InputTexto} from '../../components/input/InputTexto';
import { Label, Icon, Switch, Picker } from 'native-base';

export default class PrescricaoMedicamento extends React.Component {
    static navigationOptions = {
        title: TELA_PRESCRICAO.title,
        headerRight: null
      };


    constructor(props){
        super(props);

        this.state = {email: '', medicamento: 'Xarope 1'}
    }

    render() {
        return (
            <View style={[EstilosComuns.container]}>
                <View style={styles.containerDadosRemedio}>
                    <Text>Prescrição do medicamento... {this.state.medicamento} </Text>
                    <Text>Laboratório: xxxxx</Text>
                    <Text>Detalhes: caixa com 100 comprimidos</Text>
                </View>

                <View style={styles.containerDadosConfiguracao}>
                    <View style={styles.containerConfiguracaoGrupo}>
                        <Label style={EstilosComuns.corVerde}>Prazo do tratamento</Label>
                        <InputTexto placeholder="Quantidade em estoque" maxLength={10}
                            keyboardType={InputTexto.KEYBOARD_NUMBER}
                            onChangeInput={value => this.onChangeInput(value)}
                            />
                    </View>

                    <View style={styles.containerConfiguracaoGrupo}>
                        <Label style={EstilosComuns.corVerde}>Prazo do tratamento</Label>
                        <InputTexto placeholder="Avisar quando estoque estiver em" maxLength={10}
                            keyboardType={InputTexto.KEYBOARD_NUMBER}
                            onChangeInput={value => this.onChangeInput(value)}
                            />
                    </View>

                    <View style={styles.containerConfiguracaoGrupo}>
                        <Label style={EstilosComuns.corVerde}>Prazo do tratamento</Label>
                        <InputTexto placeholder="Soneca" maxLength={10}
                            keyboardType={InputTexto.KEYBOARD_NUMBER}
                            onChangeInput={value => this.onChangeInput(value)}
                            />
                    </View>

                </View>

                <View style={styles.containerDadosPrescricao}>
                    <Label>Dias da semana do medicamento</Label>

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

                <View style={styles.containerDadosPrescricao}>
                    <Label style={EstilosComuns.corVerde}>Prazo do tratamento</Label>
                    <Text>Intervalo de horários</Text>
                    <Text>Horário livre</Text>
                </View>
                

                <View style={styles.containerDadosPrescricao}>
                    <Label>Horários</Label>
                    <Picker>
                        <Picker.Item label="Tomar de 8 em 8 horas" value="1" />
                        <Picker.Item label="Tomar de 12 em 12 horas" value="2" />
                        <Picker.Item label="Tomar de 24 em 24 horas" value="3" />
                    </Picker>
                </View>



                <View style={styles.containerDadosMedico}>
                    <Label>Médico desta prescrição</Label>
                    <Picker>
                        <Picker.Item label="Médico 1" value="1" />
                        <Picker.Item label="Médico 2" value="2" />
                        <Picker.Item label="Médico 3" value="3" />
                    </Picker>

                </View>

                <View style={styles.containerRodape}>
                    <Botao style={styles.botaoEnviar} tituloBotao='Adicionar' onClick={() =>  this.props.navigation.navigate(TELA_CADASTRO_MEDICAMENTO.name)}/>
                </View>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    containerDadosRemedio: {
        flex: 2
    },

    containerDadosConfiguracao: {
        flex: 2
    },

    containerConfiguracaoGrupo: {
        flexDirection: 'column',
        borderBottomWidth: 1, 
        borderBottomColor: BRANCO
    },

    containerDadosPrescricao: {
        flex: 4,
        padding: 5
    },

    containerDadosMedico: {
        flex: 1
    },

    containerRodape: {
        flex: 1
    }

})