import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class CompartilhaInformacoes extends React.Component {
    static navigationOptions = {
        title: 'CompartilhaInformacoes',
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

