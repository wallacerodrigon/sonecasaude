import { Fab, Icon } from 'native-base';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { buscarMedicoEdicao, buscarMeusMedicos, desvinculaMedico, onChangeField } from "../../actions/medicos/MeusMedicosAction";
import EstilosComuns, { FUNDO_CINZA_CLARO, VERDE } from '../../assets/estilos/estilos';
import { BotaoExcluir, BotaoFecharHeader, BotaoOpacity } from '../../components/botao/Botao';
import Loading from '../../components/comuns/Loading';
import { MensagemConfirmacao } from "../../components/mensagens/Mensagens";
import { TELA_ADD_MEDICOS, TELA_BUSCA_MEDICOS } from '../../constants/AppScreenData';


class ListaMedicos extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <BotaoFecharHeader navigation={navigation}/>
          )          
    });

    constructor(props){
        super(props);
    }
    
    componentWillMount(){
        this.props.buscarMeusMedicos();
    }    

    componentDidUpdate(prevProps, prevState){
        let bolEditando = !prevProps.bolEdita && this.props.bolEdita;
        if (bolEditando){
            this.props.navigation.navigate(TELA_ADD_MEDICOS.name);
        } 
    }

    confirmarDesvinculo(medico){
        let botaoConfirma= {
            text: 'SIM',
            onPress: () =>  {
                this.props.desvinculaMedico(medico);        
            }
        };

        let botaoDescarta= {
            text: 'NÃO',
            style: 'cancel'
        };

        MensagemConfirmacao(`Você realmente deseja desvincular o(a) Dr(a) ${medico.nomeMedico} da sua lista de médicos?`, 
            [botaoConfirma, botaoDescarta]
        );
        
    }

    buscarDadosMedico(medico){
        //vai buscar no endPoint e carregar as clínicas do médico e o que mais para mostrar na tela de forma
        //a buscar os dados atualizados
       this.props.buscarMedicoEdicao(medico.idMedico);
    }

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text style={EstilosComuns.tituloJanelas}>Meus médicos</Text>

                <View style={[EstilosComuns.backgroundPadrao, EstilosComuns.bodyMain]}>
                             <FlatList  
                                data= {this.props.listaMedicos}
                                keyExtractor={medico => new String(medico.idMedico)}
                                ListEmptyComponent= {
                                    <Text style={[{padding: 20}, EstilosComuns.corVerde, EstilosComuns.textoCentralizado]}>
                                        Você ainda não tem médicos cadastrados clique no botão abaixo para cadastrar.
                                    </Text>

                                }
                                renderItem = {medico => {
                                    return (
                                        <BotaoOpacity onClick={() =>  this.buscarDadosMedico(medico.item)}>
                                            <View style={styles.containerMedico}>
                                                <View style={{flex: 9, flexDirection: 'column'}}>
                                                    <Text  style={EstilosComuns.negrito}>{medico.item.nomeMedico}</Text>
                                                    <Text  style={EstilosComuns.italico}>{medico.item.nomeEspecialidade}</Text>
                                                    <Text style={EstilosComuns.italico}>{medico.item.descEmail != null ? medico.item.descEmail : ''}</Text>
                                                </View>

                                                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                                                    <BotaoExcluir onPress={() => this.confirmarDesvinculo(medico.item)} />        
                                                </View>
                                            </View>                                    
                                        </BotaoOpacity>
                                    )
                                }}
                            />
                            {this.props.loading && <Loading bolAtivo={this.props.loading} />}
                </View>
                <Fab
                    style={{ backgroundColor: VERDE }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate(TELA_BUSCA_MEDICOS.name)}>
                     <Icon name="search" />
                </Fab>                   
            </View>
        )
    };
}

const mapStateToProps = state => {
   return {
    listaMedicos: state.medicosReducer.listaMedicos,
    mensagemFalha: state.medicosReducer.mensagemFalha,
    bolExecutado: state.medicosReducer.bolExecutado,
    bolDesvinculo: state.medicosReducer.bolDesvinculo,
    loading: state.medicosReducer.loading,
    bolEdita: state.medicosReducer.bolEdita,
}}

export default connect(
    mapStateToProps, 
    {desvinculaMedico, buscarMeusMedicos, onChangeField, buscarMedicoEdicao})
(ListaMedicos);


const styles = StyleSheet.create({
    containerMedico: {
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
        backgroundColor: EstilosComuns.FUNDO_CINZA_CLARO
    }
})