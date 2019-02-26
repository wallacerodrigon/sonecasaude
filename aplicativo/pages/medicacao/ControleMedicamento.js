import React from 'react';
import {View, Text} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class ControleMedicamento extends React.Component {
    static navigationOptions = {
        title: 'ControleMedicamento',
        /* No more header config here! */
      };

    render() {
        return (
            <View style={EstilosComuns.container}>
                <Text>ControleMedicamento</Text>
            </View>
        //      <Segment>
        //      <Button first><Text>Seg</Text></Button>
        //      <Button last><Text>TER</Text></Button>
        //      <Button first><Text>QUA</Text></Button>
        //      <Button last><Text>QUI</Text></Button>
        //      <Button first><Text>SEX</Text></Button>
        //      <Button last><Text>SAB</Text></Button>
        //      <Button first><Text>DOM</Text></Button>
        //  </Segment>
        )
    };
}

