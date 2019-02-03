import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import styles from './Kitten.styles';

class Kitten extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./check.jpg')} resizeMode='contain' style={styles.image}/>
                <Text>{this.props.name}</Text>
                <Text>{this.props.age}</Text>
            </View>
        );
    }
}

export default Kitten;