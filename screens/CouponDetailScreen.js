import React from 'react';
import { View, Text, TouchableHighlight, Button } from 'react-native';

import Card from '../components/Card';

const CouponDetailScreen = (props) => {
    const CheckDetailButtonHandler = () => {
        props.navigation.navigate('PriceCalculation');
    }
    return (
        <Card>
            <View>
                <Text style={{fontFamily: 'open-sans-italic', fontSize: 20,}}>Welcome to Coupon Detail!!</Text>
                <TouchableHighlight>
                    <Button title="Calculate" onPress={CheckDetailButtonHandler} />
                </TouchableHighlight>
            </View>
        </Card>
    )
}

export default CouponDetailScreen;