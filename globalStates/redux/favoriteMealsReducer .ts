import { Action } from 'redux'

import { MealT } from '../../types'
import {
	REDUX_ADD_FAVORITE_MEAL,
	REDUX_REMOVE_FAVORITE_MEAL,
} from './constants'

export interface ReduxAddFavoriteMealAction
	extends Action<typeof REDUX_ADD_FAVORITE_MEAL> {
	payload: MealT
}

export interface ReduxRemoveFavoriteMealAction
	extends Action<typeof REDUX_REMOVE_FAVORITE_MEAL> {
	payload: string
}

export type ReduxFavoriteMealAction =
	| ReduxAddFavoriteMealAction
	| ReduxRemoveFavoriteMealAction

// Define the initial state
const initialState: MealT[] = []

// Redux reducer
export const reduxFavoriteMealsReducer = (
	state: MealT[] = initialState,
	action: ReduxFavoriteMealAction,
): MealT[] => {
	switch (action.type) {
		case REDUX_ADD_FAVORITE_MEAL:
			return [...state, action.payload]
		case REDUX_REMOVE_FAVORITE_MEAL:
			return state.filter((meal) => meal.id !== action.payload)
		default:
			return state
	}
}
