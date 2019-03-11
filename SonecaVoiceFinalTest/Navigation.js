import {createAppContainer, createStackNavigator} from 'react-navigation';
import Home from './pages/Home';
import ComandosBasicos from './pages/ComandosBasicos';
import Medicos from './pages/Medicos';
import Medicacoes from './pages/Medicacoes';
import AlertaRemedio from './pages/AlertaRemedio';
import AlertaEstoque from './pages/AlertaEstoque';
import Endereco from './pages/Endereco';
import MeusDados from './pages/MeusDados';

const NavigationStack = createStackNavigator(
    {
      home: Home,
      comandosBasicos: ComandosBasicos,
      alertaEstoque: AlertaEstoque,
      alertaRemedio: AlertaRemedio,
      medicos: Medicos,
      medicacoes: Medicacoes,
      endereco: Endereco,
      meusDados: MeusDados
    }
   
  )
  
  export default createAppContainer(NavigationStack);
  