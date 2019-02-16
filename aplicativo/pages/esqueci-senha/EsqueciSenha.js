import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import Botao from '../../components/botao/Botao';
import { TELA_ESQUECI_SENHA, TELA_LOGIN } from '../../constants/AppScreenData';

export default class EsqueciSenha extends React.Component {
    static navigationOptions = {
        title: TELA_ESQUECI_SENHA.title,
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>EsqueciSenha</Text>
                <Botao tituloBotao='Enviar' onClick={() =>  this.props.navigation.navigate(TELA_LOGIN.name)}/>
            </View>
        )
    };
}

