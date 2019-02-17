import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class Botao extends React.Component {

    constructor(props){
        super(props); 
    }

    render() {
        return (
          <TouchableOpacity onPress={()=> this.props.onClick()}  style={[EstilosComuns.botao, this.props.styles]}>
            <View>
              <Text style={[EstilosComuns.fonteBotao]}>{this.props.loading ? '↻' : this.props.tituloBotao}</Text>

            </View>
          </TouchableOpacity>            
        )
    };
}


