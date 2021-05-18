import React, { useState } from 'react';

import { TextInput, StyleSheet, Text, View, Button, TouchableHighlight, TouchableWithoutFeedback, Keyboard  } from 'react-native';

import Card from '../components/Card';
import ButtonStyles from '../constants/button-styles';

const HomeScreen = (props) => {

    const [codeValue, setCodeValue] = useState('');
    const [brandName, setBrandName] = useState('');

    

    const changeCodeHandler = (enteredText) => {
        setCodeValue(enteredText);
        let combinedText = "";
        if(brandName)
        {
            combinedText = <View><Text>Brand: {brandName}</Text><Text>Coupon Code: {enteredText}</Text></View>;
        }
        props.onInputChange(combinedText);
    }

    const changeBrandHandler = (enteredBrand) => {
        setBrandName(enteredBrand);
        let combinedText = "";
        if(codeValue)
        {
            combinedText = <View><Text>Brand: {enteredBrand}</Text><Text>Coupon Code: {codeValue}</Text></View>;
        }
        props.onInputChange(combinedText);
    }

    const CheckDetailButtonHandler = () => {
        props.navigation.navigate('CouponDetail');
    }

    return (
        <TouchableWithoutFeedback onPress=
            {() => {
                Keyboard.dismiss();
            }} >
           
                <Card>
                    <View style={styles.inputContainer}>
                        <TextInput 
                            style={styles.clsinput} 
                            placeholder='Brand'
                        />
                        <TextInput 
                            style={styles.clsinput} 
                            placeholder='Coupon Code'
                        />
                        <TouchableHighlight activeOpacity="0.1" style={ButtonStyles.btn}>
                            <Button title="Check Detail" onPress={CheckDetailButtonHandler} />
                        </TouchableHighlight>
                    </View>
                </Card>
            
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    clsinput: {
      borderWidth: 1,
      width: 200,
      height: 50,
      padding: 10,
      marginRight: 10,
      marginTop: 5,
    },
    inputContainer: {
        backgroundColor: '#F9C2FF',
        padding: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 10,
        borderStyle: 'solid',
        borderColor: '#000',
        
    }
  });

export default HomeScreen;