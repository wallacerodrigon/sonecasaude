import React from 'react';
import { Picker, StyleSheet, Text, View } from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import Botao from '../../components/botao/Botao';
import { InputTextComMascara, InputTexto } from '../../components/input/InputTexto';
import ConfirmacaoSwitch from '../../components/radio/ConfirmacaoSwitch';
import { TELA_ADD_COMPARTILHAMENTO, TELA_FINALIZA_CADASTRO, TELA_ADD_COMPARTILHAMENTO_LIST, TELA_LISTA_COMPARTILHAMENTO } from '../../constants/AppScreenData';

import { connect } from "react-redux";
import { buscarGrausParentesco, onChangeFieldSharing, onToggleFieldSharing } from "../../actions/CadastroAction";
import Validador from '../../utilitarios/Validador';
import { MensagemErro } from '../../components/mensagens/Mensagens';

class CadastroCompartilhamento extends React.Component {
    static navigationOptions = {
        title: TELA_ADD_COMPARTILHAMENTO.title,
        /* No more header config here! */
      };

    novoCadastroAPartirDaLista= false;
    
    constructor(props){
        super(props);
    }

    componentWillMount(){
        //this.props.buscarGrausParentesco();
    }

    toggleTransporte(){
        //this.props.onToggleFieldSharing('compartilhouTransporte');
    }

    toggleMedicacao(){
        //this.props.onToggleFieldSharing('compartilhouMedicacao');
    }    

    algumCamposObrigatorioEstaPreenchido(){
        return this.props.numCpf.trim() != "" ||
               this.props.descEmail.trim() != "" ||
               this.props.numCelular.trim() != "";
    }

    validarCampos(){

        let dadosInvalidos = '';
        let validador = new Validador();
        let temAlgumCampoInformado = this.algumCamposObrigatorioEstaPreenchido();

        if (temAlgumCampoInformado && this.props.nomePessoa.trim() == ''){
            dadosInvalidos += "- É necessário informar o nome da pessoa e pelo menos o CPF ou o e-mail ou o celular dela.\n";
        }

        //validar cpf
        if (this.props.numCpf != '' && ! validador.validaCPF(this.props.numCpf)){
            dadosInvalidos += "- O número do CPF está inválido!\n";
        }

        //validar e-mail
        if ( this.props.descEmail != '' && ! validador.isEmailValido(this.props.descEmail)){
            dadosInvalidos += "- E-mail está inválido!\n";
        }

        //validar telefone
        if ( this.props.numCelular != '' && ! validador.isTelefoneValido(this.props.numCelular)){
            dadosInvalidos += "- O telefone está inválido!\n";
        }

        if (temAlgumCampoInformado && !this.props.compartilhouTransporte && !this.props.compartilhouMedicacao){
            dadosInvalidos += "- Favor informar que tipo de compartilhamento você deseja para esta pessoa.\n"
        }

        if (temAlgumCampoInformado && this.props.grauParentesco == ''){
            dadosInvalidos += "- Favor informar qual o seu grau de parentesco com esta pessoa.\n"
        }


        return {
            bolValido: dadosInvalidos.length === 0,
            camposInvalidos: dadosInvalidos
        }
    }

    passarParaProximaTela(){
        let retornoValidacao = this.validarCampos();
        if (!retornoValidacao.bolValido){
            MensagemErro('Existem algums campos preenchidos de forma incorreta: \n' + retornoValidacao.camposInvalidos);
            return false;
        }
        this.props.navigation.navigate(TELA_FINALIZA_CADASTRO.name);
    }    


    renderGrausParentesco(){
        return this.props.listaGrausParentesco ?
             this.props.listaGrausParentesco.map(grauParentesco => <Picker.Item label={grauParentesco.nomeGrauParentesco} value={grauParentesco.idGrauParentesco} />)
             : null;
    }

    componentWillReceiveProps(nextProps){
        if (this.props.bolExecutado && nextProps.descMensagemFalha != ''){
            MensagemErro(nextProps.descMensagemFalha);
        }
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
                        onChangeText={value => this.props.onChangeFieldSharing('numCpf', value)}
                        value={this.props.numCpf}
                        />
                    <InputTexto placeholder="E-mail" maxLength={60}
                        keyboardType={InputTexto.KEYBOARD_EMAIL}
                        onChangeInput={value => this.props.onChangeFieldSharing('descEmail', value)}
                        value={this.props.descEmail}
                        />
                    <InputTexto placeholder="Nome" maxLength={60}
                        keyboardType={InputTexto.KEYBOARD_DEFAULT}
                        onChangeInput={value => this.props.onChangeFieldSharing('nomePessoa', value)}
                        value={this.props.nomePessoa}
                        />
                    <Picker
                        selectedValue={this.props.grauParentesco}
                        mode="dialog"
                        style={EstilosComuns.corVerde}
                        onValueChange={itemValue => this.props.onChangeFieldSharing('grauParentesco', itemValue)}>
                        <Picker.Item label="Selecione o parentesco" value=""/>
                        {this.renderGrausParentesco()}
                    </Picker> 
                    <InputTextComMascara placeholder="Celular"
                        type={InputTextComMascara.MASK_CELULAR}
                        onChangeText={value => this.props.onChangeFieldSharing('numCelular', value)}
                        value={this.props.numCelular}
                        />
                    <View style={styles.checkboxes}>
                        <View style={styles.checkboxItem}>
                            <Text style={EstilosComuns.corVerde} >Compartilhar Informações:</Text>
                        </View>
                        <View style={styles.checkboxItem}>
                            <Text style={styles.checkboxLeft}>Transporte</Text>
                            <ConfirmacaoSwitch value={this.props.compartilhouTransporte} toggleSwitch={() => this.toggleTransporte() }></ConfirmacaoSwitch>
                        </View>

                        <View style={styles.checkboxItem}>
                            <Text style={styles.checkboxLeft}>Medicação</Text>
                            <ConfirmacaoSwitch value={this.props.compartilhouMedicacao} toggleSwitch={() => this.toggleMedicacao()}></ConfirmacaoSwitch>
                        </View>
                    </View>
                </View>

                <View style={EstilosComuns.rodape}>
                    <Botao tituloBotao='Próximo'
                    onClick={() => this.passarParaProximaTela() }/>    
                </View>            

            </View>
        )
    };
}

const mapStateToProps = state => {
    return {
        numCpf: state.cadastroReducer.user.compartilhamento.numCpf,
        descEmail: state.cadastroReducer.user.compartilhamento.descEmail,
        nomePessoa: state.cadastroReducer.user.compartilhamento.nomePessoa,
        grauParentesco: state.cadastroReducer.user.compartilhamento.grauParentesco,
        numCelular: state.cadastroReducer.user.compartilhamento.numCelular,
        compartilhouTransporte: state.cadastroReducer.user.compartilhamento.compartilhouTransporte,
        compartilhouMedicacao: state.cadastroReducer.user.compartilhamento.compartilhouMedicacao,

        sharing: state.cadastroReducer.user.compartilhamento,

        loading: state.cadastroReducer.loading,
        listaGrausParentesco: state.cadastroReducer.listaGrausParentesco

    }
}

export default connect(mapStateToProps, { buscarGrausParentesco, onChangeFieldSharing, onToggleFieldSharing })(CadastroCompartilhamento);

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
