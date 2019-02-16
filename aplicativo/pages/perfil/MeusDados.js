import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class MeusDados extends React.Component {
    static navigationOptions = {
        title: 'MeusDados',
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>MeusDados</Text>
            </View>
        )
    };
}

