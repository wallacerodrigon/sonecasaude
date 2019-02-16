import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class FinalizaCadastro extends React.Component {
    static navigationOptions = {
        title: 'FinalizaCadastro',
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>FinalizaCadastro</Text>
                <Botao tituloBotao='Finalizar' onClick={() =>  this.props.navigation.navigate(TELA_.name)}/>                
            </View>
        )
    };
}

