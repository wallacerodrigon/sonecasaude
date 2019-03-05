import { createBottomTabNavigator } from 'react-navigation';
import { PADRAO_NAVEGACAO } from "../../navigators/NavigatorConfigs";
import CadastroCompartilhamento from '../compartilhamento/CadastroCompartilhamento';
import ControleMedicacao from "./ControleMedicacao";
import EstatisticaHistoricoUso from './EstatisticaHistoricoUso';
import { TELA_MEDICACOES } from '../../constants/AppScreenData';
import EstilosComuns from '../../assets/estilos/estilos';


const MedicacoesNavigator = createBottomTabNavigator(
    {
        controleMedicacao: ControleMedicacao,
        estatisticaMedicacao: EstatisticaHistoricoUso,
        compartilhamento: CadastroCompartilhamento
    },
    {
        defaultNavigationOptions: {
            title: TELA_MEDICACOES.title,
            headerStyle: [ EstilosComuns.backgroundToolbar],
            cardShadowEnabled: "true",
            headerTitleStyle: [EstilosComuns.corBranca],  
        }
    }  
);

export default MedicacoesNavigator;