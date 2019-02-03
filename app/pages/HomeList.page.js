import React, {Component} from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import Home from '../components/HomeList/Home.component';

class HomePage extends Component {
    render() {
        return (
            // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            //     <Text>Home screen.</Text>
            //     <Button 
            //         title="Go to details"
            //         onPress={() => {
            //             this.props.navigation.navigate('Kitten', {
            //                 kittenName: 'Ronald',
            //                 kittenAge: 50,
            //             });
            //         }}
            //     />                
            // </View>
            <Home />
        );
    }
}

export default HomePage;