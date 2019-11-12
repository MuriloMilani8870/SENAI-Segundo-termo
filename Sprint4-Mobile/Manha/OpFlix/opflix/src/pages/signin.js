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
      <View>
        <ImageBackground source={image} style={{ width: '-100%', height: '100%', display: "flex", justifyContent: "center", alignItems: "center", }}>
          <View>
            <Text style={styles.Title}>Efetue seu login</Text>
          </View>
          <View style={styles.Container}>
            <TextInput
              placeholder="Email"
              onChangeText={email => this.setState({ email })}
              value={this.state.email} style={styles.ContentInput}
            />
            <TextInput
              placeholder="Senha"
              onChangeText={senha => this.setState({ senha })}
              value={this.state.senha} style={styles.ContentInput}
            />
            <TouchableOpacity onPress={this._realizarLogin} style={styles.ContentSubmit}>
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
  ContentInput: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'white',
    width: 250,
    height: 50,
    marginBottom: 20,
    opacity: 1,
  },
  ContentSubmit: {
    display: "flex",
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: 'white',
    width: 75,
    height: 30,
    fontSize: 100,
  },
  Container: {
    display: "flex",
    alignContent: 'space-around',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#000",
    width: 300,
    height: 250,
    opacity: 0.8,
  },
  Title: {
    display: 'flex',
    textAlign: "center",
    justifyContent: "center",
    fontSize: 35,
    marginBottom: 10,
    width: 150,
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 10
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: '#000',
    // textShadowColor: '#000'
    // text
    // height: 30,

  },
  Header: {

  }
});