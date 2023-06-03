import { combineReducers } from 'redux'

import { reduxFavoriteMealsReducer } from './favoriteMealsReducer '
import { MealT } from '../../types'

interface FavoritesState {
	reduxFavoriteMeals: MealT[]
}

// Redux store
export const reduxRootReducer = combineReducers<FavoritesState>({
	reduxFavoriteMeals: reduxFavoriteMealsReducer,
})
export default reduxRootReducer
