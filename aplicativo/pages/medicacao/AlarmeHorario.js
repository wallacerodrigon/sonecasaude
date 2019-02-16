import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class AlarmeHorario extends React.Component {
    static navigationOptions = {
        title: 'AlarmeHorario',
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>AlarmeHorario</Text>
            </View>
        )
    };
}

