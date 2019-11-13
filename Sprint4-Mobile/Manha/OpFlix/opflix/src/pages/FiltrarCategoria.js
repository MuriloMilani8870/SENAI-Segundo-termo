import React, { Component } from 'react';
import { Text, AsyncStorage, View , TouchableOpacity } from 'react-native';

class FiltrarCategoria extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      Lancamentos: [],
      categoriaEscolhida: null,
      Categorias: [],
    };
  }

  componentDidMount() {
    // this._carregarLancamento();
    this._carregarCategorias();
  }

  _carregarCategorias = async () => {
    await fetch('http://192.168.6.106:5000/api/categorias', {
      headers: {
        "Accept": "application/json",
        "Authorization": "Bearer " + await AsyncStorage.getItem("@opflix:token")
      }
    })
      .then(resposta => resposta.json())
      .then(data => this.setState({ Categorias: data }))
      .catch(erro => console.warn(erro));
  };

  _Logout = async (event) => {
    await AsyncStorage.removeItem("@opflix:token");
    this.props.navigation.navigate('AuthStack')
}

  // _carregarlancamentos = async () => {
  //   await fetch('http://192.168.6.106:5000/api/lancamentos/FiltrarPorCategoria/' + this.state.categoriaEscolhida, {
  //     headers: {
  //       "Accept": "application/json",
  //       "Authorization": "Bearer " + await AsyncStorage.getItem("@opflix:token")
  //     },
  //   })
  //     .then(resposta => resposta.json())
  //     .then(data => this.setState({ Lancamentos: data }))
  //     .catch(erro => console.warn(erro));
  // };

  // _Logout = async (event) => {
  //   await AsyncStorage.removeItem("@opflix:token");
  //   this.props.navigation.navigate('AuthStack')
  // }

  render() {
    return (
      <View>
        <TouchableOpacity><Text onPress={this._Logout}>Sair</Text></TouchableOpacity>
        <Text>{this.state.token}</Text>
      </View>
    );
  }
}

export default FiltrarCategoria;