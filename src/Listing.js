import React from 'react';
import { FlatList } from 'react-native';
import ListingItem from './ListingItem';

const Listing = ({ restaurants }) => {
    return (
        <FlatList
            data={restaurants}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <ListingItem restaurant={item} />}
        />
    );
};

export default Listing;
