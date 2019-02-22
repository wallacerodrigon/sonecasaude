import React from 'react';
import {View, Text, Picker} from 'react-native';
import EstilosComuns from '../../assets/estilos/estilos';
import {TELA_DADOS_PESSOAIS, TELA_ENDERECO, TELA_LOGIN} from '../../constants/AppScreenData'
import Botao from '../../components/botao/Botao';
import {InputTexto, InputTextComMascara } from '../../components/input/InputTexto';


export default class DadosPessoais extends React.Component {
//pensar nesse objeto como um método de uma classe estática ou sei lá o que. Que facilite a susa configuração
    static navigationOptions = {
        title: TELA_DADOS_PESSOAIS.title
      };

    constructor(props){
        super(props);

        this.state = {sexo: "M", cpf:'', dataNascimento: '', celular: ''};

    }

    onChangeInput(fieldname, text){
        this.setState({[fieldname]: text});
    }

    voltaParaLogin(){
        this.props.navigation.navigate(TELA_LOGIN.name)
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
                    <InputTexto placeholder="Data de Nascimento" maxLength={40}
                        onChangeInput={value => this.onChangeInput(value)}
                        />
                    <InputTextComMascara  style={[EstilosComuns.inputText]} 
                        onChangeText={this.onChangeCelular}
                        placeholder="Digite seu celular"
                        type={InputTextComMascara.MASK_CELULAR}
                    />                        
                    <Text style={EstilosComuns.corBranca}>Sexo</Text>
                    <Picker
                        selectedValue={this.state.sexo}
                        style={[EstilosComuns.inputText]} 
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
