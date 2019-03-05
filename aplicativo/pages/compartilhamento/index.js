import { createStackNavigator } from 'react-navigation';
import { PADRAO_NAVEGACAO } from "../../navigators/NavigatorConfigs";
import CadastroCompartilhamento from '../compartilhamento/CadastroCompartilhamento';
import ListaCompartilhamento from './ListaCompartilhamento';


const CompartilhamentoNavigator = createStackNavigator(
    {
        listaCompartilhamento: ListaCompartilhamento,
        cadastroCompartilhamento: CadastroCompartilhamento,
        cadastroCompartilhamentoFromList: CadastroCompartilhamento,
    },
    {
        defaultNavigationOptions: PADRAO_NAVEGACAO,
        
    }    
);

export default CompartilhamentoNavigator;