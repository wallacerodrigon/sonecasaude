import React, { Component } from "react";
import HomeScreen from "./Home";

//import Cadastro from "../cadastro/index";
import SideBarMenu from "../../components/menu/SideBarMenu";
import { DrawerNavigator, createStackNavigator} from "react-navigation";
import { DRAWER } from "../../constants/AppScreenData";
import { BotaoOpacity } from "../../components/botao/Botao";
import { Icon } from "native-base";
import { BRANCO } from "../../assets/estilos/estilos";
import LoginComponent from "../login/LoginComponent";

const HomeScreenRouter = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    navigationOptions:{
        headerLeft: (
            <BotaoOpacity onClick={() => navigation.navigate(DRAWER.name)}> 
                <Icon name="menu" size={30} color={BRANCO}/>
            </BotaoOpacity>

          ),

    }
  }
);
export default HomeScreenRouter;