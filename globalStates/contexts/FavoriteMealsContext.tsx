import { MealT } from '../../types'
import React, { createContext, useState, useContext, ReactNode } from 'react'

// Define the type for the context value
type FavoriteMealsContextProps = {
	contextFavoriteMeals: MealT[]
	contextAddFavoriteMeal: (meal: MealT) => void
	contextRemoveFavoriteMeal: (mealId: string) => void
}

// Create the context
const FavoriteMealsContext = createContext<FavoriteMealsContextProps>({
	contextFavoriteMeals: [],
	contextAddFavoriteMeal: () => {},
	contextRemoveFavoriteMeal: () => {},
})

// Create a provider component
export const FavoriteMealsProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	// State to store the favorite meals
	const [contextFavoriteMeals, setContextFavoriteMeals] = useState<MealT[]>([])

	// Add a meal to favorites
	const contextAddFavoriteMeal = (meal: MealT) => {
		setContextFavoriteMeals((prevFavoriteMeals) => [...prevFavoriteMeals, meal])
	}

	// Remove a meal from favorites
	const contextRemoveFavoriteMeal = (mealId: string) => {
		setContextFavoriteMeals((prevFavoriteMeals) =>
			prevFavoriteMeals.filter((meal) => meal.id !== mealId),
		)
	}

	// Context value object
	const contextValue: FavoriteMealsContextProps = {
		contextFavoriteMeals,
		contextAddFavoriteMeal,
		contextRemoveFavoriteMeal,
	}

	// Provide the context value to the children components
	return (
		<FavoriteMealsContext.Provider value={contextValue}>
			{children}
		</FavoriteMealsContext.Provider>
	)
}

// Custom hook to access the favorite meals context
export const useContextFavoriteMeals = () => useContext(FavoriteMealsContext)
