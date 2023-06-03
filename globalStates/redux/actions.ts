import { MealT } from '../../types'
import {
	REDUX_ADD_FAVORITE_MEAL,
	REDUX_REMOVE_FAVORITE_MEAL,
} from './constants'

// Redux actions
export const reduxAddFavoriteMeal = (meal: MealT) => ({
	type: REDUX_ADD_FAVORITE_MEAL,
	payload: meal,
})

export const reduxRemoveFavoriteMeal = (mealId: string) => ({
	type: REDUX_REMOVE_FAVORITE_MEAL,
	payload: mealId,
})
