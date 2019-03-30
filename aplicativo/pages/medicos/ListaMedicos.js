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
            MensagemInformativa(this.props.mensagemFalha ? this.props.mensagemFalha: 'Médico retirado com sucesso!');
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

        MensagemConfirmacao('Deseja realmente retirar esse médico da sua lista de médicos?', 
            [botaoConfirma, botaoDescarta]
        );
        
    }

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text style={EstilosComuns.tituloJanelas}>Seus médicos cadastrados</Text>

                <View style={[EstilosComuns.backgroundPadrao, EstilosComuns.bodyMain]}>
                             <FlatList  
                                data= {this.props.listaMedicos}
                                keyExtractor={medico => new String(medico.idMedico)}
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
                                                    <BotaoExcluir onPress={() => this.confirmarDesvinculo(medico.item)} />        
                                                </View>
                                            </View>                                    
                                        </BotaoOpacity>
                                    )
                                }}
                            />
                            {this.props.loading && <ActivityIndicator size="small" color={VERDE}/>}
                </View>
                <Fab
                    style={{ backgroundColor: VERDE }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate(TELA_BUSCA_MEDICOS.name)}>
                    
                     <Icon name="add" />
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
    }
})