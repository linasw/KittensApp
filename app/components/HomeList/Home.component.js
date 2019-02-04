import React, {Component} from 'react';
import { View, Text, Button, FlatList, Alert, StyleSheet, Image } from 'react-native';
import Kitten from '../Kitten/Kitten.component';
import axios from 'axios';

class Home extends Component {
    render () {
        return (
            <View style={styles.container}>
                {/* <Text>{JSON.stringify(this.state.imageUri)}</Text> */}
                {/* <Image
                    style={styles.image} 
                    source={{uri: 'https://placekitten.com/200/300'}}/> */}
                <FlatList 
                data={[
                    {image: 'https://placekitten.com/200/300', key: 'Devin'},
                    {image: 'https://placekitten.com/200/300', key: 'Jackson'},
                    {image: 'https://placekitten.com/200/300', key: 'James'},
                    {image: 'https://placekitten.com/200/300', key: 'Joel'},
                    {image: 'https://placekitten.com/200/300', key: 'John'},
                    {image: 'https://placekitten.com/200/300', key: 'Jillian'},
                    {image: 'https://placekitten.com/200/300', key: 'Jimmy'},
                    {image: 'https://placekitten.com/200/300', key: 'Julie'},
                    {image: 'https://placekitten.com/200/300', key: 'Nigga'},
                    {image: 'https://placekitten.com/200/300', key: 'Peter'},
                    {image: 'https://placekitten.com/200/300', key: 'KittenMaster'},
                    {image: 'https://placekitten.com/200/300', key: 'Beta'},
                    {image: 'https://placekitten.com/200/300', key: 'Garlic'},
                    {image: 'https://placekitten.com/200/300', key: 'Onion'},
                    {image: 'https://placekitten.com/200/300', key: 'Paper'},
                    {image: 'https://placekitten.com/200/300', key: 'Rock'},
                ]}
                renderItem={({item}) => <Kitten image={item.image} name={item.key} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    container: {
        flex: 1,
        backgroundColor: 'blue',
        width: 100,
        height: 100,
        justifyContent: 'space-between'
    },
});

export default Home;