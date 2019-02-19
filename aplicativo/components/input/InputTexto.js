import React from 'react';
import { View, TextInput} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';

export default class InputTexto extends React.Component {

    constructor(props){
        super(props); 
    }

    render() {
        return (
            <View>
                <TextInput style={[EstilosComuns.inputText]} placeholder={this.props.placeholder} 
                    maxLength={this.props.maxLength} secureTextEntry={this.props.secureTextEntry} 
                    textContentType={this.props.textContentType} 
                    onChange={value => this.props.onChangeInput(value.nativeEvent.text)}
                />
            </View>
        )
    };
}


