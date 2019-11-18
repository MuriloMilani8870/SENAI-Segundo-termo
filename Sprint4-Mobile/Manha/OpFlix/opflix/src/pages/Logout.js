import React, { Component } from 'react';
import { Text, AsyncStorage, View, TouchableOpacity, Image, StyleSheet } from 'react-native';

class FiltrarCategoria extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require('../assets/img/Icon_Logout.png')}
                style={styles.tabNavigatorIcon}
            />
        )
    }
    _Logout = async (event) => {
        await AsyncStorage.removeItem("@opflix:token");
        this.props.navigation.navigate('AuthStack')
    }
    render() {
        return (
            <View>
                <TouchableOpacity><Text onLayout={this._Logout}>Sair</Text></TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    tabNavigatorIcon: { width: 35, height: 35, tintColor: 'white' }
});

export default FiltrarCategoria;