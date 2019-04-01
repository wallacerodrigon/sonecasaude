import { Fab, Icon } from 'native-base';
import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { buscarMeusMedicos, desvinculaMedico, onChangeField } from "../../actions/MeusMedicosAction";
import EstilosComuns, { FUNDO_CINZA_CLARO, VERDE } from '../../assets/estilos/estilos';
import { BotaoExcluir, BotaoFecharHeader, BotaoOpacity } from '../../components/botao/Botao';
import { MensagemConfirmacao, MensagemInformativa } from "../../components/mensagens/Mensagens";
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

    componentDidUpdate(){
        if (this.props.bolDesvinculo && this.props.bolExecutado){
            MensagemInformativa(this.props.mensagemFalha ? this.props.mensagemFalha: 'Médico desvinculado da sua lista com sucesso!');
            this.props.onChangeField('bolDesvinculo', false);
        }
            
    }

    confirmarDesvinculo(medico){
        // text?: string;
        // onPress?: () => void;
        // style?: "default" | "cancel" | "destructive";        
        let botaoConfirma= {
            text: 'SIM',
            onPress: () =>  {
                this.props.desvinculaMedico(medico);        
            },
            style: 'destructive'
        };

        let botaoDescarta= {
            text: 'NÃO',
            style: 'cancel'
        };

        MensagemConfirmacao(`Você realmente deseja desvincular o(a) Dr(a) ${medico.nomeMedico} da sua lista de médicos?`, 
            [botaoConfirma, botaoDescarta]
        );
        
    }

    buscarDadosMedico(){
        
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
                                        <BotaoOpacity onClick={() =>  this.buscarDadosMedico(medico)}>
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
                            {this.props.loading && <ActivityIndicator size="large" color={VERDE} style={styles.loadingStyle} />}
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
    loading: state.medicosReducer.loading
}}

export default connect(mapStateToProps, {desvinculaMedico, buscarMeusMedicos, onChangeField})(ListaMedicos);


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