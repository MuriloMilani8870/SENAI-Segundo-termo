import React, { Component } from 'react';

import { StyleSheet, Image, View, FlatList, Text, TouchableOpacity, Picker, AsyncStorage, ScrollView, TouchableHighlight } from 'react-native';

export default class FiltroData extends Component {

    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require('../assets/img/Icon_FilterDate.png')}
                style={styles.tabNavigatorIcon}
            />
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            lancamentos: [],
            listaFiltrada: [],
            DataEscolhida: null,
        }
    }

    componentDidMount() {
        this._carregarDataLancamento();

    }

    _logout = async () => {
        this.props.navigation.navigate('AuthStack');
    }

    _filtroData = async () => {
        await fetch('http://192.168.6.106:5000/api/lancamentos/filtroData/' + this.state.DataEscolhida, {
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

    _carregarDataLancamento = async () => {
        await fetch('http://192.168.6.106:5000/Api/Lancamentos', {
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

    _alterarData = async (item) => {
        this.setState({ listaFiltrada: this.state.lancamentos.filter(x => x.dataLancamento == item) })

    }

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
                    <Text style={styles.PickerTitle}>Filtre os nossos lançamentos por data!</Text>
                    <Picker style={styles.PickerButton} selectedValue={this.state.DataEscolhida} onValueChange={this._alterarData}>
                        <Picker.Item label="Escolha a data:" value="0" />
                        {this.state.lancamentos.map(e => {
                            return (<Picker.Item label={e.dataLancamento} value={e.dataLancamento} />
                            )
                        })}
                    </Picker>
                </View>
                <FlatList
                    data={this.state.listaFiltrada}
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
        );
    }
}

const styles = StyleSheet.create(
    {
        main: {
            display: "flex",
            alignContent: 'center',
            flex: 1,
            backgroundColor: "#252525"
        }, PickerTitle: {
            color: '#fff',
            textAlign: 'center',
            fontSize: 35,
        },
        Button: {
            color: "#000",
            fontSize: 25,
            display: 'flex',
            alignSelf: 'center',
            backgroundColor: "#fff",
            width: 350,
            textAlign: 'center',
            margin: 20,
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
        PickerButton: {
            color: "#fff",
            backgroundColor: '#26DBD6',
            fontSize: 25,
            marginBottom: 20,
            marginTop: 20
        },
    }
)
