import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	Pressable,
	Image,
	Platform,
} from 'react-native'

import { Card } from './Card'
import { MealT, RootStackParamList } from '../types'
import { NavigationProp, useNavigation } from '@react-navigation/native'

interface Props extends MealT {
	onProgress?: (id: string) => void
}

export function MealItem({
	id,
	categoryIds,
	title,
	affordability,
	complexity,
	imageUrl,
	duration,
	ingredients,
	steps,
	isGlutenFree,
	isVegan,
	isVegetarian,
	isLactoseFree,
	onProgress,
}: Props) {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>()

	const handlePress = (mealId: string) => {
		if (mealId) {
			navigation.navigate('MealDetail', {
				mealId: mealId,
			})
		}
	}
	return (
		<Card style={styles.mealItem}>
			<Pressable
				onPress={() => {
					handlePress(id)
				}}
				style={({ pressed }) => [styles.button, pressed && styles.pressedItem]}
				android_ripple={{ color: '#ccc' }}>
				<View style={styles.innerContainer}>
					<Image source={{ uri: imageUrl }} style={styles.image} />
					<Text style={styles.title}>{title}</Text>
					<View style={styles.details}>
						<Text style={styles.detailItem}>{duration}m</Text>
						<Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
						<Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
					</View>
				</View>
			</Pressable>
		</Card>
	)
}

export default MealItem

const styles = StyleSheet.create({
	mealItem: {
		padding: 0,
		paddingBottom: 2,
	},
	button: {
		flex: 1,
	},
	innerContainer: {
		overflow: 'hidden',
		borderRadius: 8,
		// padding: 2,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 17,
		textAlign: 'center',
		margin: 8,
	},
	pressedItem: {
		opacity: 0.5,
	},
	image: {
		aspectRatio: 16 / 9,
	},
	details: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
	},
	detailItem: {
		marginHorizontal: 5,
		fontSize: 13,
	},
})
