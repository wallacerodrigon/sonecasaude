import { createStackNavigator } from 'react-navigation';
import AdicionaClinica from "../../pages/medicos/AdicionaClinica";
import AdicionaMedico from "../../pages/medicos/AdicionaMedico";
import ListaClinicas from "../../pages/medicos/ListaClinicas";
import ListaMedicos from "../../pages/medicos/ListaMedicos";
import { PADRAO_NAVEGACAO } from "../../navigators/NavigatorConfigs";
import { TELA_MEDICOS } from '../../constants/AppScreenData';
import EstilosComuns from '../../assets/estilos/estilos';


const MedicosNavigator = createStackNavigator(
    {
        listaMedicos: {screen: ListaMedicos},                                    
        adicionaMedicos: {screen: AdicionaMedico},

        adicionaClinica: {screen: AdicionaClinica},                                    
        listaClinicas: {screen: ListaClinicas},  
    },
    {
        defaultNavigationOptions: {
            title: TELA_MEDICOS.title,
            headerStyle: [ EstilosComuns.backgroundToolbar],
            cardShadowEnabled: "true",
            headerTitleStyle: [EstilosComuns.corBranca],  
        }
    }    
);

export default MedicosNavigator;