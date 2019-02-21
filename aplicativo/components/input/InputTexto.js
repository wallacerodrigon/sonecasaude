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
                <TextInput style={[EstilosComuns.inputText]} 
                    placeholder={this.props.placeholder} 
                    maxLength={this.props.maxLength} 
                    secureTextEntry={this.props.secureTextEntry} 
                    textContentType={this.props.textContentType} 
                    onChange={value => this.props.onChangeInput(this.props.fieldname, value.nativeEvent.text)}
                    autoCapitalize={this.props.autoCapitalize}
                    multiline={this.props.multiline}
                    numberOfLines={this.props.numberOfLines}
                    placeholderTextColor={this.props.placeholderTextColor || '#fff'}
                    keyboardType={this.props.keyboardType}
                    editable={this.props.editable}
                />
            </View>
        )
    };
}


//keyboardType
// default
// number-pad
// decimal-pad
// numeric
// email-address
// phone-pad

//autoCapitalize
// characters: all characters.
// words: first letter of each word.
// sentences: first letter of each sentence (default).
// none: don't auto capitalize anything.