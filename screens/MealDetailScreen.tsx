import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	ScrollView,
} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

import { MealDetailScreenProps, MealT } from '../types'
import { MEALS } from '../utils'
import { colors } from '../constants'
import { Card } from '../components'
import { useFavoriteMeals } from '../globalStates'

export function MealDetailScreen({ navigation, route }: MealDetailScreenProps) {
	const [meal, setMeal] = useState<MealT | null>(null)
	const { favoriteMeals, addFavoriteMeal, removeFavoriteMeal } =
		useFavoriteMeals()
	const [isFavorite, setIsFavorite] = useState(false)

	useLayoutEffect(() => {
		const { mealId } = route.params
		const selectedMeal = MEALS.find((meal) => meal.id === mealId)
		setMeal(selectedMeal || null)
		setIsFavorite(selectedMeal ? favoriteMeals.includes(selectedMeal) : false)
	}, [route.params, favoriteMeals])

	useLayoutEffect(() => {
		const { mealId } = route.params
		const IconName = isFavorite ? 'star' : 'star-outline'
		navigation.setOptions({
			title: mealId,
			headerTitleStyle: {
				fontWeight: 'bold',
				fontSize: 22,
			},
			headerTitleAlign: 'center',
			headerLeft: () => (
				<TouchableOpacity
					style={styles.backButton}
					onPress={() => navigation.goBack()}>
					<MaterialIcons name="arrow-back" size={24} color={colors.white} />
				</TouchableOpacity>
			),
			headerRight: () => (
				<TouchableOpacity
					style={styles.heartButton}
					onPress={handleAddToFavorites}>
					<Ionicons
						name={IconName as 'star'}
						size={24}
						color={isFavorite ? colors.yellow500 : colors.white}
					/>
				</TouchableOpacity>
			),
		})
	}, [navigation, meal, isFavorite])

	function handleAddToFavorites() {
		if (meal) {
			if (isFavorite) {
				removeFavoriteMeal(meal.id)
				console.log('Meal removed from favorites:', meal.title)
			} else {
				addFavoriteMeal(meal)
				console.log('Meal added to favorites:', meal.title)
			}
			setIsFavorite(!isFavorite)
		} else {
			console.log('Meal is null')
		}
	}

	return meal ? (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.scrollViewContent}>
				<Image source={{ uri: meal.imageUrl }} style={styles.image} />
				<View style={styles.detailsContainer}>
					<Text style={styles.title}>{meal.title}</Text>
					<View style={styles.details}>
						<Text style={styles.detailItem}>{meal.duration} min</Text>
						<Text style={styles.detailItem}>
							{meal.complexity.toUpperCase()}
						</Text>
						<Text style={styles.detailItem}>
							{meal.affordability.toUpperCase()}
						</Text>
					</View>
				</View>
				<View style={styles.sectionContainer}>
					<Text style={styles.sectionTitle}>Ingredients</Text>
					{meal.ingredients.map((ingredient, index) => (
						<Card style={styles.card} key={index}>
							<Text style={styles.text}>{ingredient}</Text>
						</Card>
					))}
				</View>
				<View style={styles.sectionContainer}>
					<Text style={styles.sectionTitle}>Steps</Text>
					{meal?.steps?.map((step, index) => (
						<Card style={styles.card} key={index}>
							<Text style={styles.text}>{step}</Text>
						</Card>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	) : null
}

export default MealDetailScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	card: {
		backgroundColor: colors.primary800,
		marginBottom: 8,
		paddingVertical: 8,
		paddingHorizontal: 16,
		borderRadius: 10,
	},
	backButton: {
		marginLeft: 10,
		padding: 5,
	},
	scrollViewContent: {
		flexGrow: 1,
		paddingBottom: 20,
	},
	image: {
		width: '100%',
		height: 250,
		resizeMode: 'cover',
	},
	detailsContainer: {
		padding: 20,
		alignItems: 'center',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 24,
		marginBottom: 10,
		textAlign: 'center',
		color: colors.white,
	},
	details: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	sectionContainer: {
		paddingHorizontal: 20,
		marginVertical: 10,
	},
	sectionTitle: {
		fontWeight: 'bold',
		fontSize: 22,
		marginBottom: 10,
		color: colors.white,
		textAlign: 'center',
	},
	text: {
		fontSize: 16,
		color: colors.white,
		textAlign: 'center',
		padding: 6,
	},
	detailItem: {
		fontSize: 18,
		color: colors.white,
		textAlign: 'center',
	},
	heartButton: {
		marginRight: 10,
		padding: 5,
	},
})
