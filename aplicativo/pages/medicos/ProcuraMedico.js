import { Fab, Icon } from 'native-base';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";
import { buscaPorMedico, onChangeField, vincularMedico } from "../../actions/medicos/ProcuraMedicosAction";
import { buscarMedicoEdicao, vinculaMedicoLocal } from "../../actions/medicos/MeusMedicosAction";
import EstilosComuns, { FUNDO_CINZA_CLARO, VERDE } from '../../assets/estilos/estilos';
import { BotaoLoading, BotaoOpacity } from '../../components/botao/Botao';
import { InputTexto } from '../../components/input/InputTexto';
import { MensagemConfirmacao, MensagemErro, MensagemInformativa } from "../../components/mensagens/Mensagens";
import { TELA_ADD_MEDICOS, TELA_BUSCA_MEDICOS } from '../../constants/AppScreenData';
import Validador from '../../utilitarios/Validador';

class ProcuraMedico extends React.Component {
    static navigationOptions = {
        title: TELA_BUSCA_MEDICOS.title,
      };

    constructor(props){
        super(props);
    }

    buscaPorMedico(){
        let bolNomeVazio = this.props.nomeMedico == null || this.props.nomeMedico == '';
        let bolCrmVazio =  this.props.numeroCrm == null || this.props.numeroCrm == '';
        if (bolNomeVazio && bolCrmVazio){
            MensagemErro('Nome do médico ou o CRM devem ser informados para buscar por um médico.');
            return false;
        }

        if (! bolCrmVazio && !new Validador().isCrmValido(this.props.numeroCrm) ){
            MensagemErro('O número do CRM deve estar no formato: UF+NÚMERO');
            return false;
        }

        this.props.buscaPorMedico(this.props.nomeMedico, this.props.numeroCrm);
    }

    confirmarVinculo(medico){
        let botaoConfirma= {
            text: 'SIM',
            onPress: () =>  {
                this.props.vincularMedico(medico);  
                this.medicoVinculado = medico;      
            },
            style: 'destructive'
        };

        let botaoDescarta= {
            text: 'NÃO',
            style: 'cancel'
        };

        MensagemConfirmacao(`Você realmente deseja vincular o(a) Dr(a) ${medico.nomeMedico} na sua lista de médicos?`, 
            [botaoConfirma, botaoDescarta]
        );        
    }

    componentDidUpdate(prevProps, prevState){
       // let fezVinculo = !prevProps.bolVinculo && this.props.bolVinculo;

        // if (fezVinculo){
        //     this.props.vinculaMedicoLocal(this.medicoVinculado);
        // }

       
        let bolEditando = !prevProps.bolEdita && this.props.bolEdita;
        let bolTemMensagem = this.props.mensagemFalha != '';

        if (bolEditando && !bolTemMensagem){
            this.props.navigation.navigate(TELA_ADD_MEDICOS.name);
        }
    }

    buscarDadosMedico(medico){
        //vai buscar no endPoint e carregar as clínicas do médico e o que mais para mostrar na tela de forma
        //a buscar os dados atualizados
       this.props.buscarMedicoEdicao(medico.idMedico);
    }    

    novoCadastro(){
        this.props.navigation.navigate(TELA_ADD_MEDICOS.name), {novoCadastro: true}  

    }

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text style={EstilosComuns.tituloJanelas}>Buscar médico e vincular na minha conta</Text>
                {/* <Text style={[styles.nota, EstilosComuns.italico]}>Antes de incluir, verifique se seu médico já existe no aplicativo buscando pelo nome ou CRM</Text>*/}
                <View style={EstilosComuns.bodyMain}> 
                    
                    <View style={styles.containerBusca}>
                         <InputTexto placeholder="Nome do médico" maxLength={50}
                            autoCapitalize="characters"
                            value={this.props.nomeMedico}
                            keyboardType={InputTexto.KEYBOARD_DEFAULT}
                            onChangeInput={value => this.props.onChangeField('nomeMedico', value)}
                            />
                        <InputTexto placeholder="Número do CRM (UF + Número)" maxLength={10}
                            keyboardType={InputTexto.KEYBOARD_DEFAULT}
                            autoCapitalize="characters"
                            value={this.props.numeroCrm}                            
                            onChangeInput={value => this.props.onChangeField('numeroCrm', value)}
                            />
                        <BotaoLoading carregaLoading={this.props.loading}  tituloBotao="Consultar" onClick={() => this.buscaPorMedico()}/>
                    </View>

                    <View style={[styles.containerResultado]}>
                           <FlatList  
                                data= {this.props.listaMedicosBusca}
                                keyExtractor={medico => new String(medico.idMedico)}
                                ListEmptyComponent= {
                                    <Text style={[EstilosComuns.textoCentralizado, EstilosComuns.corVerde, styles.emptyResult]} >Nenhum resultado encontrado, informe os filtros e consulte!</Text>
                                }
                                renderItem = {medico => {
                                    return (
                                        <BotaoOpacity onClick={() =>  this.buscarDadosMedico(medico.item) }>
                                            <View style={styles.containerMedico}>
                                                <View style={{flex: 9, flexDirection: 'column'}}>
                                                    <Text  style={EstilosComuns.negrito}>{medico.item.nomeMedico}</Text>
                                                    <Text  style={EstilosComuns.italico}>{medico.item.nomeEspecialidade}</Text>
                                                    <Text style={EstilosComuns.italico}>{medico.item.descEmail != null ? medico.item.descEmail : ''}</Text>
                                                </View>

                                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                                    <Icon name="link" style={{color: 'blue'}} onPress={() => this.confirmarVinculo(medico.item)} />        
                                                </View>                                                
                                            </View>                                    
                                        </BotaoOpacity>
                                    )
                                }}
                            />                           
                    </View> 

                    <Fab
                        style={{ backgroundColor: VERDE }}
                        position="bottomRight"
                        onPress={() => this.novoCadastro()}>
                        <Icon name="add" />
                    </Fab>                                         

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
    listaMedicosBusca: state.procuraMedicosReducer.listaMedicosBusca,
    bolVinculo: state.procuraMedicosReducer.bolVinculo,
    bolNovoCadastro: state.procuraMedicosReducer.bolNovoCadastro,
    bolEdita: state.medicosReducer.bolEdita,    
})


const styles= StyleSheet.create({
    containerBusca: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 10
    },
    
    containerResultado: {
        flex: 5,
        //padding: 10
    },
    containerMedico: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        padding: 6,
        borderBottomWidth: 1,
        borderBottomColor: FUNDO_CINZA_CLARO        
    },
    tituloResultado: {
        borderBottomColor: FUNDO_CINZA_CLARO,
        borderBottomWidth: 1
    },
    nota: {
        fontSize: 15,
        textAlign: 'center'
        
    },

    emptyResult: {
        padding: 20,

    }

    
})

export default connect( mapStateToProps, {buscaPorMedico, onChangeField, vincularMedico, vinculaMedicoLocal, buscarMedicoEdicao})(ProcuraMedico);