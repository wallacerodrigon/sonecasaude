import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class AdicionaMedico extends React.Component {
    static navigationOptions = {
        title: 'AdicionaMedico',
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>AdicionaMedico</Text>
            </View>
        )
    };
}

