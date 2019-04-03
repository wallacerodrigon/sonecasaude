import React from 'react';
import {View, Text, TouchableHighlight, ScrollView, StyleSheet} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { TELA_LISTA_MEDICOS, TELA_ADD_MEDICOS, TELA_LISTA_CLINICAS, TELA_ADD_CLINICA, TELA_BUSCA_CLINICA } from '../../constants/AppScreenData';
import { List, ListItem, Left, Thumbnail, Body, Button, Right, Container, Fab, Icon } from 'native-base';
import Botao from '../../components/botao/Botao';

export default class ClinicasMedico extends React.Component {
    static navigationOptions = {
        title: TELA_LISTA_CLINICAS.title
        /* No more header config here! */
      };

      constructor(props){
        super(props);

        this.state = {nome: '', especialidade: '', email: ''}
    }      

    render() {
        return (
            <View style={[styles.tabDadosMedico, EstilosComuns.backgroundPadrao]}>
                <Text style={EstilosComuns.tituloJanelas}>Clínicas do médico</Text>
                <View style={styles.tabDadosMedicoCadastro}>
                </View>

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