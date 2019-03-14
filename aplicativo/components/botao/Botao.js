import { Icon } from 'native-base';
import React from 'react';
import { Button, TouchableOpacity, View, Text } from 'react-native';
import { BRANCO, FUNDO, VERDE, DESMARCADO } from '../../assets/estilos/estilos';
import { TELA_COMANDO_VOZ } from '../../constants/AppScreenData';

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

export const BotaoFecharHeader = (props) => {
      return (
          <Icon name="close" style={{color: BRANCO, paddingVertical: 10, paddingHorizontal: 10}} 
                  onPress={() => props.navigation.dismiss() }/>
      )
};

export const BotaoMicrofoneHeader = (props) => {
  return (
      <Icon name="mic" style={{color: BRANCO, paddingVertical: 10, paddingHorizontal: 10}} 
              onPress={() => props.navigation.navigate(TELA_COMANDO_VOZ.name) }/>
  )
};

export const BotaoMenuHamburguer = (props) => {
  return (
      <Icon name="menu" style={{color: BRANCO, paddingVertical: 10, paddingHorizontal: 10}} 
              onPress={() => props.navigation.toggleDrawer() }/>
  )
};

export const BotaoExcluir = (props) => {
  return (
      <Icon name="trash" style={{color: DESMARCADO}} 
              onPress={() => props.onPress() }/>
  )
};

export const BotaoConfiguracoes = (props) => {
  return (
      <Icon name="options" style={{color: BRANCO, paddingVertical: 10, paddingHorizontal: 10}} 
              onPress={() => props.onPress() }/>
  )
};