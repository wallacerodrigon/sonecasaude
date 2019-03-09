import React from 'react';
import { View, TextInput} from 'react-native';
import EstilosComuns, { BRANCO, VERDE } from '../../assets/estilos/estilos';
import { TextInputMask } from 'react-native-masked-text';

export const PLACE_HOLDER_COLOR = VERDE;

export class InputTexto extends React.Component {

    constructor(props){
        super(props); 
    }

    static KEYBOARD_NUMBER = "number-pad";
    static KEYBOARD_EMAIL = "email-address";
    static KEYBOARD_DEFAULT = "default";

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
                    placeholderTextColor={this.props.placeholderTextColor || PLACE_HOLDER_COLOR}
                    keyboardType={this.props.keyboardType}
                    editable={this.props.editable}
                    value={this.props.value}
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


export class InputTextComMascara extends React.Component {

    static MASK_CPF = "cpf";
    static MASK_CNPJ = "cnpj";
    static MASK_CEP = "zip-code";
    static MASK_MONEY = "money";
    static MASK_CELULAR= "cel-phone";
    static MASK_DATA = "datetime";

    constructor(props){
        super(props); 
    }

    render() {
        return (    
           <TextInputMask  style={[EstilosComuns.inputText]} 
                onChangeText={this.onChangeText}
                placeholder={this.props.placeholder}
                placeholderTextColor={this.props.placeholderTextColor || PLACE_HOLDER_COLOR}
                type={this.props.type}
            />    
        );
    }
}

// credit-card: use the mask 9999 9999 9999 9999. It accepts options (see later in this doc). 
// cpf: use the mask 999.999.999-99 and numeric keyboard. 
// cnpj: use the mask 99.999.999/9999-99 and numeric keyboard. 
// zip-code: use the mask 99999-999 and numeric keyboard. 
// only-numbers: accept only numbers on field with numeric keyboard. 
// money: use the mask R$ 0,00 on the field with numeric keyboard. It accepts options (see later in this doc). 
// cel-phone: use the mask (99) 9999-9999 or (99) 99999-9999 (changing automaticaly by length). It accepts options (see later in this doc). 
// datetime: use datetime mask with moment format (default DD/MM/YYYY HH:mm:ss). It accepts options (see later in this doc). 
// custom: use your custom mask (see the options props later in this doc). 

