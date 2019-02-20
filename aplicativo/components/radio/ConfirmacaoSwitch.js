import React from 'react';
import {Switch, View, Text} from 'react-native';

const ConfirmacaoSwitch = props => (
    <View style={{flex: 1, flexDirection:'row'}}>
        {/* <Text style={{color: 'red'}}>N</Text> */}
        <Switch value={props.value}
        onValueChange = {props.toggleSwitch}
        />
        {/* <Text style={{color: 'blue'}}>S</Text> */}
    </View>
);



export default ConfirmacaoSwitch;