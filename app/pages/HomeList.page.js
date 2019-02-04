import React, {Component} from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
import {getKittens} from '../redux/actions/kitten.action';
import Home from '../components/HomeList/Home.component';

class HomePage extends Component {
    render() {
        const {kittens, getKittens} = this.props;
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
            <Home kittens={kittens} getKittens={getKittens} />
        );
    }
}

const mapStateToProps = (state) => ({
    kittens: state.kittens.data,
});

export default connect(mapStateToProps, {getKittens})(HomePage);