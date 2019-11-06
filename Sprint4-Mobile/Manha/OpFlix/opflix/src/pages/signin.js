import React, {Component} from 'react';

import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

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
      .catch(erro => console.warn('deu ruim' + erro));
  };

  _irParaHome = async tokenRecebido => {
    if (tokenRecebido != null) {
      try {
        // salvar essa informacao no asyncstorage
        await AsyncStorage.setItem('@opflix:token', tokenRecebido);
        // redirecionar
        this.props.navigation.navigate('MainNavigator');
      } catch (error) {}
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
        <TextInput
          placeholder="email"
          onChangeText={email => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          placeholder="senha"
          //   secureTextEntry={true}
          onChangeText={senha => this.setState({senha})}
          value={this.state.senha}
        />
        <TouchableOpacity onPress={this._realizarLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignIn;
