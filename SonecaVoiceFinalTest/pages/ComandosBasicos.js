import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import Voice from 'react-native-voice';


const listaComandos = [
    {comando: "médicos", acao: 'medicos'},
    {comando: "medicações", acao: 'medicacoes'},
    {comando: "qual meu remédio de hoje", acao: 'medicacoes'},
    {comando: "endereço", acao: 'endereco'},
    {comando: "Alerta Remédio", acao: 'alertaRemedio'},
    {comando: "Alerta", acao: 'alertaRemedio'},
    {comando: "Remédio", acao: 'alertaRemedio'},
    {comando: "Alerta Estoque", acao: 'alertaEstoque'},
    {comando: "Estoque", acao: 'alertaEstoque'},
    {comando: "Meus dados", acao: 'meusDados'},
    {comando: "Home", acao: "home"}
];

export default class ComandosBasicos extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isReady: false, textoFalado: '', recognized: ''
            };    

        Voice.onSpeechStart = this.onSpeechStart.bind(this);
        Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
        Voice.onSpeechResults = this.onSpeechResults.bind(this);        
    }

    async componentWillMount() {
        this.setState({ isReady: true });
    }  

    onChangeText(text){
        this.setState({textoFalado: text});
    }

    onSpeechStart(e) {
        this.onChangeText('');
    };  
    async _startRecognition(e) {
        this.setState({
        recognized: '',
        textoFalado: ''
        });
        try {
            await Voice.start('pt-BR');
        } catch (e) {
        console.error(e);
        alert(e);
        }
    }
    
    async _finishRecognition(e){
        await Voice.stop();
    }

    componentWillUnmount() {
        Voice.destroy().then(Voice.removeAllListeners);
    }  
    onSpeechRecognized(e) {
        this.setState({
        recognized: '√',
        });
    }


    onSpeechResults(e) {
       // console.log('results: ', e);
        this.onChangeText('');
        this.onChangeText(Array.isArray(e.value) ? e.value.join(','): e.value.toString());

        let comando = listaComandos.filter( itemComando => e.value.find(value => itemComando.comando.toLocaleLowerCase() === value.toLocaleLowerCase()) );

        if (comando && comando.length > 0){
            this.props.navigation.navigate(comando[0].acao);
        } else {
            alert('Comando não reconhecido. Tente novamente!');
        }

    }     

    salvarComando(){
        alert('ainda não implementado....')
    }

    getComandos(){
        return listaComandos.map(comando => {
            return <Text>
                {comando.comando}
            </Text>
        })

    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', padding: 25}}>

                <Text style={{fontSize: 20, fontWeight: 'bold'}} >Comandos Básicos</Text>
                <Text>Fale um dos comandos para ver alguma ação ou veja o que falou abaixo</Text>

                {this.getComandos()}
                
                <TouchableOpacity style={{backgroundColor: 'gray'}} onPress={this._startRecognition.bind(this)}>
                    <Text>Fale algo</Text>
                </TouchableOpacity>

                <TextInput placeholder='Fale aqui...' style={{borderWidth: 1, borderColor: 'red'}} 
                    value={this.state.textoFalado} 
                     onChangeText={text => this.setState({textoFalado: text})} />

                <TouchableOpacity style={{backgroundColor: 'gray'}} onPress={() => this.onSpeechResults({value: ['Médico','medicos', 'MÉDICOS']})}>
                    <Text>Gravar Comando</Text>
                </TouchableOpacity>

            </View>
        )
    }
}