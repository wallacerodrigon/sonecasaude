import React, { Component } from "react";
import HomeScreen from "./Home";

//import Cadastro from "../cadastro/index";
import SideBarMenu from "../../components/menu/SideBarMenu";
import { DrawerNavigator, createStackNavigator} from "react-navigation";
import { DRAWER, TELA_COMANDO_VOZ } from "../../constants/AppScreenData";
import { BotaoOpacity } from "../../components/botao/Botao";
import { Icon } from "native-base";
import { Text } from "react-native";
import EstilosComuns, { BRANCO } from "../../assets/estilos/estilos";
import LoginComponent from "../login/LoginComponent";
import ListaMedicos from "../medicos/ListaMedicos";
import { PADRAO_NAVEGACAO } from "../../stacks/StackConfigs";
import CadastroMedicamento from "../medicamentos/CadastroMedicamento";
import ControleMedicacao from "../medicacao/ControleMedicacao";

const HomeScreenNavigator = createStackNavigator(
  {
    home: HomeScreen,
    medicamentos: CadastroMedicamento,
    medicos: ListaMedicos,
    controleMedicacao: ControleMedicacao
  },

);
export default HomeScreenNavigator;