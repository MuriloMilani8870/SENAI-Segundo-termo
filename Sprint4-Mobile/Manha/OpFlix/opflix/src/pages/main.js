import React, { Component } from 'react';
import {
    Text, View, StyleSheet,
    AsyncStorage, Image,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// import fonte from 'https://fonts.googleapis.com/css?family=Scheherazade&display=swap'

class Main extends Component {
    // apresentar a lista de lancamentos

    constructor() {
        super();
        this.state = {
            lancamentos: [],
        };
    }

 

    componentDidMount() {
        this._carregarlancamentos();
    }


    _carregarlancamentos = async () => {

        const value = await AsyncStorage.getItem('@opflix:token');

        await fetch('http://192.168.6.106:5000/Api/Lancamentos', {
            headers: {
                'Authorization': 'Bearer ' + value
            }
        })
            .then(resposta => resposta.json())
            .then(data => this.setState({ lancamentos: data }))
            .catch(erro => console.warn(erro));
    }


    render() {
        return (
            <View style={styles.main}>
                <View style={styles.mainBody}>
                    <View style={styles.mainTab}>
                        <Image
                            source={require("../assets/img/Logo_Opflix.png")}
                            style={styles.TitleLogo}
                        />
                    </View>
                    <FlatList styles={styles.flatItem}
                        data={this.state.lancamentos}
                        keyExtractor={item => item.idLancamento}
                        renderItem={({ item }) => (
                            <View style={{ marginBottom: 20, borderColor: '#26DBD6', borderWidth: 1, borderStyle: 'solid', marginBottom: 50 }}>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        display: "flex",
        alignContent: 'center',
        alignContent: 'center',
        flex: 1,
        backgroundColor: "#252525"
    },
    mainBody: {
        color: "#fff"
    },
    mainTab: {
        backgroundColor: '#000',
        width: 420,
        height: 80
    },
    Title: {
        display: 'flex',
        textAlign: "center",
        justifyContent: "center",
        fontSize: 20,
        backgroundColor: 'white',
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center',
        width: 200,
        // fontFamily: ''
    },
    TitleLogo: {
        alignSelf: 'center',
        width: 200,

    },
    flatItem: {
        // fontFamily: 'Scheherazade',
        display: 'flex',
        textAlign: "center",
        justifyContent: "center",
        flexDirection: 'row',
        fontSize: 17,
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
        fontSize: 20,
        color: '#fff',
        alignSelf: 'center',
        width: 430,
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
        width: 406,
        height: 320,
        backgroundColor: "#Fff"
    },
  

    // Background: {
    //     width: 100,
    //     height: 100,
    //     backgroundColor: 'black'
    // }

});

export default Main;