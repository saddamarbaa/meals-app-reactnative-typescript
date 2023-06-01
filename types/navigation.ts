import { CompositeNavigationProp } from '@react-navigation/native'
import {
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from '@react-navigation/native-stack'

export type RootStackParamList = {
	MealCategories: undefined
	MealOverView: { categoryId: string }
	MealDetail: { mealId: string }
	Feed: { sort: 'latest' | 'top' } | undefined
}

export type MealCategoriesScreenProps = NativeStackScreenProps<
	RootStackParamList,
	'MealCategories'
>

export type MealOverViewScreenProps = NativeStackScreenProps<
	RootStackParamList,
	'MealOverView'
>

export type MealDetailScreenProps = NativeStackScreenProps<
	RootStackParamList,
	'MealDetail'
>
