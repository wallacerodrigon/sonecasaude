import React from 'react';
import {View, Button, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { Icon, Fab, Tabs, Tab, Container } from 'native-base';
import Historico from './Historico';
import Medicacao from './Medicacao';
import { TELA_CONTROLE_MEDICACAO, TELA_HISTORICO_MEDICACAO, TELA_ADD_SHARE_MEDICACAO, TELA_ADD_MEDICAMENTO } from '../../constants/AppScreenData';

export default class ControleMedicacao extends React.Component {
    static navigationOptions = {
        title: TELA_CONTROLE_MEDICACAO.title,
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

                <Container>
                    <Tabs tabStyle={{color: '#f00', backgroundColor:"#ddd"}}>
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
                    style={{ backgroundColor: "#04B486" }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                        <Icon name="apps" />
                    {/* itens */}
                    <Button style={{ backgroundColor: '#04B486' }} onPress={()=> this.props.navigation.navigate(TELA_HISTORICO_MEDICACAO.name)}>
                        <Icon name="calendar" />
                    </Button>
                    <Button style={{ backgroundColor: '#04B486' }} onPress={()=> this.props.navigation.navigate(TELA_ADD_SHARE_MEDICACAO.name)}>
                        <Icon name="share" />
                    </Button>
                    <Button disabled style={{ backgroundColor: '#04B486' }} onPress={()=> this.props.navigation.navigate(TELA_ADD_MEDICAMENTO.name)}>
                        <Icon name="medkit" />
                    </Button>
                </Fab>               
            </View>
        )
    };
}

