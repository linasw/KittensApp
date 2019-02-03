import React, {Component} from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import Kitten from '../Kitten/Kitten.component';

class Home extends Component {
    render () {
        return (
            <View>
                <FlatList 
                data={[
                    {key: 'Devin', age: 50},
                    {key: 'Jackson', age: 50},
                    {key: 'James', age: 50},
                    {key: 'Joel', age: 50},
                    {key: 'John', age: 50},
                    {key: 'Jillian', age: 50},
                    {key: 'Jimmy', age: 50},
                    {key: 'Julie', age: 50},
                    {key: 'Devin', age: 50},
                    {key: 'Jackson', age: 50},
                    {key: 'James', age: 50},
                    {key: 'Joel', age: 50},
                    {key: 'John', age: 50},
                    {key: 'Jillian', age: 50},
                    {key: 'Jimmy', age: 50},
                    {key: 'Julie', age: 50},
                ]}
                renderItem={({item}) => <Kitten name={item.key} age={item.age} />}
                />
            </View>
        );
    }
}

export default Home;