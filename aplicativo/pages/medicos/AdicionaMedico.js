import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { TELA_ADD_MEDICOS, TELA_LISTA_MEDICOS } from '../../constants/AppScreenData';
import { InputTexto } from '../../components/input/InputTexto';
import Botao from '../../components/botao/Botao';
import { Container, Tabs, Tab } from 'native-base';
import ListaClinicas from './ListaClinicas';

export default class AdicionaMedico extends React.Component {
    static navigationOptions = {
        title: TELA_ADD_MEDICOS.title,
        /* No more header config here! */
      };

    constructor(props){
        super(props);

        this.state = {nome: '', especialidade: '', email: ''}
    }

    onChangeInput(text){

    }

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text style={EstilosComuns.tituloJanelas}>Adicionar Médico</Text>
            
                <View style={EstilosComuns.bodyMain}>
                    <View style={styles.containerBusca}>
                        {/* 7 digitos + uf */}
                        <InputTexto placeholder="Número do CRM" maxLength={7}
                            keyboardType={InputTexto.KEYBOARD_NUMBER}
                            onChangeInput={value => this.onChangeInput(value)}
                            />
                        <Botao tituloBotao="Pesquisar"/>
                    </View>

                    <Container style={[styles.containerTabsMedico, EstilosComuns.backgroundPadrao]}>
                        <Tabs>
                            <Tab heading="Dados do médico">
                                <DadosMedico navigation={this.props.navigation}/>
                            </Tab>
                            <Tab heading="Clínicas">
                                <ListaClinicas navigation={this.props.navigation}/>
                            </Tab>
                        </Tabs>                    
                    </Container>                    

                </View>
            </View>
        )
    };
}


export const DadosMedico = ({navigation}) => (
    <View style={[styles.tabDadosMedico, EstilosComuns.backgroundPadrao]}>
        <View style={styles.tabDadosMedicoCadastro}>
            <InputTexto placeholder="Nome" maxLength={40}
                onChangeInput={value => this.onChangeInput(value)}
                />
            <InputTexto placeholder="Especialidade" maxLength={40}
                onChangeInput={value => this.onChangeInput(value)}
                />
            <InputTexto placeholder="E-mail" maxLength={50}
                keyboardType={InputTexto.KEYBOARD_EMAIL}
                onChangeInput={value => this.onChangeInput(value)}
                />
        
        </View>

        <View style={styles.tabDadosMedicoRodape}>
            <Botao tituloBotao='Adicionar' onClick={() =>  navigation.navigate(TELA_LISTA_MEDICOS.name)}/>    
        </View>
    </View>
);

const styles= StyleSheet.create({
    containerBusca: {
        flex: 2
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