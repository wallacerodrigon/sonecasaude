import React from 'react';
import {View, Button, Text} from 'react-native';
import EstilosComuns, { VERDE, BRANCO } from '../../assets/estilos/estilos';
import { Icon, Fab, Tabs, Tab, Container } from 'native-base';
import Medicacao from './Medicacao';
import { TELA_CONTROLE_MEDICACAO, TELA_HISTORICO_MEDICACAO, TELA_ADD_SHARE_MEDICACAO, TELA_ADD_MEDICAMENTO, TELA_MEDICAMENTOS, TELA_HOME, TELA_CADASTRO_MEDICAMENTO, NAV_MEDICAMENTOS } from '../../constants/AppScreenData';
import StatusBar from '../../components/statusBar/StatusBar';
import HistoricoUsoPorData from './HistoricoUsoPorData';

export default class ControleMedicacao extends React.Component {
    static navigationOptions = {
        title: TELA_CONTROLE_MEDICACAO.title
        /* No more header config here! */
      };

    constructor(props){
        super(props);
        this.state = {
            active: 'true'
          };        
    }

    componentDidMount(){
        this.setState({active: 'true'})
    }

    render() {
        return (
            <View style={EstilosComuns.container}>

                <View style={{flex: 11, padding: 5}}>

                    <Container>
                        <Medicacao />
                        {/* <Tabs> 
                            <Tab heading="Medicação">
                                <Medicacao />
                            </Tab>
                            <Tab heading="Seus usos">
                                <HistoricoUsoPorData />
                            </Tab>
                        </Tabs>                     */}
                    </Container>

                                  
                </View>

            </View>
        )
    };
}

