import { CompositeNavigationProp, RouteProp } from '@react-navigation/native'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import {
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from '@react-navigation/native-stack'
import {
	DrawerNavigationProp,
	DrawerScreenProps,
} from '@react-navigation/drawer'

// Define the types for your stack navigator screens
export type RootStackParamList = {
	MealCategories: undefined
	MealOverView: { categoryId: string }
	MealDetail: { mealId: string }
	Favorites: undefined
	Drawer: undefined
	Feed: { sort: 'latest' | 'top' } | undefined
}

// Type for the navigation prop of MealCategories screen
export type MealCategoriesScreenProps = NativeStackScreenProps<
	RootStackParamList,
	'MealCategories'
>

// Type for the navigation prop of MealOverView screen
export type MealOverViewScreenProps = DrawerScreenProps<
	RootStackParamList,
	'MealOverView'
>

// Type for the navigation prop of MealDetail screen
export type MealDetailScreenProps = DrawerScreenProps<
	RootStackParamList,
	'MealDetail'
>
