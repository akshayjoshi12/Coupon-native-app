import React from "react";
import { View } from "react-native";
import FlashMessage from "react-native-flash-message";

const InfoMessage = () => {
    return (
        <View>
            <FlashMessage position="top" />
        </View>
    ); 
}

export default InfoMessage;