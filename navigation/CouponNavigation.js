import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CouponDetailScreen from '../screens/CouponDetailScreen';
import HomeScreen from '../screens/HomeScreen';
import PriceCalculationScreen from '../screens/PriceCalculationScreen';

const CouponNavigator = createStackNavigator({
    Home: HomeScreen,
    CouponDetail: CouponDetailScreen,
    PriceCalculation: PriceCalculationScreen,
});

export default createAppContainer(CouponNavigator);


