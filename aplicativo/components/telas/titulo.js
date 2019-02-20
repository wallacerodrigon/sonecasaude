import React, {Component} from 'react';
import {Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

const Titulo = props => (
    <View>
       <Text style={EstilosComuns.tituloJanelas}>{props.tituloJanela}</Text>
    </View>
);

export default Titulo;
