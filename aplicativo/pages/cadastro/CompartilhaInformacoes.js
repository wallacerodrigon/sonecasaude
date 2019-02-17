import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { TELA_FINALIZA_CADASTRO, TELA_SHARE_INFO } from '../../constants/AppScreenData';
import Botao from '../../components/botao/Botao';

export default class CompartilhaInformacoes extends React.Component {
    static navigationOptions = {
        title: TELA_SHARE_INFO.title,
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>CompartilhaInformacoes</Text>
            </View>
        )
    };
}

