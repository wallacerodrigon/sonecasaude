import { Icon, Container, List, ListItem, Left, Thumbnail, Body, Right } from 'native-base';
import React from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import EstilosComuns, { BRANCO, FUNDO_ESCURO } from '../../assets/estilos/estilos';
import { BotaoFecharHeader, BotaoOpacity } from '../../components/botao/Botao';
import { InputTexto } from "../../components/input/InputTexto";
import { TELA_PERIODICIDADE, TELA_LISTA_MEDICAMENTOS, TELA_DETALHE_MEDICAMENTO } from '../../constants/AppScreenData';
 
const imgComparacao = require('../../assets/img/losartana.jpeg');

export default class DetalheMedicamentos extends React.Component {

      static navigationOptions = ({ navigation }) => ({
        title: TELA_DETALHE_MEDICAMENTO.title,
        headerLeft: (
            <BotaoFecharHeader navigation={navigation}/>
          )          
    });      

    constructor(props){
        super(props);

        
    }   
    
    componentWillMount(){
       // const {state} = this.props.navigation.state;
       // console.log('did mount', state.params);
        // if (state && state.params && state.params.medicamento){
        //   this.medicamento = state.params.medicamento;
        // }
        this.medicamento = {
            nomeMedicamento: 'AAS',
            principioAtivo: 'Ácido Acetil Salicílico'
        }
    }
    
    getResultadoFiltro(){
        return [
            {id: 1, tarja: 'Similar', laboratorio: 'SANOFI-AVENTIS FARMACÊUTICA LTDA', apresentacao: '100 MG COM CT FR PLAS OPC X 120'},
            {id: 1, tarja: 'Similar', laboratorio: 'SANOFI-AVENTIS FARMACÊUTICA LTDA', apresentacao: '100 MG COM CT BL AL PLAS INC X 200 (EMB MULT)'},
            {id: 1, tarja: 'Similar', laboratorio: 'SANOFI-AVENTIS FARMACÊUTICA LTDA', apresentacao: '100 MG COM CT BL AL PLAS INC X 30'},
        ]
    }

    gotoPeriodicidade(medicamento){
       this.props.navigation.navigate(TELA_PERIODICIDADE.name, {medicamento: this.medicamento})
    }

    renderRemedios(){
        let lista = this.getResultadoFiltro();

        return lista.map(remedio => {
            return (
                <ListItem thumbnail selected button style={styles.containerRemedioResultado} onPress={() => this.gotoPeriodicidade(remedio)  } >
                    <Body>
                        <Text style={[styles.dadosMedicamento, EstilosComuns.negrito]} >{remedio.apresentacao}</Text>
                        <Text note>{remedio.laboratorio}</Text>
                        <Text note>{remedio.tarja}</Text>
                    </Body>
                </ListItem> 
            )
        })
    }

    render() {
        return (
            <View style={EstilosComuns.container}>     
                <View style={[EstilosComuns.card, {flexDirection: 'row', padding: 5}]}>
                    <View style={{flex: 5, paddingLeft: 5}}>
                        <Text style={EstilosComuns.negrito}>{this.medicamento.nomeMedicamento}</Text>
                        <Text note numberOfLines={1} >{this.medicamento.principioAtivo}</Text>
                    </View>
                </View>                       
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
        padding: 5
    },

    dadosMedicamento: {
        fontSize: 14,
        fontWeight: 'bold',
    },    

    dadosMedicamentoItalico:{
        fontStyle: 'italic'
    }
})
