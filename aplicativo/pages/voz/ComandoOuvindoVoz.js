import React from 'react';
import {View, Image} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

const imgMicrophone = require('../../assets/img/microphone_green.png');
const imgOuvindo = require('../../assets/img/ouvindo.png');

export default class ComandoOuvindoVoz extends React.Component {
    static navigationOptions = {
        title: 'ComandoOuvindoVoz',
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <View style={EstilosComuns.bodyTitulo}>
                    <Image source={imgMicrophone}/>
                </View>

                <View style={EstilosComuns.bodyMain}>
                    <Image source={imgOuvindo} width="100%"/>
                </View>
            </View>
        )
    };
}

