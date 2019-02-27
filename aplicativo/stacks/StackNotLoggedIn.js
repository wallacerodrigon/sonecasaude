import LoginComponent from "../pages/login/LoginComponent";
import EsqueciSenha from "../pages/esqueci-senha/EsqueciSenha";
import {createStackNavigator} from 'react-navigation';
import { TELA_PADRAO } from "../constants/AppScreenData";
import EstilosComuns from "../assets/estilos/estilos";
import DadosPessoais from "../pages/cadastro/DadosPessoais";
import Endereco from "../pages/cadastro/Endereco";
import PADRAO_NAVEGACAO from "./StackConfigs";

const StackNotLoggedIn = createStackNavigator(
    {
        login: LoginComponent,
        esqueciSenha: EsqueciSenha,
    },
    {
        defaultNavigationOptions: PADRAO_NAVEGACAO
    }    
);

export default StackNotLoggedIn;