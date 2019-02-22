import React from 'react';
import {View, Text, StyleSheet, Picker} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { TELA_ADD_SHARE_INFO, TELA_FINALIZA_CADASTRO } from '../../constants/AppScreenData';
import Botao from '../../components/botao/Botao';
import {InputTexto, InputTextComMascara} from '../../components/input/InputTexto';
import ConfirmacaoSwitch from '../../components/radio/ConfirmacaoSwitch';
import { Input } from 'react-native-elements';

export default class AdicionaCompartilhamentoInfo extends React.Component {
    static navigationOptions = {
        title: TELA_ADD_SHARE_INFO.title,
        /* No more header config here! */
      };

    constructor(props){
        super(props);

        this.state = {marcouTransporte: false, marcouMedicacao: false, parentesco: ''};
        this.toggleTransporte = this.toggleTransporte.bind(this);
        this.toggleMedicacao = this.toggleMedicacao.bind(this);
    }

    toggleTransporte(){
        this.setState({marcouTransporte: !this.state.marcouTransporte});
    }
    toggleMedicacao(){
        this.setState({marcouMedicacao: !this.state.marcouMedicacao});
    }    

    onChangeInput(fieldname, text){
        this.setState({[fieldname]: text});
    }      

    render() {
        return (
            <View style={EstilosComuns.container}>
                <View style={EstilosComuns.bodyTitulo}>
                    <Text style={EstilosComuns.tituloJanelas}>Compartilhar as informações do aplicativo?</Text>
                </View>

                <View style={EstilosComuns.bodyMain}>
                    <InputTextComMascara placeholder="CPF"
                        type={InputTextComMascara.MASK_CPF}
                        onChangeText={value => this.onChangeInput(value)}
                        />
                    <InputTexto placeholder="E-mail" maxLength={60}
                        keyboardType={InputTexto.KEYBOARD_EMAIL}
                        onChangeInput={value => this.onChangeInput(value)}
                        />
                    <Text style={EstilosComuns.corBranca}>Parentesco</Text>
                    <Picker
                        selectedValue={this.state.parentesco}
                        mode="dialog"
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({parentesco: itemValue})
                        }>
                        <Picker.Item label="Pai" value="1" />
                        <Picker.Item label="Mãe" value="2" />
                        <Picker.Item label="Sobrinho" value="3" />
                        <Picker.Item label="Tio" value="4" />
                        <Picker.Item label="Avô" value="5" />
                        <Picker.Item label="Avó" value="6" />
                        <Picker.Item label="Outros" value="7" />
                    </Picker> 
                    <InputTextComMascara placeholder="Celular"
                        type={InputTextComMascara.MASK_CELULAR}
                        onChangeInput={value => this.onChangeInput(value)}
                        />
                    <View style={styles.checkboxes}>
                        <View style={styles.checkboxItem}>
                            <Text>Compartilhar Informações:</Text>
                        </View>
                        <View style={styles.checkboxItem}>
                            <Text style={styles.checkboxLeft}>Transporte</Text>
                            <ConfirmacaoSwitch value={this.state.marcouTransporte} toggleSwitch={this.toggleTransporte}></ConfirmacaoSwitch>
                        </View>

                        <View style={styles.checkboxItem}>
                            <Text style={styles.checkboxLeft}>Medicação</Text>
                            <ConfirmacaoSwitch value={this.state.marcouMedicacao} toggleSwitch={this.toggleMedicacao}></ConfirmacaoSwitch>
                        </View>
                    </View>
                </View>

                <View style={EstilosComuns.rodape}>
                    <Botao tituloBotao='Próximo' onClick={() =>  this.props.navigation.navigate(TELA_FINALIZA_CADASTRO.name)}/>    
                </View>            

            </View>
        )
    };
}

const styles = StyleSheet.create({
    checkboxes: {
        flex: 1,
        flexDirection: 'column',
        padding: 5
    },
    checkboxItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },
    checkboxLeft: {
        flex: 8
    },
    checkboxRight: {
        flex: 2
    }
})