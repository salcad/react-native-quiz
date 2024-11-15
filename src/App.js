import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import Listing from './Listing';
import Header from './Header';
import { colors } from './styles';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [restaurants, setRestaurants] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        fetch('https://jsonmock.hackerrank.com/api/food_outlets')
            .then(response => response.json())
            .then(data => {
                setRestaurants(data.data);
                setTotal(data.total);
                setIsLoading(false);
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <View style={styles.progressContainer}>
                    <ActivityIndicator testID="progress" size="large" color={colors.brandColor} />
                </View>
            ) : (
                <View style={styles.container}>
                    <Header total={total} />
                    <Listing restaurants={restaurants} />
                </View>
            )}
        </View>
    );
};

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
});
