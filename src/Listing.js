import React from 'react';
import {FlatList} from "react-native";

export const Listings = ({restaurants}) => {


    return (
        <FlatList
            keyExtractor={(item) => item.id.toString()}
        />
    )
}

export default Listings;

