import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Platform,
	FlatList,
} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'

import { MaterialIcons } from '@expo/vector-icons'
import { MealOverViewScreenProps, MealT } from '../types'
import { MEALS } from '../utils'
import { MealItem } from '../components'

export function MealOverViewScreen({
	navigation,
	route,
}: MealOverViewScreenProps) {
	const [filteredMeals, setFilteredMeals] = useState<MealT[]>([])
	const [refreshing, setRefreshing] = useState(false)

	useLayoutEffect(() => {
		const { categoryId } = route.params

		console.log(categoryId)
		const mealsInCategory = MEALS.filter((meal) =>
			meal.categoryIds.includes(categoryId),
		)
		setFilteredMeals(mealsInCategory)
	}, [route.params])

	useLayoutEffect(() => {
		const { categoryId } = route.params
		navigation.setOptions({
			title: categoryId,
			// headerTintColor: 'white',
			headerTitleStyle: {
				fontWeight: 'bold',
				fontSize: 22,
				// color: 'white',
			},
			headerTitleAlign: 'center',
			headerLeft: () => (
				<TouchableOpacity
					style={styles.backButton}
					onPress={() => navigation.goBack()}>
					<MaterialIcons name="arrow-back" size={24} color="white" />
				</TouchableOpacity>
			),
		})
	}, [navigation])

	const handleRefresh = () => {
		setRefreshing((prevState) => !prevState)
	}

	const myItemSeparator = () => {
		return <View style={{ backgroundColor: 'grey' }} />
	}

	const myListEmpty = () => {
		return null
	}

	const onProgress = (categoryId: string) => {
		if (categoryId) {
			navigation.navigate('MealOverView', {
				categoryId: categoryId,
			})
		}
	}

	const renderMealItem = (meal: MealT) => {
		const MealItemProps = {
			id: meal.id,
			categoryIds: meal.categoryIds,
			title: meal.title,
			affordability: meal.affordability,
			complexity: meal.complexity,
			imageUrl: meal.imageUrl,
			duration: meal.duration,
			ingredients: meal.ingredients,
			steps: meal.steps,
			isGlutenFree: meal.isGlutenFree,
			isVegan: meal.isVegan,
			isVegetarian: meal.isVegetarian,
			isLactoseFree: meal.isLactoseFree,
		}
		return <MealItem {...MealItemProps} />
	}

	return (
		<SafeAreaView style={styles.droidSafeArea}>
			<View>
				<FlatList
					alwaysBounceVertical={false}
					data={filteredMeals}
					renderItem={({ item, index, separators }) => renderMealItem(item)}
					keyExtractor={(item) => item.id}
					ItemSeparatorComponent={myItemSeparator}
					ListEmptyComponent={myListEmpty}
					refreshing={refreshing}
					onRefresh={handleRefresh}
					// numColumns={2}
				/>
			</View>
		</SafeAreaView>
	)
}

export default MealOverViewScreen

const styles = StyleSheet.create({
	droidSafeArea: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? 25 : 10,
		margin: 15,
	},
	card: {
		flex: 1,
		// backgroundColor: colors.primary800,
		alignItems: 'center',
	},
	text: {
		// color: colors.yellow500,
		fontSize: 20,
		fontWeight: 'bold',
		fontFamily: 'open-sans',
	},
	backButton: {
		marginLeft: 10,
		padding: 5,
	},
})
