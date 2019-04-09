import { Fab, Icon } from 'native-base';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";
import { desvincularClinica } from "../../actions/medicos/CadastroMedicosAction";
import { buscarMedicoEdicao } from "../../actions/medicos/MeusMedicosAction";
import EstilosComuns, { FUNDO_CINZA_CLARO } from '../../assets/estilos/estilos';
import { BotaoOpacity } from '../../components/botao/Botao';
import { MensagemConfirmacao, MensagemErro } from "../../components/mensagens/Mensagens";
import { TELA_BUSCA_CLINICA, TELA_LISTA_CLINICAS } from '../../constants/AppScreenData';

class ClinicasMedico extends React.Component {
    static navigationOptions = {
        title: TELA_LISTA_CLINICAS.title
      };

      constructor(props){
        super(props);
        console.log('construtor', this.props);
    }    
    
    abrirModuloClinicas(){
        if (!this.props.medico || this.props.medico.idMedico < 1 ){
            MensagemErro('O médico deve ser selecionado!');
            return false;
        }
        this.props.navigation.navigate(TELA_BUSCA_CLINICA.name, {medico:this.props.medico})         
    }

    confirmarDesvinculo(clinica){
        let botaoConfirma= {
            text: 'SIM',
            onPress: () =>  {
               this.props.desvincularClinica(clinica.idClinica, this.props.medico.idMedico);        
               //MensagemInformativa('Clínica desvinculada com sucesso!');
            }
        };

        let botaoDescarta= {
            text: 'NÃO',
            style: 'cancel'
        };

        MensagemConfirmacao(`Você realmente deseja remover esta clínica da lista do(a) Dr(a) ${this.props.medico.nomeMedico}?`, 
            [botaoConfirma, botaoDescarta]
        );
        
    }    

    buscarMedico(){
        this.props.buscarMedicoEdicao(this.props.medico.idMedico);
    }

    render() {
        return (
            <View style={[styles.tabDadosMedico, EstilosComuns.backgroundPadrao]}>
                <View style={EstilosComuns.bodyMain}>
                    {/* <Loading bolAtivo={this.props.Loading}/> */}

                    <FlatList  
                                    data= {this.props.medico.clinicas}
                                    keyExtractor={clinica => new String(clinica.idClinica)}
                                    ListEmptyComponent= {
                                        <Text style={[EstilosComuns.textoCentralizado, EstilosComuns.corVerde]} >
                                                Ainda não há clínicas associadas a este médico. Clique no botão abaixo para pesquisar e associar!</Text>
                                    }
                                    renderItem = {clinica => {
                                        return (
                                            <BotaoOpacity onClick={() => null} >
                                                <View style={styles.containerClinica}>
                                                    <View style={{flex: 9, flexDirection: 'column'}}>
                                                        <Text  style={EstilosComuns.negrito}>{clinica.item.nomeClinica}</Text>
                                                        <Text  style={EstilosComuns.italico}>{clinica.item.numTelefone}</Text>
                                                        <Text style={EstilosComuns.italico}>{clinica.item.nomeCidade != null ? clinica.item.nomeCidade : ''}</Text>
                                                    </View>

                                                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                                        <Icon name="trash" style={{color: 'red'}} onPress={() => this.confirmarDesvinculo(clinica.item)} />        
                                                    </View>                                                
                                                </View>                                    
                                            </BotaoOpacity>
                                        )
                                    }}
                                />                  
                </View>

                {/* <View style={[EstilosComuns.rodape, {flexDirection:'row', justifyContent:'center', alignItems: 'center'}]}>
                    <Botao tituloBotao='Atualizar' onClick={() =>  this.buscarMedico()}/>

                </View> */}

                <Fab
                    containerStyle={{ }}
                    style={{ backgroundColor: "#04B486" }}
                    position="bottomRight"
                    onPress={() => this.abrirModuloClinicas() }>
                    <Icon name="search" />
                </Fab>                   
            </View>
        )
    };
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
    },
    containerClinica: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        padding: 6,
        borderBottomWidth: 1,
        borderBottomColor: FUNDO_CINZA_CLARO
    },

    loadingStyle: {
        flex: 1, 
        flexDirection:'column', 
        justifyContent: 'center', 
        alignItems:'center' ,
        backgroundColor: FUNDO_CINZA_CLARO
    }    
})

const mapStateToProps = state => ({
    idMedico: state.cadastroMedicosReducer.medico.idMedico, 
    medico: state.cadastroMedicosReducer.medico, 
    mensagemFalha: state.cadastroMedicosReducer.mensagemFalha,
    bolVinculo: state.cadastroMedicosReducer.bolVinculo
})

export default connect(mapStateToProps, {desvincularClinica,buscarMedicoEdicao})(ClinicasMedico);
