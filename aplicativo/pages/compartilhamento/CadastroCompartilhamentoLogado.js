import React from 'react';
import { Picker, StyleSheet, Text, View } from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import Botao from '../../components/botao/Botao';
import { InputTextComMascara, InputTexto } from '../../components/input/InputTexto';
import ConfirmacaoSwitch from '../../components/radio/ConfirmacaoSwitch';
import { TELA_ADD_COMPARTILHAMENTO, TELA_FINALIZA_CADASTRO, TELA_ADD_COMPARTILHAMENTO_LIST, TELA_LISTA_COMPARTILHAMENTO } from '../../constants/AppScreenData';

export default class CadastroCompartilhamentoLogado extends React.Component {
    static navigationOptions = {
        title: TELA_ADD_COMPARTILHAMENTO.title,
        /* No more header config here! */
      };

    novoCadastroAPartirDaLista= false;
    
    constructor(props){
        super(props);

        this.toggleTransporte = this.toggleTransporte.bind(this);
        this.toggleMedicacao = this.toggleMedicacao.bind(this);
        this.state = {
            marcouTransporte: false, 
            marcouMedicacao: false, 
            parentesco: '', 
        };

        this.novoCadastroAPartirDaLista = this.props.navigation.state.routeName === TELA_ADD_COMPARTILHAMENTO_LIST.name;
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

    salvarCompartilhamento(){
        this.props.navigation.navigate(
            this.novoCadastroAPartirDaLista ? 
                        TELA_LISTA_COMPARTILHAMENTO.name :
                        TELA_FINALIZA_CADASTRO.name 
                         );

    }

    getTituloBotao(){
        return this.novoCadastroAPartirDaLista ? "Adicionar":"Próximo";
    }

    render() {
        return (
            <View style={EstilosComuns.container}>
                <View style={EstilosComuns.bodyTitulo}>
                    <Text style={EstilosComuns.tituloJanelas}>Compartilhar as informações do aplicativo?</Text>
                    <Text>{this.state.isSenderFromList}</Text>
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
                    <InputTexto placeholder="Nome" maxLength={60}
                        keyboardType={InputTexto.KEYBOARD_DEFAULT}
                        onChangeInput={value => this.onChangeInput(value)}
                        />
                    <Text style={EstilosComuns.corBranca}>Parentesco</Text>
                    <Picker
                        selectedValue={this.state.parentesco}
                        mode="dialog"
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({parentesco: itemValue})
                        }>
                        <Picker.Item label="Selecione o parentesco" value=""/>
                        <Picker.Item label="Pai" value="1" />
                        <Picker.Item label="Mãe" value="2" />
                        <Picker.Item label="Sobrinho" value="3" />
                        <Picker.Item label="Tio" value="4" />
                        <Picker.Item label="Avô" value="5" />
                        <Picker.Item label="Avó" value="6" />
                        <Picker.Item label="Cuidador" value="7" />
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
                    <Botao tituloBotao={this.getTituloBotao()}
                    onClick={() => this.salvarCompartilhamento() }/>    
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
        justifyContent: 'flex-start',
        padding: 5
    },
    checkboxLeft: {
        flex: 1
    },
    checkboxRight: {
        flex: 9
    }
})
