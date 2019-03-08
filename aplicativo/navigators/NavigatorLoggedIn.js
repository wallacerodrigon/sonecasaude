import React from "react";
import { createDrawerNavigator } from 'react-navigation';
import SideBarMenu from "../components/menu/SideBarMenu";
import Alarme from '../pages/alarme/Alarme';
import CompartilhamentoNavigator from "../pages/compartilhamento/";
import HomeScreenNavigator from "../pages/home";
import MedicacoesNavigator from "../pages/medicacao";
import CadastroMedicamento from "../pages/medicamentos/CadastroMedicamento";
import PrescricaoMedicamento from "../pages/medicamentos/PrescricaoMedicamento";
import AdicionaClinica from "../pages/medicos/AdicionaClinica";
import AdicionaMedico from "../pages/medicos/AdicionaMedico";
import ListaClinicas from "../pages/medicos/ListaClinicas";
import ListaMedicos from "../pages/medicos/ListaMedicos";
import MeusDados from "../pages/perfil/MeusDados";
import ComandoOuvindoVoz from "../pages/voz/ComandoOuvindoVoz";

import { Text, View } from "react-native";
import { Icon } from "native-base";


const NavigatorLoggedIn = createDrawerNavigator(
    {
        home: {screen: HomeScreenNavigator},
        
        // alarme: Alarme,
        // alarmeEstoque: Alarme,
        // comandoVoz: ComandoOuvindoVoz,                                    
        // listaCompartilhamento: CompartilhamentoNavigator,
        // meuPerfil: MeusDados, //tem que criar um navigator  

        // listaMedicos: {screen: ListaMedicos},                                    
        // adicionaMedicos: {screen: AdicionaMedico},

        // adicionaClinica: {screen: AdicionaClinica},                                    
        // listaClinicas: {screen: ListaClinicas},  

        // cadastroMedicamento: CadastroMedicamento,
        // prescricaoMedicamento: PrescricaoMedicamento,
        // medicacoes:MedicacoesNavigator                                         
    },
    {
        contentComponent      : props => 
             <SideBarMenu {...props}/>
        ,
        // defaultNavigationOptions: props => (
        //     {
        //         headerRight: ({navigation}) => (
        //             <View style={{paddingVertical: 10, paddingHorizontal: 10}}>
        //                  <Icon name="microphone" onPress={() => console.log(navigation, props) }/>
        //             </View>
        //           )
        //     }              
        // )                
    }    
);

export default NavigatorLoggedIn;