import React from 'react';
import { Picker, Text, View } from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import Botao from '../../components/botao/Botao';
import { InputTextComMascara, InputTexto } from '../../components/input/InputTexto';
import { TELA_ENDERECO, TELA_LOGIN, TELA_FINALIZA_CADASTRO } from '../../constants/AppScreenData';
import { PERFIL_CUIDADOR, PERFIL_PACIENTE } from '../../constants/ConstantesInternas';

import { connect } from "react-redux";
import { MensagemErro } from "../../components/mensagens/Mensagens";

import { cadastrarUsuario, onChangeField } from "../../actions/CadastroAction";
import Validador from '../../utilitarios/Validador';

//import { KeepAwake } from "expo";

class DadosPessoais extends React.Component {

  //  tipoPerfil = 'P';
   // labelBotao = 'Próximo';

    constructor(props){
        super(props); 

        this.tipoPerfil = this.props.navigation.state.params.tipoPerfil;
    }

    componentWillMount(){
        this.labelBotao= this.isPerfilPaciente ? 'Próximo': 'Finalizar';
    }

    isPerfilPaciente(){
        return (this.tipoPerfil === PERFIL_PACIENTE);
    }

    gotoNextScreen(){
        this.props.onChangeField('codPerfil', this.tipoPerfil);
        
        if (this.isPerfilPaciente()){
            this.props.navigation.navigate(TELA_ENDERECO.name);        
        } else {
            this.props.navigation.navigate(TELA_FINALIZA_CADASTRO.name);        
        } 
    }

    validarCampos(){

        let dadosInvalidos = '';
        let validador = new Validador();

        if (this.props.numCpf.trim() === '') dadosInvalidos = '- Cpf não informado!\n';
        if (this.props.nomeUsuario.trim() === '') dadosInvalidos += '- Nome do usuário não informado!\n';
        if (this.props.descEmail.trim() === '') dadosInvalidos += '- E-mail não informado!\n';
        if (this.props.dataNascimento.trim() === '') dadosInvalidos += '- Data de nascimento não informado!\n';
        if (this.props.numCelular.trim() === '') dadosInvalidos += '- Número de celular não informado!\n';
        if (this.props.sexo === '') dadosInvalidos += '- Campo sexo não informado!\n';

        //validar cpf
        if (this.props.numCpf != '' && ! validador.validaCPF(this.props.numCpf)){
            dadosInvalidos += "- O número do CPF está inválido!\n";
        }

        //validar data de nascimento
        if (this.props.dataNascimento != '' && ! validador.isDataValida(this.props.dataNascimento)){
            dadosInvalidos += "- Data de nascimento está inválida\n";
        }

        //validar e-mail
        if (! validador.isEmailValido(this.props.descEmail)){
            dadosInvalidos += "- E-mail está inválido!\n";
        }

        //validar telefone
        if (! validador.isTelefoneValido(this.props.numCelular)){
            dadosInvalidos += "- O telefone está inválido!";
        }

        return {
            bolValido: dadosInvalidos.length === 0,
            camposInvalidos: dadosInvalidos
        }
    }

    cadastrarDadosPessoais(){
        let retornoValidacao = this.validarCampos();
        if (!retornoValidacao.bolValido){
            MensagemErro('Favor corrigir os dados inválidos: \n' + retornoValidacao.camposInvalidos);
            return false;
        }

        //tratar quando o perfil for de cuidador para enviar para a saga fazer o que tiver que fazer
        this.gotoNextScreen();
    }

    render() {
    

        return (
            <View style={EstilosComuns.container}>
                <View style={EstilosComuns.bodyTitulo}>
                    <Text style={EstilosComuns.tituloJanelas}>Seus dados</Text>
                </View>
                
                <View style={EstilosComuns.bodyMain}>
                    <InputTextComMascara  style={[EstilosComuns.inputText]} 
                        onChangeText={text =>this.props.onChangeField('numCpf', text)}
                        value={this.props.numCpf}
                        placeholder="Digite seu CPF"
                        type={InputTextComMascara.MASK_CPF}
                    />
           
                    <InputTexto placeholder="E-mail" maxLength={40}
                        keyboardType={InputTexto.KEYBOARD_EMAIL}
                        autoCapitalize="none"
                        onChangeInput={text =>this.props.onChangeField('descEmail', text)}
                        value={this.props.descEmail}
                        />
                    <InputTexto placeholder="Nome Completo" maxLength={60}
                        autoCapitalize="words"
                        onChangeInput={text =>this.props.onChangeField('nomeUsuario', text)}
                        value={this.props.nomeUsuario}
                        />
                    <InputTextComMascara  style={[EstilosComuns.inputText]} 
                        onChangeText={text =>this.props.onChangeField('dataNascimento', text)}
                        value={this.props.dataNascimento}
                        placeholder="Data de nascimento (dd/mm/aaaa)"
                        type={InputTextComMascara.MASK_DATA}
                    />                   


                    <InputTextComMascara  style={[EstilosComuns.inputText]} 
                        onChangeText={text =>this.props.onChangeField('numCelular', text)}
                        value={this.props.numCelular}
                        placeholder="Digite seu celular (ddd)xxxx-xxxx"
                        type={InputTextComMascara.MASK_CELULAR}
                    />                        
                    <Text style={EstilosComuns.corBranca}>Sexo</Text>
                    <Picker 
                        style={EstilosComuns.corVerde}
                        selectedValue={this.props.sexo}
                        onValueChange={(itemValue) => this.props.onChangeField('sexo', itemValue)}>
                        <Picker.Item label="Sexo" value=""  />
                        <Picker.Item label="Masculino" value="M" />
                        <Picker.Item label="Feminino" value="F" />
                    </Picker>                                       

                </View>
                
                <View style={EstilosComuns.rodape}>
                    <Botao tituloBotao='Próximo' onClick={() =>  this.cadastrarDadosPessoais()}/>
                </View>
            </View>
        )
    };
}

const mapStateToProps = state => ({
    codPerfil: state.cadastroReducer.user.codPerfil,
    numCpf: state.cadastroReducer.user.numCpf,
    descEmail: state.cadastroReducer.user.descEmail,
    nomeUsuario: state.cadastroReducer.user.nomeUsuario,
    dataNascimento: state.cadastroReducer.user.dataNascimento,
    numCelular: state.cadastroReducer.user.numCelular,
    sexo: state.cadastroReducer.user.sexo
})

export default connect(mapStateToProps, {cadastrarUsuario, onChangeField})(DadosPessoais);