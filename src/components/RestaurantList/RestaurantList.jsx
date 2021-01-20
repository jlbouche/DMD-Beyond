import React from 'react'
import { Card } from 'semantic-ui-react'
import RestaurantCard from '../RestaurantCard/RestaurantCard'

export default function RestaurantList({restaurants, numCol}){

    return (
        <Card.Group itemsPerRow={numCol} stackable>
            {restaurants.map((restaurant) => {
                <RestaurantCard restaurant={restaurant} />
            })}
        </Card.Group>
    )
}