import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Alert} from 'react-native';
import styles from './Kitten.styles';

class Kitten extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.image}} resizeMode='contain' style={styles.image}/>
                <Text>{this.props.name}</Text>
            </View>
        );
    }
}

export default Kitten;