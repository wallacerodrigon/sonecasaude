import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import {TELA_DESAFIOS, TELA_FINALIZA_CADASTRO, TELA_SHARE_INFO} from '../../constants/AppScreenData'

export default class Desafios extends React.Component {
    static navigationOptions = {
        title: TELA_DESAFIOS.title
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>Desafios</Text>
                <Botao tituloBotao='Próximo' onClick={() =>  this.props.navigation.navigate(TELA_SHARE_INFO.name)}/>                
                <Botao tituloBotao='Pular desafio' onClick={() =>  this.props.navigation.navigate(TELA_FINALIZA_CADASTRO.name)}/>                                
            </View>
        )
    };
}

