import React from 'react';
import { BotaoOpacity } from './Botao';
import { BRANCO } from '../../assets/estilos/estilos';
import { Icon } from 'native-base';


export class BotaoMenu extends React.Component  {

    constructor(props){
      super(props); 
  }
  
  simulaClick(){}
  
  render() {
      console.log(this.props);
      return (
        <BotaoOpacity onClick={() => this.props.navigation.navigate(DRAWER.name)}> 
            <Icon name="menu" size={30} color={BRANCO}/>
        </BotaoOpacity>       
      )
  };
}
