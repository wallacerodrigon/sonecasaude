import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class CommandLink extends React.Component {

    constructor(props){
        super(props); 
    }

    render() {
        return (
          <TouchableOpacity onPress={()=> this.props.onClick()}  style={[EstilosComuns.centralizar, this.props.styles]}>
            <View>
              <Text style={EstilosComuns.fonteBotao}>{this.props.tituloBotao}</Text>
            </View>
          </TouchableOpacity>            
        )
    };
}


