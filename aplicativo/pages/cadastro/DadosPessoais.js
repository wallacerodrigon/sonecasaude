import React from 'react';
import {View, Text, Picker} from 'react-native';
import EstilosComuns, { BRANCO } from '../../assets/estilos/estilos';
import {TELA_DADOS_PESSOAIS, TELA_ENDERECO, TELA_LOGIN} from '../../constants/AppScreenData'
import Botao, { BotaoOpacity, BotaoFechar } from '../../components/botao/Botao';
import {InputTexto, InputTextComMascara } from '../../components/input/InputTexto';
import {DatePicker, Icon } from 'native-base';
import {withNavigation} from 'react-navigation';

class DadosPessoais extends React.Component {

    constructor(props){
        super(props);
        console.log(props);
        this.state = {sexo: "M", cpf:'', dataNascimento: null, celular: ''};
        
        this.onChangeDataNascimento =this.onChangeDataNascimento.bind(this);
        this.voltaParaLogin = this.voltaParaLogin.bind(this);
    }

    onChangeInput(fieldname, text){
        this.setState({[fieldname]: text});
    }

    voltaParaLogin(){
        this.props.navigation.goBack();
    }

    onChangeCpf(text){
        this.setState({cpf: text});
    }
    onChangeDataNascimento(text){
        this.setState({dataNascimento: text});
    }
    onChangeCelular(text){
        this.setState({celular: text});
    }


    render() {
        return (
            <View style={EstilosComuns.container}>
                <View style={EstilosComuns.bodyTitulo}>
                    <Text style={EstilosComuns.tituloJanelas}>Seus dados</Text>
                </View>
                
                <View style={EstilosComuns.bodyMain}>
                    <InputTextComMascara  style={[EstilosComuns.inputText]} 
                        onChangeText={this.onChangeCpf}
                        placeholder="Digite seu CPF"
                        type={InputTextComMascara.MASK_CPF}
                    />
           
                    <InputTexto placeholder="E-mail" maxLength={40}
                        keyboardType={InputTexto.KEYBOARD_EMAIL}
                        autoCapitalize="none"
                        onChangeInput={value => this.onChangeInput(value)}
                        />
                    <InputTexto placeholder="Nome Completo" maxLength={60}
                        autoCapitalize="words"
                        onChangeInput={value => this.onChangeInput(value)}
                        />
                    <InputTextComMascara  style={[EstilosComuns.inputText]} 
                        onChangeText={this.onChangeCpf}
                        placeholder="Data de nascimento"
                        type={InputTextComMascara.MASK_DATA}
                    />                   


                    <InputTextComMascara  style={[EstilosComuns.inputText]} 
                        onChangeText={this.onChangeCelular}
                        placeholder="Digite seu celular"
                        type={InputTextComMascara.MASK_CELULAR}
                    />                        
                    <Text style={EstilosComuns.corBranca}>Sexo</Text>
                    <Picker
                        selectedValue={this.state.sexo}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({sexo: itemValue})
                        }>
                        <Picker.Item label="Selecione" value=""  />
                        <Picker.Item label="Masculino" value="M" />
                        <Picker.Item label="Feminino" value="F" />
                    </Picker>                                       

                </View>
                
                <View style={EstilosComuns.rodape}>
                    <Botao tituloBotao='Próximo' onClick={() =>  this.props.navigation.navigate(TELA_ENDERECO.name)}/>
                </View>
            </View>
        )
    };
}

export default DadosPessoais;