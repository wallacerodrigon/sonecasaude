import React from 'react';
import {View, Button, Text} from 'react-native';
import EstilosComuns, { VERDE, BRANCO } from '../../assets/estilos/estilos';
import { Icon, Fab, Tabs, Tab, Container } from 'native-base';
import Historico from './Historico';
import Medicacao from './Medicacao';
import { TELA_CONTROLE_MEDICACAO, TELA_HISTORICO_MEDICACAO, TELA_ADD_SHARE_MEDICACAO, TELA_ADD_MEDICAMENTO, TELA_MEDICAMENTOS, TELA_HOME, TELA_CADASTRO_MEDICAMENTO } from '../../constants/AppScreenData';
import StatusBar from '../../components/statusBar/StatusBar';

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
                        <Tabs> 
                            <Tab heading="Medicação">
                                <Medicacao />
                            </Tab>
                            <Tab heading="Histórico">
                                <Historico />
                            </Tab>
                        </Tabs>                    
                    </Container>

                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{ }}
                        style={{ backgroundColor: VERDE }}
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}>
                            <Icon name="apps" />
                        <Button style={{ backgroundColor: VERDE }} onPress={()=> this.props.navigation.navigate(TELA_HISTORICO_MEDICACAO.name)}>
                            <Icon name="calendar" />
                        </Button>
                        <Button style={{ backgroundColor: VERDE }} onPress={()=> this.props.navigation.navigate(TELA_ADD_SHARE_MEDICACAO.name)}>
                            <Icon name="share" />
                        </Button>
                        <Button disabled style={{ backgroundColor: VERDE }} onPress={()=> this.props.navigation.navigate(TELA_CADASTRO_MEDICAMENTO.name)}>
                            <Icon name="medkit" />
                        </Button>
                        <Button disabled style={{ backgroundColor: VERDE }} onPress={()=> this.props.navigation.navigate(TELA_HOME.name)}>
                            <Icon name="close" />
                        </Button>

                    </Fab>               
                </View>

            </View>
        )
    };
}

