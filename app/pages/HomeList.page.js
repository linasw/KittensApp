import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';

class HomePage extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home screen.</Text>
                <Button 
                    title="Go to details"
                    onPress={() => {
                        this.props.navigation.dispatch(StackActions.reset({
                            index: 0,
                            actions: [
                                NavigationActions.navigate({ routeName: 'Kitten'})
                            ],
                        }))
                    }}
                />
            </View>
        );
    }
}

export default HomePage;