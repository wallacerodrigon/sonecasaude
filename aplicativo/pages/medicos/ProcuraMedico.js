import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";
import { buscaPorMedico, onChangeField } from "../../actions/medicos/ProcuraMedicosAction";
import EstilosComuns from '../../assets/estilos/estilos';
import { BotaoLoading } from '../../components/botao/Botao';
import { InputTexto } from '../../components/input/InputTexto';
import { MensagemErro } from "../../components/mensagens/Mensagens";
import { TELA_BUSCA_MEDICOS } from '../../constants/AppScreenData';

export default class ProcuraMedico extends React.Component {
    static navigationOptions = {
        title: TELA_BUSCA_MEDICOS.title,
      };

    constructor(props){
        super(props);
    }

    isCrmValido(){
        return true;
    }

    buscaPorMedico(){
        let bolNomeVazio = this.props.nomeMedico == null || this.props.nomeMedico == '';
        let bolCrmVazio =  this.props.numeroCrm == null || this.props.numeroCrm == '';
        if (bolNomeVazio && bolCrmVazio){
            MensagemErro('Nome do médico ou o CRM devem ser informados para buscar por um médico.');
            return false;
        }

        if (! bolCrmVazio && this.isCrmValido() ){
            MensagemErro('O número do CRM deve estar no formato: DF1234');
            return false;
        }

        MensagemErro('Buscsando por médico: ' + this.props.nomeMedico + ' ' + this.props.numeroCrm);
       // this.props.buscaPorMedico(this.props.nomeMedico, this.props.numeroCrm);
    }

    shouldComponentUpdate(){
        return this.props.buscaSucesso || this.props.buscaFalha;
    }

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text style={EstilosComuns.tituloJanelas}>Adicionar Médico</Text>
            
                <View style={EstilosComuns.bodyMain}>
                    <View style={styles.containerBusca}>
                        <InputTexto placeholder="Nome do médico" maxLength={50}
                            onChangeInput={value => this.props.onChangeField('nomeMedico', value)}
                            />
                        {/* 7 digitos + uf */}
                        <InputTexto placeholder="Número do CRM ()" maxLength={10}
                            onChangeInput={value => this.props.onChangeField('numeroCrm', value)}
                            />
                        <BotaoLoading tituloBotao="Procurar" onClick={() => this.buscaPorMedico()}/>
                    </View>

                                       

                </View>
            </View>
        )
    };
}

const mapStateToProps = state => ({
    nomeMedico: state.procuraMedicosReducer.nomeMedico,
    numeroCrm: state.procuraMedicosReducer.numeroCrm,
    loading: state.procuraMedicosReducer.loading,
    buscaSucesso: state.procuraMedicosReducer.buscaSucesso,
    mensagemFalha: state.procuraMedicosReducer.mensagemFalha,
    buscaFalha: state.procuraMedicosReducer.buscaFalha,
    listaMedicos: state.procuraMedicosReducer.listaMedicos
})

export default connect( mapStateToProps, {buscaPorMedico, onChangeField});

const styles= StyleSheet.create({
    containerBusca: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 5 ,
    },
   
})