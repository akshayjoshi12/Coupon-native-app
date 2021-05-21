import React, { useState } from 'react';

import { TextInput, StyleSheet, Text, View, Button, TouchableHighlight, TouchableWithoutFeedback, Keyboard, ScrollView, ImageBackground  } from 'react-native';

import { COUPONS } from '../data/brand-data';
import DefaultText from '../components/DefaultText';
import buttonStyles from '../constants/button-styles';
import InfoMessage from '../components/InfoMessage';
import { showMessage, hideMessage } from "react-native-flash-message";

const ApplyCouponScreen = (props) => {

    const [codeValue, setCodeValue] = useState('');
    const [isCouponFound, setIsCouponFound] = useState(true);

    const brandId = props.navigation.getParam('brandId');
    const brandImageUrl = props.navigation.getParam('brandImage');
    const brandDesc = props.navigation.getParam('brandDesc');

    const changeCouponCodeHandler = (enteredText) => {
        setCodeValue(enteredText);
    }

    const CheckDetailButtonHandler = () => {
        const couponDetail = COUPONS.filter(
            coupon => (coupon.brandIds.indexOf(brandId) >= 0 && coupon.couponCode == codeValue)
        );
        //console.log(couponDetail);
        if(couponDetail.length > 0) {
            setIsCouponFound(true);
            props.navigation.navigate('CouponDetail');
            return true;
        } else {
            setIsCouponFound(false);
            showMessage({
                message: "Wrong coupon code entered.",
                type: "error",
            });
        }
    }

    return (
        
        <TouchableWithoutFeedback onPress=
            {() => {
                Keyboard.dismiss();
            }} >
           
            <View style={styles.mainRow}>
            <InfoMessage position="top" />
           
                <View style={{...styles.inputContainer, ...styles.itemRow}}>
                    <ImageBackground
                        source={{uri: brandImageUrl}}
                        style={styles.bgImage}
                    >
                        <View style={styles.titleContainer}>
                            <DefaultText>{props.navigation.getParam('title')}</DefaultText>
                            <Text>{brandDesc}</Text>
                        </View>
                        
                    </ImageBackground>
                </View>
                
                <View style={{...styles.inputContainer, ...styles.itemRow}}>
                    <View style={{width: '100%', flex: 1, flexDirection:'column', alignItems: 'center', margin: 10}}>   
                        <TextInput 
                            style={styles.clsinput} 
                            placeholder='Coupon Code'
                            onChangeText={changeCouponCodeHandler}
                        />
                        <TouchableHighlight activeOpacity="0.1" style={buttonStyles.btn}>
                            <Button title="Check Detail" onPress={CheckDetailButtonHandler} />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
            
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    clsinput: {
      borderWidth: 1,
      height: 40,
      width: '50%'
    },
    inputContainer: {
        height:'50%',
        color: '#000',
        width: '100%',
        padding: 15,
    },
    bgImage: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
    },
    itemRow: {
        flex: 1,
        flexDirection: 'column',
    },
    mainRow: {
        height: 300,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
    },
    titleContainer: {
        backgroundColor: '#ccc',
        paddingVertical: 5,
        paddingHorizontal: 12,
        fontWeight:'bold',
        color: '#fff',
    },
    itemTitle: {
        flex: 1,
        alignItems: 'center',
    }
  });

export default ApplyCouponScreen;