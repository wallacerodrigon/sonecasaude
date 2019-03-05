import { createStackNavigator } from 'react-navigation';
import { PADRAO_NAVEGACAO } from "../../navigators/NavigatorConfigs";
import CadastroMedicamento from './CadastroMedicamento';
import PrescricaoMedicamento from './PrescricaoMedicamento';
import { TELA_MEDICAMENTOS } from '../../constants/AppScreenData';
import EstilosComuns from '../../assets/estilos/estilos';


const MedicamentosNavigator = createStackNavigator(
    {
        cadastroMedicamento: CadastroMedicamento,
        prescricaoMedicamento: PrescricaoMedicamento
    },
    {
        defaultNavigationOptions: {
            title: TELA_MEDICAMENTOS.title,
            headerStyle: [ EstilosComuns.backgroundToolbar],
            cardShadowEnabled: "true",
            headerTitleStyle: [EstilosComuns.corBranca],  
        }
    }    
);

export default MedicamentosNavigator;