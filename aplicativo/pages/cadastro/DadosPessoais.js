import React from 'react';
import {View, Text, Picker} from 'react-native';
import EstilosComuns, { BRANCO } from '../../assets/estilos/estilos';
import {TELA_DADOS_PESSOAIS, TELA_ENDERECO, TELA_LOGIN} from '../../constants/AppScreenData'
import Botao, { BotaoOpacity, BotaoFechar } from '../../components/botao/Botao';
import {InputTexto, InputTextComMascara } from '../../components/input/InputTexto';
import {DatePicker, Icon } from 'native-base';

export default class DadosPessoais extends React.Component {
//pensar nesse objeto como um método de uma classe estática ou sei lá o que. Que facilite a susa configuração
    static navigationOptions = {
        title: TELA_DADOS_PESSOAIS.title,
        headerLeft: (
            <BotaoFechar/>
        )
      };

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
                    <DatePicker
                        defaultDate={new Date()}
                        minimumDate={new Date(1900, 1, 1)}
                        maximumDate={new Date()}
                        locale={"en"} //ver em portugues
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Data de nascimento"
                        textStyle={{ color: "#fff" }}
                        placeHolderTextStyle={{ color: "#fff" }}
                        onDateChange={this.onChangeDataNascimento}
                        disabled={false}
                        style={[EstilosComuns.inputText]} 
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
