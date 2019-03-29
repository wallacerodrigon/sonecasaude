import {  Fab, Icon } from 'native-base';
import React from 'react';
import { FlatList,  Text, View } from 'react-native';
import { connect } from 'react-redux';
import { buscarMeusMedicos, desvinculaMedico } from "../../actions/MedicosAction";
import EstilosComuns from '../../assets/estilos/estilos';
import { BotaoExcluir, BotaoFecharHeader, BotaoOpacity } from '../../components/botao/Botao';



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

    componentWillUpdate(state){
     //   if (this.props.mensagemFalha && this.props.bolExecutado){
            console.log(this.props.mensagemFalha, this.props.bolSucesso, this.props.bolExecutado);
       // }
    }

    confirmarDesvinculo(medico){
        this.props.desvinculaMedico(medico);        
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
                                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 6}}>
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
                </View>
                <Fab
                    containerStyle={{ }}
                    style={EstilosComuns.backgroundPadrao}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate(TELA_ADD_MEDICOS.name)}>
                    
                     <Icon name="add" />
                </Fab>                   
            </View>
        )
    };
}

const mapStateToProps = state => {
   console.log('medicos reducer:',state.medicosReducer);
   return {
    listaMedicos: state.medicosReducer.listaMedicos,
    mensagemFalha: state.medicosReducer.mensagemFalha,
    bolExecutado: state.medicosReducer.bolExecutado,
    loading: state.medicosReducer.loading
}}

export default connect(mapStateToProps, {desvinculaMedico, buscarMeusMedicos})(ListaMedicos);
