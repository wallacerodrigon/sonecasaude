import { Body, Container, List, ListItem, Icon } from 'native-base';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { buscarDetalhesMedicamentos, onChangeField, filtrarDetalhesMedicamentos } from "../../actions/medicamentos/MedicamentosAction";
import EstilosComuns, { FUNDO_ESCURO, BRANCO } from '../../assets/estilos/estilos';
import { TELA_DETALHE_MEDICAMENTO, TELA_PERIODICIDADE } from '../../constants/AppScreenData';
import Loading from '../../components/comuns/Loading';
import Botao from '../../components/botao/Botao';
import { InputTexto } from "../../components/input/InputTexto";
 
class DetalheMedicamentos extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        title: TELA_DETALHE_MEDICAMENTO.title,
    });      

    constructor(props){
        super(props);
    }   

    componentDidMount(){
        const {state} = this.props.navigation;
        if (state && state.params && state.params.medicamento){
          this.medicamento = state.params.medicamento;
          this.props.onChangeField('nomeDetalhe', '');
          this.props.buscarDetalhesMedicamentos(this.medicamento.idMedicamento);
        }
        this.medicamentosFiltrados = [];
    }
    
    gotoPeriodicidade(detalheRemedio){
       this.props.navigation.navigate(TELA_PERIODICIDADE.name, {medicamento: this.medicamento, detalheRemedio: detalheRemedio})
    }

    renderRemedios(){
        
        if (this.props.listaDetalhesMedicamentos == null || this.props.listaDetalhesMedicamentos.length === 0){
            return (
                    <View style={{padding: 10}}>
                        <Text style={[EstilosComuns.corVerde]}>Nenhum detalhe foi encontrado para este medicamento!</Text>
                    </View>
                )
        }
        return this.props.listaDetalhesMedicamentos.map(detalheRemedio => {
            return (
                <ListItem thumbnail selected button style={styles.containerRemedioResultado} onPress={() => this.gotoPeriodicidade(detalheRemedio)  } >
                    <Body>
                        <Text style={[styles.dadosMedicamento, EstilosComuns.negrito]} >{detalheRemedio.descApresentacao}</Text>
                        <Text note>{detalheRemedio.nomeLaboratorio}</Text>
                        <Text note>{detalheRemedio.descTarja}</Text>
                    </Body>
                </ListItem> 
            )
        })
    }

    onFilter(value){
        this.props.onChangeField('nomeDetalhe', value);
        //this.props.filtrarDetalhesMedicamentos(value);
    }

    render() {
        let {medicamento} = this.props.navigation.state.params;

        return (
            <View style={EstilosComuns.container}>     
                <View style={[EstilosComuns.card, {flexDirection: 'row', padding: 5}]}>
                    <Text style={EstilosComuns.negrito}>{medicamento.nomeMedicamento}</Text>
                </View>  

                
                {/* HABILITAR em um outro momento
                <View style={[EstilosComuns.card, {flexDirection: 'row', padding: 5}]}>
                    <View style={{flex: 9}}>
                        <InputTexto placeholder="Digite para filtrar" maxLength={40}
                            onChangeInput={value => this.onFilter(value)}
                            value={this.props.nomeDetalhe}
                            autoCapitalize="none"
                        /> 
                    </View>
                    <View style={{flex: 1}}>
                        <Icon name="search" color={BRANCO} size={25}/>
                    </View>

                </View> */}

                <Loading bolAtivo={this.props.loadingDetalhes}/>

                <Container style={styles.containerResultado}>
                    <List>
                        <ScrollView>
                            {this.renderRemedios()}
                        </ScrollView>
                    </List>

                </Container>

                <View style={styles.containerRodape}>
                    <Text style={[EstilosComuns.corVerde, EstilosComuns.textoCentralizado]}>
                        Clique sobre o remédio para cadastrar sua prescrição
                    </Text>
                    <Botao tituloBotao="Pular"
                                        onClick={() => this.gotoPeriodicidade(null) }/>  
                </View>

            </View>
        )
    };
}


const styles= StyleSheet.create({

    containerBusca: {
        flex: 1,
        padding: 5,
        flexDirection:'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: FUNDO_ESCURO
    },

    containerResultado: {
        flex: 8,
        fontSize: 20,
        fontWeight: 'bold',
    },  

    containerRemedioResultado: {
        borderBottomColor: FUNDO_ESCURO,
        borderBottomWidth:1,
    },
    
    containerRodape: {
        flex: 1,
        padding: 8
    },

    dadosMedicamento: {
        fontSize: 14,
        fontWeight: 'bold',
    },    

    dadosMedicamentoItalico:{
        fontStyle: 'italic'
    }
})

const mapStateToProps = state => ({
    listaDetalhesMedicamentos: state.medicamentoReducer.listaDetalhesMedicamentosFiltrados,
    loadingDetalhes: state.medicamentoReducer.loadingDetalhes,
    nomeDetalhe: state.medicamentoReducer.nomeDetalhe
})

export default connect(mapStateToProps, {buscarDetalhesMedicamentos, onChangeField, filtrarDetalhesMedicamentos})(DetalheMedicamentos);