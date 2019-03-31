import React from "react";
import { View, Text, Picker, StyleSheet} from "react-native";
import Botao from "../../components/botao/Botao";
import {InputTextComMascara, InputTexto} from "../../components/input/InputTexto";
import EstilosComuns from "../../assets/estilos/estilos";
import { salvarMedico, onChangeField } from "../../actions/MeusMedicosAction";
import { connect } from "react-redux";
import Validador from '../../utilitarios/Validador';
import { MensagemErro } from "../../components/mensagens/Mensagens";

class AdicionaMedico extends React.Component {

    constructor(props){
        super(props);
    }

    validarCampos(){

        let dadosInvalidos = '';
        let validador = new Validador();

        if (this.props.nomeMedico.trim() === '') dadosInvalidos += '- Nome do médico não informado!\n';
        //if (this.props.codEspecialidade === null) dadosInvalidos += '- Especialidade não informada!\n';

        //validar número do CRM
        if (this.props.numRegistroCrm != '' && ! validador.isCrmValido(this.props.numRegistroCrm)){
            dadosInvalidos += "- Número do CRM está inválido. Informe a UF e o número de registro. Ex: DF1234.\n";
        }

        //validar e-mail
        if ( this.props.descEmail != '' && ! validador.isEmailValido(this.props.descEmail)){
            dadosInvalidos += "- E-mail está inválido!\n";
        }

        //validar telefone
        if (this.props.numCelular != '' && ! validador.isTelefoneValido(this.props.numCelular)){
            dadosInvalidos += "- O telefone está inválido!";
        }

        return {
            bolValido: dadosInvalidos.length === 0,
            camposInvalidos: dadosInvalidos
        }
    }

    salvarMedico(){
        let retornoValidacao = this.validarCampos();
        if (!retornoValidacao.bolValido){
            MensagemErro('Favor corrigir os dados inválidos: \n' + retornoValidacao.camposInvalidos);
            return false;
        }
        //navigation.navigate(TELA_LISTA_MEDICOS.name)
        console.log(this.props);
    }

    render(){
        return (
            <View style={[styles.tabDadosMedico, EstilosComuns.backgroundPadrao]}>
                <View style={styles.tabDadosMedicoCadastro}>
                    <InputTexto placeholder="Nome do médico" maxLength={50}
                        value={this.props.nomeMedico}
                        onChangeInput={value => this.props.onChangeField('nomeMedico', value) }
                        />
                    {/* <ComboEspecialidades {...this.props}/> */}

                    <InputTexto placeholder="Número CRM (UF+Número)" maxLength={10}
                        value={this.props.numRegistroCrm}
                        keyboardType={InputTexto.KEYBOARD_EMAIL}
                        onChangeInput={value => this.props.onChangeField('numRegistroCrm', value)}
                        />

                    <InputTexto placeholder="E-mail" maxLength={50}
                        value={this.props.descEmail}
                        keyboardType={InputTexto.KEYBOARD_EMAIL}
                        onChangeInput={value => this.props.onChangeField('descEmail', value)}
                        />

                    <InputTextComMascara  style={[EstilosComuns.inputText]} 
                        onChangeText={text =>this.props.onChangeField('numCelular', text)}
                        value={this.props.numCelular}
                        placeholder="Digite o celular (xx)xxxxx-xxxx"
                        type={InputTextComMascara.MASK_CELULAR}
                    />                        
                
                </View>

                <View style={styles.tabDadosMedicoRodape}>
                    <Botao tituloBotao='Adicionar' onClick={() =>  this.salvarMedico()}/>    
                </View>
            </View>
        )
    }
};

const ComboEspecialidades = (props) => {
    
    const mapPicker = this.props.listaEspecialidades
                .map(item => <Picker.Item label={item.nomeEspecialidade} value={item.idEspecialidade} />)

    return (
        <Picker
            selectedValue={this.props.codEspecialidade}
            mode="dialog"
            style={EstilosComuns.corVerde}        
            onValueChange={value => this.onChangeField('codEspecialidade', value)}
        >
            {mapPicker}
        </Picker>
    )
}

const styles= StyleSheet.create({
    containerBusca: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 5 ,
    },
    containerTabsMedico: {
        flex: 8,
        borderWidth: 1
    },
    tabDadosMedico: {
        flex: 1, 
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    tabDadosMedicoCadastro: {
        flex: 9,
        flexDirection: 'column'
    },
    tabDadosMedicoRodape: {
        flex: 1,
        padding: 5,
        marginBottom: 5
    }
})

const mapStateToProps = state => ({
    nomeMedico: state.medicosReducer.medico.nomeMedico, 
    codEspecialidade: state.medicosReducer.medico.codEspecialidade,
    numRegistroCrm: state.medicosReducer.medico.numRegistroCrm,
    descEmail: state.medicosReducer.medico.descEmail,
    numCelular:state.medicosReducer.medico.numCelular,
    loading: state.medicosReducer.loading,
    bolExecutado: state.medicosReducer.bolExecutado,
    bolSucesso: state.medicosReducer.bolSucesso,
    mensagemFalha: state.medicosReducer.mensagemFalha,
    listaEspecialidades: state.medicosReducer.listaEspecialidades
})

export default connect(mapStateToProps, {onChangeField, salvarMedico})(AdicionaMedico);
