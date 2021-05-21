import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';

import { BRANDS } from '../data/brand-data';



const HomeScreen = (props) => {
    const brandClickHandler = (brandId) => {
        props.navigation.navigate({
            routeName: 'ApplyCoupon', params:{brandId: brandId}
        });
    }
    
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity title={itemData.item.title} 
                onPress={(brandId) => {
                    props.navigation.navigate({
                        routeName: 'ApplyCoupon', params:{brandId: itemData.item.id, title: itemData.item.title, brandImage: itemData.item.brandImage, brandDesc: itemData.item.description}
                    });
                }}>
                <View style={[styles.gridItem, { backgroundColor: itemData.item.color}]}>
                    <Text style={styles.gridTitle}>{itemData.item.title}</Text>
                    <Text style={styles.gridPrice}>Rs.{itemData.item.price}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return (
        <SafeAreaView style={styles.gridContainer}>
            <FlatList
            keyExtractor={(item, index) => item.id}
            data={BRANDS}
            renderItem={renderGridItem}
            numColumns={2}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    gridContainer:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 500,
    },
    gridTitle: {
        fontFamily: 'open-sans-extrabold',
    },
    gridPrice: {
        fontFamily: 'open-sans-italic',
    },
    gridItem:{
        justifyContent: 'flex-end',
        margin: 15,
        elevation: 5,
        shadowColor: '#333',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 10,
        marginTop: 10,
        padding: 30,
        height: 150,
        width: 150,
    },

});

export default HomeScreen;