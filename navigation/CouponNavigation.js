import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CouponDetailScreen from '../screens/CouponDetailScreen';
import ApplyCouponScreen from '../screens/ApplyCouponScreen';
import PriceCalculationScreen from '../screens/PriceCalculationScreen';
import HomeScreen from '../screens/HomeScreen';

const CouponNavigator = createStackNavigator({
    Home: HomeScreen,
    ApplyCoupon: ApplyCouponScreen,
    CouponDetail: CouponDetailScreen,
    PriceCalculation: PriceCalculationScreen,
});

export default createAppContainer(CouponNavigator);