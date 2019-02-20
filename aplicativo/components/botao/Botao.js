import React from 'react';
import {Button, View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class Botao extends React.Component {

    constructor(props){
        super(props); 
    }

    render() {
        return (
          <Button title={this.props.tituloBotao} onPress={()=> this.props.onClick()} color="#04B486"
            accessibilityLabel={this.props.tituloBotao}
          >
            {/* <View>
              <Text style={[EstilosComuns.fonteBotao]}>{this.props.loading ? '↻' : this.props.tituloBotao}</Text>

            </View> */}
          </Button>            
        )
    };
}


