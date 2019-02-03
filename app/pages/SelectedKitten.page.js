import React, {Component} from 'react';
import {View, Text} from 'react-native';

class SelectedKittenPage extends Component {
    render() {
        const { navigation } = this.props;
        const kittenName = navigation.getParam('kittenName', 'NONAMEN');
        const kittenAge = navigation.getParam('kittenAge', 666);

        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>Name: {kittenName}</Text>
            <Text>Age: {kittenAge}</Text>
          </View>
        );
      }  
}

export default SelectedKittenPage;