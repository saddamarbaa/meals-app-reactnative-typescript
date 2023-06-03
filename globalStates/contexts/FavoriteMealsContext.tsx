import { MealT } from '../../types'

import React, { createContext, useState, useContext, ReactNode } from 'react'

// Define the type for the context value
type FavoriteMealsContextProps = {
	favoriteMeals: MealT[]
	addFavoriteMeal: (meal: MealT) => void
	removeFavoriteMeal: (mealId: string) => void
}

// Create the context
const FavoriteMealsContext = createContext<FavoriteMealsContextProps>({
	favoriteMeals: [],
	addFavoriteMeal: () => {},
	removeFavoriteMeal: () => {},
})

// Create a provider component
export const FavoriteMealsProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	// State to store the favorite meals
	const [favoriteMeals, setFavoriteMeals] = useState<MealT[]>([])

	// Add a meal to favorites
	const addFavoriteMeal = (meal: MealT) => {
		setFavoriteMeals((prevFavoriteMeals) => [...prevFavoriteMeals, meal])
	}

	// Remove a meal from favorites
	const removeFavoriteMeal = (mealId: string) => {
		setFavoriteMeals((prevFavoriteMeals) =>
			prevFavoriteMeals.filter((meal) => meal.id !== mealId),
		)
	}

	// Context value object
	const contextValue: FavoriteMealsContextProps = {
		favoriteMeals,
		addFavoriteMeal,
		removeFavoriteMeal,
	}

	// Provide the context value to the children components
	return (
		<FavoriteMealsContext.Provider value={contextValue}>
			{children}
		</FavoriteMealsContext.Provider>
	)
}

// Custom hook to access the favorite meals context
export const useFavoriteMeals = () => useContext(FavoriteMealsContext)
