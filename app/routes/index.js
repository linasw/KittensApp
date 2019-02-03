import {createAppContainer, createStackNavigator} from 'react-navigation';

import HomeList from '../pages/HomeList.page';
import KittenPage from '../pages/SelectedKitten.page';

const Router = createStackNavigator({
    Home: {
        screen: HomeList,
    },
    Kitten: {
        screen: KittenPage,
    },
}, {
    initialRouteKey: 'Home',    
});

export default createAppContainer(Router);