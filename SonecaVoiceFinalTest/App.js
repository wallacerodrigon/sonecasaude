/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, View} from 'react-native';
import Voice from 'react-native-voice';
//import Speech from 'react-native-speech';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isReady: false, texto: 'Olá mundo.', recognized: ''
    };    

    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);

    console.log(Voice);
  }
  
  async componentWillMount() {
    this.setState({ isReady: true });
  }  

  testarSpeech(){
    alert('não funciona ainda');
    // Speech.speak({
    //   text: this.state.texto,
    //   voice:'pt-BR'
    // });
   
  }
  onChangeText(text){
    this.setState({texto: text});
  }

  onSpeechStart(e) {
    this.onChangeText('Vamos iniciar?');
  };  
  async _startRecognition(e) {
    this.setState({
      recognized: '',
      texto: 'Iniciado. Pode falar'
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
    //console.log('results: ', e);
    this.onChangeText('');
    this.setState({
      texto: e.value,
    });
  }      

  getFala(){
    return this.state.texto;
  }  

  render() {
    return (
      <View style={styles.container}>

        <Button title="speech" onPress={() => this.testarSpeech()}/>
        <Button title="Fale" onPress={this._startRecognition.bind(this)}/> 
        <Button title="Terminei" onPress={this._finishRecognition.bind(this)}/> 

        <Text>Reconhecido: {this.state.recognized}</Text>
        <Text>Você falou:</Text>
        <Text>{this.getFala()}</Text>       

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
});
