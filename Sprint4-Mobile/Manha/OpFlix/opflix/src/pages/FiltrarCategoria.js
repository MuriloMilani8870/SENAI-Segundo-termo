import React, { Component, Fragment } from 'react';
import { Text, View, AsyncStorage, Picker, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Categorias extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lancamentos: [
      ],
      categoriaEscolhida: null,
      categorias: []
    }
  }

  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require('../assets/img/Icon_Filter.png')}
        style={styles.tabNavigatorIcon}
      />
    )
  }

  componentDidMount() {
    // this._carregarLancamentos();
    this._carregarPlataformas();
  }

  _carregarLancamentos = async () => {
    await fetch('http://192.168.6.106:5000/api/lancamentos/listar/categoria/' + this.state.categoriaEscolhida, {
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + await AsyncStorage.getItem("@opflix:token")
      },
    })
      .then(resposta => resposta.json())
      .then(data => this.setState({ lancamentos: data }))
      .catch(erro => console.warn(erro))
  }
  _carregarPlataformas = async () => {
    await fetch('http://192.168.6.106:5000/api/Categorias', {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + await AsyncStorage.getItem("@opflix:token")
      }
    })
      .then(resposta => resposta.json())
      .then(data => this.setState({ categorias: data }))
      .catch(erro => console.warn(erro));
  };

  render() {
    return (
      <View style={styles.main}>
        <View >
          <View style={styles.mainTab}>
            <Image
              source={require("../assets/img/Logo_Opflix.png")}
              style={styles.TitleLogo}
            />
          </View>
          <Text style={styles.Picker}>Filtre os nossos lançamentos!</Text>
          <Picker selectedValue={this.state.categoriaEscolhida} onValueChange={(itemValue) => this.setState({ categoriaEscolhida: itemValue })}>
            <Picker.Item label="Escolha a plataforma:" value="0" selectedValue />
            {this.state.categorias.map(e => {
              return (<Picker.Item label={e.nomeCategoria} value={e.idCategoria} />
              )
            })}
          </Picker>
          <TouchableOpacity onPress={this._carregarLancamentos}>
            <Text>Buscar</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={this.state.lancamentos}
          keyExtractor={item => item.idLancamento}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 90, }}>
              <Text style={{ width: 415, backgroundColor: '#26DBD6', textAlign: "center", fontSize: 20, color: '#000', }}>Sinopse</Text>
              <Text style={styles.flatItemSinopse}>{item.sinopse}</Text>
              <View style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap' }}>
                <Text style={styles.flatItemTitulo}>{item.titulo}</Text>
                <Text style={styles.flatItem}>{item.idCategoriaNavigation.nomeCategoria}</Text>
                <Text style={styles.flatItem}>{item.idFormatoNavigation.nomeFormato}</Text>
                <Text style={styles.flatItem}>{item.duracao} Minutos</Text>
                <Text style={styles.flatItem}>{item.dataLancamento}</Text>
              </View>
            </View>
          )}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create(
  {
    main: {
      
      display: "flex",
      alignContent: 'center',
      alignContent: 'center',
      flex: 1,
      backgroundColor: "#252525"
    }, Picker: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 25,
    },
    TitleLogo: {
      alignSelf: 'center',
      width: 200,
    },
    mainTab: {
      display: 'flex',
      alignContent: 'center',
      backgroundColor: '#000',
      width: 420,
      height: 80
    },
    flatItem: {
      display: 'flex',
      textAlign: "center",
      justifyContent: "center",
      flexDirection: 'row',
      fontSize: 18,
      color: '#fff',
      alignSelf: 'center',
      width: 102,
      height: 50,
      backgroundColor: "#000",
      marginBottom: 1,
      borderWidth: 1,
      borderColor: '#fff',
      borderStyle: 'solid'
    },
    flatItemTitulo: {
      display: 'flex',
      textAlign: "center",
      justifyContent: "center",
      flexDirection: 'row',
      fontSize: 24,
      color: '#fff',
      alignSelf: 'center',
      width: 428,
      height: 50,
      backgroundColor: "#26DBD6",
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: { width: -1, height: 1 },
      textShadowRadius: 10
    },
    flatItemSinopse: {
      display: 'flex',
      textAlign: "center",
      justifyContent: "center",
      fontSize: 20,
      color: '#000',
      alignSelf: 'center',
      width: 428,
      height: 320,
      backgroundColor: "#Fff"
    }, tabNavigatorIcon: {
      width: 25,
      height: 25,
      tintColor: 'white'
    },
  }
)

export default Categorias;