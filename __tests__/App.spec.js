import 'react-native';
import React from 'react';
import {render, cleanup, waitFor} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import Listing from '../src/Listing'
import App from '../src/App';
import ListingItem from "../src/ListingItem";
import {FlatList} from 'react-native'

const TEST_IDS = {
    RESTAURANT_COUNT: 'total-restaurants',
    RESTAURANT_ITEM: 'restaurant-item',
    VOTES_COUNT: 'votes-count',
    AVERAGE_RATING: 'average-rating',
    CITY: 'city',
    NAME: 'name',
    PROGRESS: 'progress'
}

describe('Restaurant Listing', () => {

    const restaurantsResponse = {
        "page": 1,
        "per_page": 10,
        "total": 7,
        "total_pages": 1,
        "data": [{
            "city": "Boston",
            "name": "Boathouse",
            "estimated_cost": 150,
            "user_rating": {"average_rating": 4.5, "votes": 1061},
            "id": 121
        }, {
            "city": "Boston",
            "name": "Sector 7 Social",
            "estimated_cost": 140,
            "user_rating": {"average_rating": 4.8, "votes": 2435},
            "id": 122
        }, {
            "city": "Boston",
            "name": "Food@U",
            "estimated_cost": 70,
            "user_rating": {"average_rating": 4.2, "votes": 2056},
            "id": 123
        }, {
            "city": "Boston",
            "name": "The Night Factory",
            "estimated_cost": 80,
            "user_rating": {"average_rating": 3.9, "votes": 1983},
            "id": 124
        }, {
            "city": "Boston",
            "name": "La Pino'z Pizza",
            "estimated_cost": 550,
            "user_rating": {"average_rating": 4.3, "votes": 1271},
            "id": 125
        }, {
            "city": "Boston",
            "name": "Bhena Da Dhaba",
            "estimated_cost": 250,
            "user_rating": {"average_rating": 3.8, "votes": 1466},
            "id": 126
        }, {
            "city": "Boston",
            "name": "Cafe Z",
            "estimated_cost": 120,
            "user_rating": {"average_rating": 4.5, "votes": 1181},
            "id": 127
        }]
    }

    beforeEach(() => {
        global.fetch = jest.fn().mockImplementationOnce(
            () => Promise.resolve({json: () => Promise.resolve(restaurantsResponse)})
        );
    })

    afterEach(() => {
        cleanup();
    });

    it('should render the restaurant listing', () => {
        const tree = render(<Listing restaurants={restaurantsResponse.data}/>)
        expect(tree.UNSAFE_getAllByType(FlatList).length).toBe(1)
        expect(tree.UNSAFE_getAllByType(ListingItem).length).toBe(restaurantsResponse.data.length)
    });

    it('should render the Restaurant List Item correctly', () => {
        restaurantsResponse.data.map(restaurant => {
            const tree = render(<ListingItem restaurant={restaurant} />); // Updated here
            expect(tree.getByTestId(TEST_IDS.NAME)).toHaveTextContent(restaurant.name);
            expect(tree.getByTestId(TEST_IDS.CITY)).toHaveTextContent(restaurant.city);
            expect(tree.getByTestId(TEST_IDS.AVERAGE_RATING)).toHaveTextContent(restaurant.user_rating.average_rating);
            expect(tree.getByTestId(TEST_IDS.VOTES_COUNT)).toHaveTextContent(restaurant.user_rating.votes);
        });
    });    

    it('should render the progress bar while the data is loading and hide after its loaded', async () => {
        let wrapper = render(<App/>);
        expect(wrapper.getByTestId(TEST_IDS.PROGRESS)).toBeDefined();

        await waitFor(() => {
            expect(wrapper.queryByTestId(TEST_IDS.PROGRESS)).toBeFalsy();
            expect(wrapper.UNSAFE_getAllByType(FlatList).length).toBe(1);
            expect(wrapper.UNSAFE_getAllByType(ListingItem).length).toBe(restaurantsResponse.data.length)
        })
    })

    it('should render the header correctly', async () => {
        let wrapper = render(<App/>);

        await waitFor(() => {
            expect(wrapper.queryByTestId(TEST_IDS.PROGRESS)).toBeFalsy();
            expect(wrapper.getByTestId(TEST_IDS.RESTAURANT_COUNT)).toHaveTextContent(restaurantsResponse.data.length)
        })
    })


});

