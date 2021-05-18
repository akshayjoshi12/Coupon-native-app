import React, { useState, useEffect } from 'react';

import { View, StyleSheet, Button, TouchableHighlight } from 'react-native';

import ButtonStyles from '../constants/button-styles';

const CouponItem = (props) => {
    const [applyFlag, setApplyFlag] = useState(false);

    const applyButtonHandler = () => {
        //setApplyFlag(true);
        props.onApply(true);
        setApplyFlag(true);
    }

    return (
        <View style={{flex:1}} >
            <View style={styles.listItemCss}>{props.couponId}</View>
            <View style={{flex:1, alignItems: 'center', flexDirection: 'row'}}>
                <TouchableHighlight style={{margin: 10}}>
                    <Button 
                    color={ButtonStyles.ascent.backgroundColor} 
                    title="Delete" 
                    onPress={props.onDelete.bind(this, props.id)} 
                    />
                </TouchableHighlight>
                <TouchableHighlight >
                    <Button 
                    color={ButtonStyles.primary.backgroundColor}  
                    title="Apply" 
                    onPress={applyButtonHandler}  />
                </TouchableHighlight>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    listItemCss: {
        flex:1,
        width: '100%',
        alignItems: 'center',
        borderStyle: 'solid',
        backgroundColor:'#EDB222',
        marginTop: 15,
        padding: 10,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

  });

export default CouponItem;