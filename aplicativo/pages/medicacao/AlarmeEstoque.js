import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class AlarmeEstoque extends React.Component {
    static navigationOptions = {
        title: 'AlarmeEstoque',
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>AlarmeEstoque</Text>
            </View>
        )
    };
}

