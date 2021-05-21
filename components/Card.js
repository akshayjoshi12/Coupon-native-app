import React from 'react';

import { View, StyleSheet } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.cardContainer} >{props.children}</View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        padding: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

export default Card;