import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class Medicacao extends React.Component {
    static navigationOptions = {
        title: 'Medicação',
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>Medicação</Text>
            </View>
        )
    };
}

