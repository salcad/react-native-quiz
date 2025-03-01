import { Text, View, StyleSheet } from 'react-native';
import React from 'react';

const ListingItem = ({ restaurant }) => {
    return (
        <View style={styles.item} testID="restaurant-item">
            <View>
                <Text testID="name" style={styles.name}>{restaurant.name}</Text>
                <Text testID="city" style={styles.city}>{restaurant.city}</Text>
            </View>
            <View style={{ width: '20%', alignItems: 'flex-end' }}>
                <View style={styles.userRatingContainer}>
                    <Text style={styles.star}>&#9733;</Text>
                    <Text testID="average-rating" style={styles.userRating}>
                        {restaurant.user_rating.average_rating}
                    </Text>
                </View>
                <Text testID="votes-count" style={styles.voteCount}>
                    {restaurant.user_rating.votes} votes
                </Text>
            </View>
        </View>
    );
};

export default ListingItem;

const styles = StyleSheet.create({
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4
    },
    city: {
        fontSize: 14,
        color: '#555'
    },
    item: {
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderColor: '#f8f8f8',
        borderWidth: 0.5,
        margin: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 3.84,
        elevation: 1,
    },
    userRatingContainer: {
        flexDirection: 'row',
        marginBottom: 4,
        alignItems: 'center'
    },
    star: {
        fontSize: 16
    },
    userRating: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 4,
    },
    voteCount: {
        fontSize: 10,
        color: '#2b2b2b'
    },
});
