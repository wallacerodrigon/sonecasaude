import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import {TELA_ENDERECO, TELA_DESAFIOS} from '../../constants/AppScreenData';

export default class Endereco extends React.Component {
    static navigationOptions = {
        title: TELA_ENDERECO.title,
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>Endereços</Text>
                
                <Botao tituloBotao='Próximo' onClick={() =>  this.props.navigation.navigate(TELA_DESAFIOS.name)}/>    
            </View>
        )
    };
}

