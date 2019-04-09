import { Body, Container, Icon, Left, List, ListItem, Thumbnail } from 'native-base';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";
import { buscarMedicamentos, onChangeField } from "../../actions/medicamentos/MedicamentosAction";
import EstilosComuns, { BRANCO, FUNDO_ESCURO } from '../../assets/estilos/estilos';
import { BotaoFecharHeader } from '../../components/botao/Botao';
import { InputTexto } from "../../components/input/InputTexto";
import { MensagemInformativa } from "../../components/mensagens/Mensagens";
import { TELA_DETALHE_MEDICAMENTO, TELA_LISTA_MEDICAMENTOS } from '../../constants/AppScreenData';
import Loading from "../../components/comuns/Loading";

const imgComparacao = require('../../assets/img/losartana.jpeg');

class ListaMedicamentos extends React.Component {

      static navigationOptions = ({ navigation }) => ({
        title: TELA_LISTA_MEDICAMENTOS.title,
        headerLeft: (
            <BotaoFecharHeader navigation={navigation}/>
          )          
    });      

    constructor(props){
        super(props);
    }    
    
    gotoPeriodicidade(remedio){
       this.props.navigation.navigate(TELA_DETALHE_MEDICAMENTO.name, {medicamento: remedio})
    }

    buscarMedicamento(){
        if (this.props.nomeMedicamento.trim().length == 0){
            MensagemInformativa('Informe o nome do medicamento para pesquisar!');
            return false;
        }
        this.props.buscarMedicamentos(this.props.nomeMedicamento);
    }

    renderRemedios(){

        if (this.props.listaMedicamentos.length == 0){
            return (
                <View>
                    <Text style={[{padding: 20}, EstilosComuns.corVerde, EstilosComuns.textoCentralizado]}>
                        Nenhum medicamento foi listado
                    </Text>                    
                </View>
            )
        }

        return this.props.listaMedicamentos.map(remedio => {
            return (
                <ListItem thumbnail selected button style={styles.containerRemedioResultado} onPress={() => this.gotoPeriodicidade(remedio)  } >
                    {/* <Left>
                        <Thumbnail circular source={imgComparacao} />
                    </Left> */}
                    <Body>
                        <Text style={[styles.dadosMedicamento, EstilosComuns.negrito]} >{remedio.nomeMedicamento}</Text>
                        <Text note>{remedio.nomePrincipioAtivo}</Text>
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
                            onChangeInput={value => this.props.onChangeField('nomeMedicamento', value)}
                            autoCapitalize="none"
                        />                    
                    </View>
                    <View style={{flex: 1}}>
                        <Icon name="search" color={BRANCO} size={25} onPress={() => this.buscarMedicamento()} />
                    </View>
                </View>

                <Loading bolAtivo={this.props.loadingBusca}/>

                <Container style={styles.containerResultado}>
                    <List>
                        <ScrollView>
                            {this.renderRemedios()}
                        </ScrollView>
                    </List>

                </Container>

                <View style={styles.containerRodape}>
                    <Text style={[EstilosComuns.corVerde, EstilosComuns.textoCentralizado]}>
                        Clique sobre o remédio para ver as dosagens e demais detalhes sobre o medicamento selecionado
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

const mapStateToProps = state => ({
    nomeMedicamento: state.medicamentoReducer.nomeMedicamento,
    mensagemFalha: state.medicamentoReducer.mensagemFalha,
    loadingBusca: state.medicamentoReducer.loadingBusca,
    listaMedicamentos: state.medicamentoReducer.listaMedicamentos
})

export default connect(mapStateToProps, {onChangeField, buscarMedicamentos})(ListaMedicamentos);