import React from 'react';
import {Text, View, StyleSheet} from "react-native";

export const Header = () => {
    return (
        <View style={[styles.header]}>
            <Text testID="total-restaurants" style={[styles.headerText]}>Count Restaurants Near You</Text>
        </View>
    )
};

export default Header;

const styles = StyleSheet.create({
    header: {
        marginTop: 48,
        marginBottom: 16
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }

})
