import { Fab, Icon } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { connect } from "react-redux";
// import { desvincularClinica } from "../../actions/medicos/CadastroMedicosAction";
import EstilosComuns from '../../assets/estilos/estilos';
import { TELA_BUSCA_CLINICA, TELA_LISTA_CLINICAS } from '../../constants/AppScreenData';

export default class ClinicasMedico extends React.Component {
    static navigationOptions = {
        title: TELA_LISTA_CLINICAS.title
      };

      constructor(props){
        super(props);
        console.log(this.props);
    }    
    
    componentDidMount(){
        console.log('dados do médico:',this.props.medico);
    }

    render() {
        return (
            <View style={[styles.tabDadosMedico, EstilosComuns.backgroundPadrao]}>
                <Text style={EstilosComuns.tituloJanelas}>Clínicas do médico</Text>
                <View style={[styles.containerResultado]}>
                </View>
                {/* <FlatList  
                                data= {this.props.listaClinicas}
                                keyExtractor={clinica => new String(clinica.idClinica)}
                                ListEmptyComponent= {
                                    <Text style={[EstilosComuns.textoCentralizado, EstilosComuns.corVerde, styles.emptyResult]} >Nenhum resultado encontrado, informe os filtros para consultar!</Text>
                                }
                                renderItem = {clinica => {
                                    return (
                                        <BotaoOpacity>
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
                            />                   */}

                <Fab
                    containerStyle={{ }}
                    style={{ backgroundColor: "#04B486" }}
                    position="bottomRight"
                    onPress={() => this.props.navigation.navigate(TELA_BUSCA_CLINICA.name) }>
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
    }
})

const mapStateToProps = state => {
    medico: state.cadastroMedicosReducer.medico
}

//export default connect(mapStateToProps, {desvincularClinica})(ClinicasMedico);
