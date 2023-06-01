import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

import { Card } from './Card'

type Props = {
	title: string
	color: string
	id: string
	onProgress: (id: string) => void
}
export function CategoryGridTitle({ title, color, id, onProgress }: Props) {
	return (
		<Card style={styles.gridItem}>
			<Pressable
				onPress={() => {
					if (onProgress && id) {
						onProgress(id)
					}
				}}
				style={({ pressed }) => {
					// for IOS ripple effect
					return [styles.button, pressed && styles.pressedItem]
				}}
				android_ripple={{ color: '#ccc' }}>
				<View
					style={[
						styles.innerContainer,
						{
							backgroundColor: color,
						},
					]}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</Card>
	)
}

export default CategoryGridTitle

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		padding: 0,
		margin: 16,
		height: 150,
		// overflow: 'hidden',
	},
	button: {
		flex: 1,
	},
	innerContainer: {
		borderRadius: 6,
		flex: 1,
		padding: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 17,
	},
	pressedItem: {
		opacity: 0.5,
	},
})
