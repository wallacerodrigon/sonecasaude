import React, {Component} from 'react';
import {Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class Titulo extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Text style={EstilosComuns.tituloJanelas}>{this.props.tituloJanela}</Text>
        )
    }
};


