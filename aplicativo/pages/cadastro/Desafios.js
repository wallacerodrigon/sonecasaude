import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import {TELA_DESAFIOS, TELA_ADD_SHARE_INFO} from '../../constants/AppScreenData'
import Botao from '../../components/botao/Botao';
import { Titulo } from '../../components/telas/titulo';

export default class Desafios extends React.Component {
    static navigationOptions = {
        title: TELA_DESAFIOS.title
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <View style={EstilosComuns.bodyTitulo}>
                    <Text style={EstilosComuns.tituloJanelas}>Desafios de Saúde</Text>
                </View>

                {/* aqui tem que ser um flatlist */}
                 <View style={EstilosComuns.bodyMain}>
                
                    <Text>desafio 1</Text>
                    <Text>desafio 1</Text>
                    <Text>desafio 1</Text>
                    <Text>desafio 1</Text>
                </View>

                <View style={EstilosComuns.rodape}>
                    <Botao tituloBotao='Próximo' onClick={() =>  this.props.navigation.navigate(TELA_ADD_SHARE_INFO.name)}/>                
                </View>
            </View>
        )
    };
}
