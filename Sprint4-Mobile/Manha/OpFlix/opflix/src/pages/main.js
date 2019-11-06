import React, { Component } from 'react';
import {
    Text, View, StyleSheet,
    AsyncStorage,
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
            <FlatList
                data={this.state.lancamentos}
                keyExtractor={item => item.idLancamento}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.idLancamento}</Text>
                        <Text>{item.titulo}</Text>
                        <Text>{item.idCategoriaNavigation.nomeCategoria}</Text>
                        <Text>{item.idFormatoNavigation.nomeFormato}</Text>
                        <Text>{item.sinopse}</Text>
                        <Text>{item.duracao}</Text>
                        <Text>{item.dataLancamento}</Text>
                    </View>
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    tabBarNavigatorIcon: { width: 25, height: 25, tintColor: 'white' }
});

export default Main;