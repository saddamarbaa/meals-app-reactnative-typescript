import { View, Text, StyleSheet } from 'react-native'

export function FavoritesScreen() {
	return (
		<View style={styles.rootContainer}>
			<Text style={styles.text}>
				This is the <Text style={styles.highlight}>"Welcome"</Text> screen!
			</Text>
		</View>
	)
}

export default FavoritesScreen

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: 'white',
	},
	highlight: {
		fontWeight: 'bold',
		color: '#eb1064',
	},
})
