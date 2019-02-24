import React from 'react';
import {Button, View, Text, TouchableOpacity} from 'react-native';

export default class Botao extends React.Component {

    constructor(props){
        super(props); 
    }

    render() {
        return (
          <Button title={this.props.tituloBotao} onPress={()=> this.props.onClick()} 
            color={this.props.disabled ? "#fff" :  "#04B486"} 
            accessibilityLabel={this.props.tituloBotao}
            disabled={this.props.disabled}
          >
          </Button>            
        )
    };
}


export class BotaoOpacity extends React.Component  {

  constructor(props){
    super(props); 
}

render() {
    return (
      <TouchableOpacity 
        onPress={()=> {this.props.onClick() || null}} 
        color={this.props.disabled ? "#fff" :  "#04B486"} 
        accessibilityLabel={this.props.tituloBotao}
        disabled={this.props.disabled}
      >
        <View>
          {this.props.children}
        </View>
      </TouchableOpacity>            
    )
};
}
