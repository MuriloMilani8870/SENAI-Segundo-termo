import React, { Component } from 'react';

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  StyleSheet,
  ImageBackground,
} from 'react-native';

import image from '../assets/img/Banner_Login.png'
import { directive } from '@babel/types';

class SignIn extends Component {
  static navigationOptions = {
    header: null,
  };

  // constructor
  // state
  constructor() {
    super();
    this.state = {
      email: 'erik@email.com',
      senha: '123456',
    };
  }

  // enviar para a api
  _realizarLogin = async () => {
    fetch('http://192.168.6.106:5000/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        senha: this.state.senha,
      }),
    })
      .then(resposta => resposta.json())
      .then(data => this._irParaHome(data.token))
      .catch(erro => console.warn('Seu login não foi efetuado, tente novamente' + erro));
  };

  _irParaHome = async tokenRecebido => {
    if (tokenRecebido != null) {
      try {
        // salvar essa informacao no asyncstorage
        await AsyncStorage.setItem('@opflix:token', tokenRecebido);
        // redirecionar
        this.props.navigation.navigate('MainNavigator');
      } catch (error) { }
    }
  };

  _storeData = async () => {
    try {
      await AsyncStorage.setItem('@opflix:token', 'I like to save it.');
    } catch (error) {
      // Error saving data
    }
  };




  render() {
    return (
      <View style={styles.Background}>
        <ImageBackground source={image} style={{ width: '-200%', height: '100%', display: "flex", justifyContent: "center", alignItems: "center", }}>
          <View style={styles.Container}>
            <TextInput
              placeholder="Email"
              onChangeText={email => this.setState({ email })}
              value={this.state.email} style={styles.bigBlue}
            />
            <TextInput
              placeholder="Senha"
              onChangeText={senha => this.setState({ senha })}
              value={this.state.senha} style={styles.red}
            />
            <TouchableOpacity onPress={this._realizarLogin}>
              <Text>Login</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default SignIn;

const styles = StyleSheet.create({
  bigBlue: {  
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'white',
    width: 250,
    height: 100
  },
  red: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'white',
    width: 250,
    height: 100
  },
  Container:{
    display: "flex",
    alignContent: 'space-around',
    flexDirection: 'column',
    backgroundColor: "#000",
    width: 250,
    height: 100
    // opacity: 100
  }
});