import { Icon } from 'native-base';
import React from 'react';
import { ActivityIndicator, Button, TouchableOpacity, View } from 'react-native';
import { BRANCO, DESMARCADO, VERDE } from '../../assets/estilos/estilos';
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
          // <Icon name="close" style={{color: BRANCO, paddingVertical: 10, paddingHorizontal: 10}} 
          //         onPress={() => props.navigation.dismiss() }/>
          <BotaoConfigIcon onPress={() => props.navigation.dismiss() } icone="close"/>                    
      )
};

export const BotaoMicrofoneHeader = (props) => {
  return (
    <BotaoConfigIcon onPress={() => props.navigation.navigate(TELA_COMANDO_VOZ.name) } icone="mic"/> 
      // <Icon name="mic" style={{color: BRANCO, paddingVertical: 10, paddingHorizontal: 10}} 
      //         onPress={() => props.navigation.navigate(TELA_COMANDO_VOZ.name) }/>
  )
};

export const BotaoMenuHamburguer = (props) => {
  return (
    <BotaoConfigIcon onPress={() => props.navigation.toggleDrawer() } icone="menu"/>        
      // <Icon name="menu" style={{color: BRANCO, paddingVertical: 10, paddingHorizontal: 10}} 
      //         onPress={() => props.navigation.toggleDrawer() }/>
  )
};

export const BotaoExcluir = (props) => {
  return (
    <BotaoConfigIcon onPress={props.onPress} icone="trash" style={{color: DESMARCADO}} />

      // <Icon name="trash" style={{color: DESMARCADO}} 
      //         onPress={() => props.onPress() }/>
  )
};

export const BotaoConfiguracoes = (props) => {
  return (
    <BotaoConfigIcon onPress={props.onPress} icone="options"/>    
  )
};


export const BotaoLoading = (props) => {
    if (props.carregaLoading){
      return <ActivityIndicator size="small" color={VERDE}/>
    } else {
      return <Botao tituloBotao={props.tituloBotao}  onClick={()=>props.onClick()}/>
    }    
  
}

export const BotaoConfigIcon = (props) => {
  return (
    <Icon name={props.icone} style={[{color: BRANCO, paddingVertical: 10, paddingHorizontal: 10}, props.style]} 
            onPress={() => props.onPress() }/>
  )
}