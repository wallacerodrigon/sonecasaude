import React from 'react';
import {Button, View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class Botao extends React.Component {

    constructor(props){
        super(props); 
    }

    render() {
        return (
          <Button title={this.props.tituloBotao} onPress={()=> this.props.onClick()} color={this.props.disabled ? "#fff" :  "#04B486"} 
            accessibilityLabel={this.props.tituloBotao}
            disabled={this.props.disabled}
          >
            {/* <View>
              <Text style={[EstilosComuns.fonteBotao]}>{this.props.loading ? '↻' : this.props.tituloBotao}</Text>

            </View> */}
          </Button>            
        )
    };
}


