import React from 'react';
import {Button, View, Text, TouchableOpacity} from 'react-native';
import { Icon } from 'native-base';
import {withNavigation} from 'react-navigation';

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
        <TouchableOpacity style={this.props.style}
          onPress={()=> {this.props.onClick() }} 
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

export class BotaoFechar extends React.Component  {

  constructor(props){
    super(props); 
  }


  render() {
      return (
          <BotaoOpacity onClick={() => this.props.onClose()} style={{padding: 5}}> 
              <Icon name="close" size={20}/>
          </BotaoOpacity>                 
      )
  };
}


