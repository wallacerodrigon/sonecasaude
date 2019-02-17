import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { TELA_LOGIN, TELA_FINALIZA_CADASTRO } from '../../constants/AppScreenData';
import Botao from '../../components/botao/Botao';

export default class FinalizaCadastro extends React.Component {
    static navigationOptions = {
        title: TELA_FINALIZA_CADASTRO.title,
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>FinalizaCadastro</Text>
                <Botao tituloBotao='Finalizar' onClick={() =>  this.props.navigation.navigate(TELA_LOGIN.name)}/>                
            </View>
        )
    };
}

