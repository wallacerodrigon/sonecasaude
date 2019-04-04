import React from "react";
import { ActivityIndicator, View, Text, Picker, StyleSheet} from "react-native";
import Botao, { BotaoLoading } from "../../components/botao/Botao";
import {InputTextComMascara, InputTexto} from "../../components/input/InputTexto";
import EstilosComuns, { VERDE } from "../../assets/estilos/estilos";
import { salvarMedico, onChangeField, buscarEspecialidades,resetarDados } from "../../actions/medicos/CadastroMedicosAction";
import { buscarMeusMedicos } from "../../actions/MeusMedicosAction";

import { connect } from "react-redux";
import Validador from '../../utilitarios/Validador';
import { MensagemErro, MensagemInformativa, MensagemCustomizada } from "../../components/mensagens/Mensagens";
import { TELA_LISTA_MEDICOS } from "../../constants/AppScreenData";

class AdicionaMedico extends React.Component {

    constructor(props){
        super(props);
    }

    //só para documentar
    componentWillMount(){
        this.props.buscarEspecialidades();
    } //antes do render


    validarCampos(){

        let dadosInvalidos = '';
        let validador = new Validador();

        if (this.props.nomeMedico.trim() === '') dadosInvalidos += '- Nome do médico não informado!\n';
        if (this.props.codEspecialidade === null || this.props.codEspecialidade === -1) dadosInvalidos += '- Especialidade não informada!\n';

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

    //executado com o setProps
    // componentWillReceiveProps(nextProps){

    // }

    //se deve ou não renderizar a tela
  //  shouldComponentUpdate(nextProps, nextState){}


    //apos sofrer uma alteração de pros ou state: força update e render depois
    //componentWillUpdate(nextProps, nextState){}

    //após chegar a alteração: idem do acima
    //componentDidUpdate(prevProps, prevState){}

    //antes de finalizar o app
    //componentWillUnmount(){}

    //executado depois do render
    componentDidMount(){
        //console.log('did mount:',this.props);
        const {state} = this.props.navigation.state;

        console.log('alterando médico', this.props.nomeMedico, this.props.idEspecialidade);
        //console.log('state:',state);
    }

    salvarMedico(){
        let retornoValidacao = this.validarCampos();
        if (!retornoValidacao.bolValido){
            MensagemErro('Favor corrigir os dados inválidos: \n' + retornoValidacao.camposInvalidos);
            return false;
        }
        //
        this.props.salvarMedico(this.props.medico);        
    } 

    componentDidUpdate(){
        if (this.props.bolExecutado && this.props.bolSucesso){

            let botaoOk= {
                text: 'Ok',
                onPress: () =>  {
                    //this.props.navigation.navigate(TELA_LISTA_MEDICOS.name);
                    //this.props.resetarDados();
                    this.props.buscarMeusMedicos();
                }
            };
    
            MensagemCustomizada('Médico salvo com sucesso. Caso deseje vincular clínicas a este médico, selecionie a próxima aba!', [botaoOk]);
            return true;
        }

        if (this.props.bolExecutado && this.props.mensagemFalha && this.props.mensagemFalha != ''){
            MensagemInformativa(this.props.mensagemFalha);
        }
    }

    renderComboEspecialidades(){
        if (this.props.listaEspecialidades){
            let especialidades = [
                {idEspecialidade: -1, nomeEspecialidade: 'Selecione uma especialidade'},
                ...this.props.listaEspecialidades
            ];


            return <Picker
                        mode="dialog"
                        style={[EstilosComuns.corVerde, EstilosComuns.bordaSeparacaoBlocos]}
                        onValueChange={value => this.props.onChangeField('codEspecialidade', value)}
                        selectedValue={this.props.codEspecialidade}
                    >
                        {especialidades.map((especialidade, index) => {
                            return <Picker.Item label={especialidade.nomeEspecialidade} value={especialidade.idEspecialidade}/>
                        })  
                        }
                   </Picker>        
        }
    }

    render(){
        return (
            <View style={[styles.tabDadosMedico, EstilosComuns.backgroundPadrao]}>
                <Text style={EstilosComuns.tituloJanelas}>Adicionar médico</Text>
                <Text>Id medico: {this.props.medico.idMedico}</Text>

                <View style={styles.tabDadosMedicoCadastro}>
                    <InputTexto placeholder="Nome do médico" maxLength={50}
                        value={this.props.nomeMedico}
                        onChangeInput={value => this.props.onChangeField('nomeMedico', value) }
                        />
                    {
                        this.renderComboEspecialidades()
                    }

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
                    <BotaoLoading carregaLoading={this.props.loading} tituloBotao='Salvar' onClick={() =>  this.salvarMedico()}
                    />    
                </View>
            </View>
        )
    }
};

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
    medico: state.cadastroMedicosReducer.medico,
    nomeMedico: state.cadastroMedicosReducer.medico.nomeMedico, 
    codEspecialidade: state.cadastroMedicosReducer.medico.codEspecialidade,
    numRegistroCrm: state.cadastroMedicosReducer.medico.numRegistroCrm,
    descEmail: state.cadastroMedicosReducer.medico.descEmail,
    numCelular:state.cadastroMedicosReducer.medico.numCelular,
    loading: state.cadastroMedicosReducer.loading,
    bolExecutado: state.cadastroMedicosReducer.bolExecutado,
    bolSucesso: state.cadastroMedicosReducer.bolSucesso,
    mensagemFalha: state.cadastroMedicosReducer.mensagemFalha,
    listaEspecialidades: state.cadastroMedicosReducer.listaEspecialidades,
    loadingEspecialidades: state.cadastroMedicosReducer.loadingEspecialidades
})

export default connect(mapStateToProps, {onChangeField, buscarMeusMedicos, salvarMedico, buscarEspecialidades,resetarDados})(AdicionaMedico);
