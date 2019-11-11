import React, { Component } from 'react';
import {
    Text, View, StyleSheet,
    AsyncStorage, Image,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

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
    };

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.mainBody}>
                    <View>
                    <Image
                            source={require("../assets/img/Logo_Opflix.png")}
                            style={styles.TitleLogo}
                    />
                    </View>
                    {/* <Text style={styles.Title}>Navegue pelos nossos lançamentos!</Text> */}
                    <FlatList styles={styles.flatItem}
                        data={this.state.lancamentos}
                        keyExtractor={item => item.idLancamento}
                        renderItem={({ item }) => (
                            <View>
                                <Text styles={styles.flatItem}>{item.sinopse}</Text>
                                <Text styles={styles.flatItem}>{item.titulo}</Text>
                                <Text styles={styles.flatItem}>{item.idCategoriaNavigation.nomeCategoria}</Text>
                                <Text styles={styles.flatItem}>{item.idFormatoNavigation.nomeFormato}</Text>
                                <Text styles={styles.flatItem}>{item.duracao}</Text>
                                <Text styles={styles.flatItem}>{item.dataLancamento}</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabBarNavigatorIcon: {
        width: 25,
        height: 25,
        tintColor: 'white'
    },
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
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center',
        width: 350,
        backgroundColor: '#000'

    },
    flatItem:{
        display: 'flex',
        textAlign: "center",
        justifyContent: "center",
        fontSize: 20,
        backgroundColor: 'white',
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center',
        width: 200,
    }

    // Background: {
    //     width: 100,
    //     height: 100,
    //     backgroundColor: 'black'
    // }

});

export default Main;