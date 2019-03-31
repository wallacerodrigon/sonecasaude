import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { connect } from "react-redux";
import { buscaPorMedico, onChangeField, vincularMedico } from "../../actions/medicos/ProcuraMedicosAction";
import { vinculaMedicoLocal } from "../../actions/MeusMedicosAction";
import EstilosComuns, { FUNDO_CINZA_CLARO, VERDE } from '../../assets/estilos/estilos';
import { BotaoLoading, BotaoOpacity, BotaoExcluir, BotaoConfigIcon } from '../../components/botao/Botao';
import { InputTexto } from '../../components/input/InputTexto';
import { MensagemErro, MensagemConfirmacao, MensagemInformativa } from "../../components/mensagens/Mensagens";
import { TELA_BUSCA_MEDICOS, TELA_ADD_MEDICOS } from '../../constants/AppScreenData';
import Validador from '../../utilitarios/Validador';
import { Fab, Icon } from 'native-base';

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

    componentDidUpdate(){
          if (this.props.bolVinculo || this.props.mensagemFalha != ''){
              MensagemInformativa(this.props.bolVinculo ? 'Vínculo efetuado com sucesso!' : this.props.mensagemFalha);

              if (this.props.bolVinculo){
                 // this.props.listaMedicosVinculados.push( this.medicoVinculado );
                  //console.log(this.props.listaMedicosVinculados);
                  this.props.vinculaMedicoLocal(this.medicoVinculado);
              } 

          }
    }

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text style={EstilosComuns.tituloJanelas}>Vincular Médico à conta</Text>
                <Text style={[styles.nota, EstilosComuns.italico]}>Antes de incluir, verifique se seu médico já existe no aplicativo buscando pelo nome ou CRM</Text>
                <View style={EstilosComuns.bodyMain}>
                    
                    <View style={styles.containerBusca}>
                        <InputTexto placeholder="Nome do médico" maxLength={50}
                            autoCapitalize="characters"
                            keyboardType={InputTexto.KEYBOARD_DEFAULT}
                            onChangeInput={value => this.props.onChangeField('nomeMedico', value)}
                            />
                        {/* 7 digitos + uf */}
                        <InputTexto placeholder="Número do CRM (UF + Número)" maxLength={10}
                            keyboardType={InputTexto.KEYBOARD_DEFAULT}
                            autoCapitalize="characters"
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
                                        <BotaoOpacity onClick={() =>  this.props.navigation.navigate(TELA_ADD_MEDICOS.name, {medico}) }>
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
                    onPress={() => this.props.navigation.navigate(TELA_ADD_MEDICOS.name)}>
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
    bolVinculo: state.procuraMedicosReducer.bolVinculo
})


const styles= StyleSheet.create({
    containerBusca: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 5 ,
    },
    
    containerResultado: {
        flex: 6,
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

export default connect( mapStateToProps, {buscaPorMedico, onChangeField, vincularMedico, vinculaMedicoLocal})(ProcuraMedico);