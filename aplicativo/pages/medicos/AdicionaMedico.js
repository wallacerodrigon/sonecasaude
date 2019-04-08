import React from "react";
import { Picker, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { buscarEspecialidades, onChangeField, resetarDados, salvarMedico } from "../../actions/medicos/CadastroMedicosAction";
import { buscarMeusMedicos } from "../../actions/medicos/MeusMedicosAction";
import EstilosComuns from "../../assets/estilos/estilos";
import Botao, { BotaoLoading } from "../../components/botao/Botao";
import { InputTextComMascara, InputTexto } from "../../components/input/InputTexto";
import { MensagemErro } from "../../components/mensagens/Mensagens";
import Validador from '../../utilitarios/Validador';


class AdicionaMedico extends React.Component {

    constructor(props){
        super(props);
        this.props.buscarEspecialidades();
    }

    //só para documentar
//    componentWillMount(){
  //  } //antes do render

    preencheuAtributo(nomeAtributo){
        return this.props[nomeAtributo] && this.props[nomeAtributo] != '' && this.props[nomeAtributo].trim().length > 0;
    }

    validarCampos(){
        let dadosInvalidos = '';
        let validador = new Validador();

        if ( ! this.preencheuAtributo('nomeMedico') ) dadosInvalidos += '- Nome do médico não informado!\n';
        if (this.props.codEspecialidade === null || this.props.codEspecialidade === -1) dadosInvalidos += '- Especialidade não informada!\n';

        //validar número do CRM
        if (this.preencheuAtributo('numRegistroCrm') && ! validador.isCrmValido(this.props.numRegistroCrm)){
            dadosInvalidos += "- Número do CRM está inválido. Informe a UF e o número de registro. Ex: DF1234.\n";
        }

        //validar e-mail
        if ( this.preencheuAtributo('descEmail') && ! validador.isEmailValido(this.props.descEmail)){
            dadosInvalidos += "- E-mail está inválido!\n";
        }

        //validar telefone
        if (this.preencheuAtributo('numCelular') && ! validador.isTelefoneValido(this.props.numCelular)){
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
    
        const {state} = this.props.navigation.state;

        if (state && state.params && state.params.novoCadastro){
            this.novoCadastro();
        }

    }

    novoCadastro(){
        this.props.resetarDados();        
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

    componentDidUpdate(prevProps, prevState){
//        if (this.props.bolExecutado && this.props.bolSucesso){
            // let botaoOk= {
            //     text: 'Ok',
            //     onPress: () =>  {
            //         this.props.buscarMeusMedicos();
            //     }
            // };

            // if (this.props.medico && this.props.medico.idMedico > 0){
            //     MensagemCustomizada('Médico alterado com sucesso!', [botaoOk]);
            // } else {
            //     MensagemCustomizada('Médico salvo com sucesso. Caso deseje vincular clínicas a este médico, selecione a aba "Clínicas do médico"!', [botaoOk]);
            // }
  //          return true;
    //    }
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
                    <View style={{flex: 1, padding: 10}}>
                        <Botao tituloBotao='Novo' onClick={() =>  this.novoCadastro()}/>
                    </View>

                    <View style={{flex: 1, padding: 10}}>
                        <BotaoLoading carregaLoading={this.props.loading} tituloBotao='Salvar' onClick={() =>  this.salvarMedico()}/>
                    </View>
                        
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
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
    loadingEspecialidades: state.cadastroMedicosReducer.loadingEspecialidades,
})

export default connect(mapStateToProps, 
    {onChangeField, buscarMeusMedicos, salvarMedico, buscarEspecialidades,resetarDados})(AdicionaMedico);
