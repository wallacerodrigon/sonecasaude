import React from 'react';
import {View, Button, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import { Icon, Fab, Tabs, Tab, Container } from 'native-base';
import Historico from './Historico';
import Medicacao from './Medicacao';
import { TELA_CONTROLE_MEDICACAO } from '../../constants/AppScreenData';

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
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="share" />
                    <Button style={{ backgroundColor: '#34A34F' }}>
                    <Icon name="logo-whatsapp" />
                    </Button>
                    <Button style={{ backgroundColor: '#3B5998' }}>
                    <Icon name="logo-facebook" />
                    </Button>
                    <Button disabled style={{ backgroundColor: '#DD5144' }}>
                    <Icon name="mail" />
                    </Button>
                </Fab>               
            </View>
        )
    };
}

