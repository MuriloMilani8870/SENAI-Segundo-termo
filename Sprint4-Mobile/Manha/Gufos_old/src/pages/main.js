import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventos: [],
        };
    }

    componentDidMount(){
        this._carregarEventos();
    }

    _carregarEventos = async () =>{
        fetch('http://192.168.7.85:5000/api/eventos')
        .then(resposta => resposta.json())
        .then(data => this.setState({eventos : data}))
        .catch(erro => console.warn(erro));
    };

    render() {
        return (
            <FlatList
                data={this.state.eventos}
                keyExtractor={item => item.idEvento}
                renderItem={({ item }) =>
                (
                    <View>
                        <Text>{item.titulo})</Text>
                        <Text>{item.dataEvento})</Text>
                    </View>

                )}
            />
        );
    }
}

export default Main;