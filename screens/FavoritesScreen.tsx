import {
	SafeAreaView,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	FlatList,
} from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'

import { FavoriteMealScreenProps, MealT } from '../types'
import { colors } from '../constants'
import { Card, FormButton } from '../components'
import {
	RootState,
	reduxRemoveFavoriteMeal,
	useContextFavoriteMeals,
} from '../globalStates'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export function FavoritesScreen({
	navigation,
	route,
}: FavoriteMealScreenProps) {
	const {
		contextAddFavoriteMeal,
		contextFavoriteMeals,
		contextRemoveFavoriteMeal,
	} = useContextFavoriteMeals()
	const reduxFavoriteMeals = useSelector(
		(state: RootState) => state.reduxFavoriteMeals,
	)
	const [refreshing, setRefreshing] = useState(false)
	const dispatch = useDispatch()
	const handleReRedirect = () => {
		navigation.navigate('MealCategories')
	}

	const handleRefresh = () => {
		setRefreshing((prevState) => !prevState)
	}

	const myItemSeparator = () => {
		return <View style={{ backgroundColor: 'grey' }} />
	}

	const renderEmptyFavorites = () => (
		<View style={styles.emptyFavoritesContainer}>
			<Card style={styles.card}>
				<Text style={styles.emptyFavoritesText}>
					No favorite items found. Start adding some!
				</Text>
				<FormButton
					buttonTitle="ADD NEW"
					onPress={handleReRedirect}
					buttonContainerStyle={{ backgroundColor: colors?.main }}
				/>
			</Card>
		</View>
	)

	const renderMealItem = (item: MealT) => (
		<View>
			<Image source={{ uri: item.imageUrl }} style={styles.image} />
			<View style={styles.detailsContainer}>
				<Text style={styles.title}>{item.title}</Text>
				<View style={styles.details}>
					<Text style={styles.detailItem}>{item.duration} min</Text>
					<Text style={styles.detailItem}>{item.complexity.toUpperCase()}</Text>
					<Text style={styles.detailItem}>
						{item.affordability.toUpperCase()}
					</Text>
				</View>
			</View>
			<View style={styles.sectionContainer}>
				<Text style={styles.sectionTitle}>Ingredients</Text>
				{item.ingredients.map((ingredient, index) => (
					<Card style={styles.card} key={index}>
						<Text style={styles.text}>{ingredient}</Text>
					</Card>
				))}
			</View>
			<View style={styles.sectionContainer}>
				<Text style={styles.sectionTitle}>Steps</Text>
				{item.steps?.map((step, index) => (
					<Card style={styles.card} key={index}>
						<Text style={styles.text}>{step}</Text>
					</Card>
				))}
			</View>
			<TouchableOpacity
				style={styles.removeButton}
				onPress={() => {
					// contextRemoveFavoriteMeal(meal.id)
					dispatch(reduxRemoveFavoriteMeal(item.id))
				}}>
				<AntDesign name="heart" size={24} color="red" />
			</TouchableOpacity>
		</View>
	)

	return (
		<SafeAreaView style={styles.appContainer}>
			<View style={styles.container}>
				<FlatList
					alwaysBounceVertical={false}
					data={reduxFavoriteMeals}
					renderItem={({ item, index, separators }) => {
						return renderMealItem(item)
					}}
					keyExtractor={(item, index) => item.id}
					ItemSeparatorComponent={myItemSeparator}
					ListEmptyComponent={renderEmptyFavorites}
					contentContainerStyle={styles.scrollViewContent}
					refreshing={refreshing}
					onRefresh={handleRefresh}
				/>
			</View>
			{/* <Footer /> */}
		</SafeAreaView>
	)
}

export default FavoritesScreen

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
	},
	container: {
		flex: 1,
	},
	card: {
		backgroundColor: colors.primary800,
		marginBottom: 20,
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
	removeButton: {
		position: 'absolute',
		top: 10,
		right: 10,
		backgroundColor: 'transparent',
		padding: 10,
	},
	emptyFavoritesContainer: {
		flex: 1,
		margin: 10,
		marginTop: 100,
		padding: 4,
	},
	emptyFavoritesText: {
		fontSize: 17,
		textAlign: 'center',
		color: 'white',
	},
})
