import { Icon, Container, List, ListItem, Left, Thumbnail, Body, Right } from 'native-base';
import React from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import EstilosComuns, { BRANCO, FUNDO_ESCURO } from '../../assets/estilos/estilos';
import { BotaoFecharHeader, BotaoOpacity } from '../../components/botao/Botao';
import { InputTexto } from "../../components/input/InputTexto";
import { TELA_PERIODICIDADE, TELA_LISTA_MEDICAMENTOS } from '../../constants/AppScreenData';
 
const imgComparacao = require('../../assets/img/losartana.jpeg');

export default class ListaMedicamentos extends React.Component {

      static navigationOptions = ({ navigation }) => ({
        title: TELA_LISTA_MEDICAMENTOS.title,
        headerLeft: (
            <BotaoFecharHeader navigation={navigation}/>
          )          
    });      

    constructor(props){
        super(props);
    }    
    
    getResultadoFiltro(){
        return [
            {id: 1, nomeMedicamento: 'Xarope 1', laboratorio: 'laboratorio 1', detalhes: 'comprimido', principioAtivo: "ácido acetil salicílico"},
            {id: 2, nomeMedicamento: 'Xarope 2', laboratorio: 'laboratorio 1', detalhes: 'comprimido', principioAtivo: "ácido acetil salicílico"},
            {id: 3, nomeMedicamento: 'Xarope 3', laboratorio: 'laboratorio 1', detalhes: 'comprimido', principioAtivo: "ácido acetil salicílico"},
            {id: 4, nomeMedicamento: 'Xarope 4', laboratorio: 'laboratorio 1', detalhes: 'comprimido', principioAtivo: "ácido acetil salicílico"}
        ]
    }

    gotoPeriodicidade(medicamento){
       this.props.navigation.navigate(TELA_PERIODICIDADE.name, {medicamento: medicamento})
    }

    renderRemedios(){
        let lista = this.getResultadoFiltro();

        return lista.map(remedio => {
            return (
                <ListItem thumbnail selected button style={styles.containerRemedioResultado} onPress={() => this.gotoPeriodicidade(remedio)  } >
                    <Left>
                        <Thumbnail circular source={imgComparacao} />
                    </Left>
                    <Body>
                        <Text style={[styles.dadosMedicamento, EstilosComuns.negrito]} >{remedio.nomeMedicamento}</Text>
                        <Text note>{remedio.principioAtivo}</Text>
                        <Text note>{remedio.laboratorio}</Text>
                    </Body>
                </ListItem> 
            )
        })
    }

    render() {
        return (
            <View style={EstilosComuns.container}>                
                <View style={styles.containerBusca}>
                    <View style={{flex: 9}}>
                        <InputTexto placeholder="Pesquise por um remédio" maxLength={40}
                            onChangeInput={this.tratarFiltro}
                            autoCapitalize="none"
                        />                    
                    </View>
                    <View style={{flex: 1}}>
                        <Icon name="search" color={BRANCO} size={25} />
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
