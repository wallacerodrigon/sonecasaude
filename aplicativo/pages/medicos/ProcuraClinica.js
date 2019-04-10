import { Fab, Icon } from 'native-base';
import React from 'react';
import { NavigationActions } from "react-navigation";
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";
import EstilosComuns, { FUNDO_CINZA_CLARO, VERDE } from '../../assets/estilos/estilos';
import { BotaoLoading, BotaoOpacity } from '../../components/botao/Botao';
import { InputTexto } from '../../components/input/InputTexto';
import { MensagemConfirmacao, MensagemInformativa } from "../../components/mensagens/Mensagens";
import { TELA_ADD_CLINICA, TELA_BUSCA_CLINICA, TELA_LISTA_CLINICAS, TELA_ADD_MEDICOS, TELA_HOME } from '../../constants/AppScreenData';
import { onChangeFieldBusca, buscarClinica, vincularClinica} from "../../actions/clinicas/CadastroClinicasAction";

class ProcuraClinica extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: TELA_BUSCA_CLINICA.title
    });

    constructor(props){
        super(props);

        // const backAction = NavigationActions.back({
        //     key: TELA_HOME.name,
        //     params: {atualizaLista: true}
        //   });        
        // this.props.navigation.dispatch(backAction);
    }
    
    buscarClinicas(){
        if (this.props.nomeClinica.trim() == ''){
            MensagemInformativa('Informe o nome da clínica para filtrar');
            return false;
        }
        this.props.buscarClinica(this.props.nomeClinica, this.medico.idMedico);
    }

    confirmarVinculo(clinica){

        if (! this.medico){
            MensagemInformativa('O médico deve ser selecionado!');
            return false;
        }

        let botaoConfirma= {
            text: 'SIM',
            onPress: () =>  {
                this.props.vincularClinica(clinica, this.medico.idMedico);
            },
            style: 'destructive'
        };

        let botaoDescarta= {
            text: 'NÃO',
            style: 'cancel'
        };

        MensagemConfirmacao(`Você realmente deseja vincular esta clinica ao Dr(a) ${this.medico.nomeMedico}? `, 
            [botaoConfirma, botaoDescarta]
        );        
    }

    componentDidMount(){
        const {params} = this.props.navigation.state;
        this.medico = params && params.medico ? params.medico : null;
    }

    componentDidUpdate(prevProps){
        console.log('encaminha para a tela de médicos', this.props.bolVinculoClinica);

        if (this.props.bolVinculoClinica){
            this.props.navigation.navigate(TELA_LISTA_CLINICAS.name, {atualizaLista: true});
        }
    }

    onChangeField(field,value){
        this.props.onChangeFieldBusca(field, value);
    }

    editarClinica(clinica){
        this.props.navigation.navigate(TELA_ADD_CLINICA.name, {clinica, medico: this.medico});
    }

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text style={EstilosComuns.tituloJanelas}>Vincular clínica à médico</Text>
                {/* <Text style={[styles.nota, EstilosComuns.italico]}>Antes de incluir, verifique se a clínica já existe no aplicativo efetuando a busca pelos dados abaixo</Text> */}
                <View style={EstilosComuns.bodyMain}>
                    
                    <View style={styles.containerBusca}>
                        <InputTexto placeholder="Nome da clínica" maxLength={50}
                            autoCapitalize="characters"
                            value={this.props.nomeClinica}
                            keyboardType={InputTexto.KEYBOARD_DEFAULT}
                            onChangeInput={value => this.onChangeField('nomeClinica', value)}
                            />
                        <BotaoLoading carregaLoading={this.props.loading}  tituloBotao="Consultar" onClick={() => this.buscarClinicas()}/>
                    </View>

                    <View style={[styles.containerResultado]}>
                           <FlatList  
                                data= {this.props.listaClinicas}
                                keyExtractor={clinica => new String(clinica.idClinica)}
                                ListEmptyComponent= {
                                    <Text style={[EstilosComuns.textoCentralizado, EstilosComuns.corVerde, styles.emptyResult]} >Nenhum resultado encontrado, informe os filtros para consultar!</Text>
                                }
                                renderItem = {clinica => {
                                    return (
                                        <BotaoOpacity onClick={()=> this.editarClinica(clinica.item)}>
                                            <View style={styles.containerMedico}>
                                                <View style={{flex: 9, flexDirection: 'column'}}>
                                                    <Text  style={EstilosComuns.negrito}>{clinica.item.nomeClinica}</Text>
                                                    <Text  style={EstilosComuns.italico}>{clinica.item.numTelefone}</Text>
                                                    <Text style={EstilosComuns.italico}>{clinica.item.nomeCidade != null ? clinica.item.nomeCidade : ''}</Text>
                                                </View>

                                                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                                    <Icon name="link" style={{color: 'blue'}} onPress={() => this.confirmarVinculo(clinica.item)} />        
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
                    onPress={() => this.props.navigation.navigate(TELA_ADD_CLINICA.name)}>
                     <Icon name="add" />
                </Fab>                                         

                </View>
            </View>
        )
    };
}

const mapStateToProps = state => ({
    nomeClinica: state.procuraClinicaReducer.nomeClinica,
    loading: state.procuraClinicaReducer.loading,
    buscaSucesso: state.procuraClinicaReducer.buscaSucesso,
    bolVinculado: state.procuraClinicaReducer.bolVinculado,
    mensagemFalha: state.procuraClinicaReducer.mensagemFalha,
    listaClinicas: state.procuraClinicaReducer.listaClinicas,

    bolVinculoClinica: state.cadastroMedicosReducer.bolVinculoClinica
})


const styles= StyleSheet.create({
    containerBusca: {
        flex: 2,
        flexDirection: 'column',
        padding: 3

    },
    
    containerResultado: {
        flex: 5,
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

export default connect( mapStateToProps, 
    {onChangeFieldBusca, buscarClinica,vincularClinica}
    )
(ProcuraClinica);