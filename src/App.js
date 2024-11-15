import React, {useEffect, useState} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Listing from "./Listing";
import Header from "./Header";
import {colors} from "./styles";

const App = () => {

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Header/>
                <Listing/>
            </View>
            <View style={styles.progressContainer}>
                <ActivityIndicator testID="progress" size="large" color={colors.brandColor}/>
            </View>
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4'
    },
    progressContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

