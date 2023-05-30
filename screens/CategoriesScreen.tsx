import React, { useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Platform,
	SafeAreaView,
} from 'react-native'

import { CATEGORIES } from '../utils'
import { CategoryGridTitle } from '../components'
import { CategoryT } from '../types'

export default function CategoriesScreen() {
	const [refreshing, setRefreshing] = useState(false)

	function renderCategoryItem(category: CategoryT) {
		return <CategoryGridTitle color={category.color} title={category.title} />
	}

	const handleRefresh = () => {
		setRefreshing((prevState) => !prevState)
	}

	const myItemSeparator = () => {
		return <View style={{ backgroundColor: 'grey' }} />
	}

	const myListEmpty = () => {
		return null
	}

	return (
		<SafeAreaView style={styles.droidSafeArea}>
			<View>
				<FlatList
					alwaysBounceVertical={false}
					data={CATEGORIES}
					renderItem={({ item, index, separators }) => renderCategoryItem(item)}
					keyExtractor={(item) => item.id}
					ItemSeparatorComponent={myItemSeparator}
					ListEmptyComponent={myListEmpty}
					refreshing={refreshing}
					onRefresh={handleRefresh}
					numColumns={2}
				/>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	droidSafeArea: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? 25 : 10,
		margin: 15,
	},
	buttonsContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	buttonTexStyle: { fontWeight: 'bold', fontSize: 25 },
	buttonOuterContainerStyle: {
		margin: 4,
		flex: 1,
		borderRadius: 28,
		marginTop: 10,
	},
	buttonInnerContainer: {
		// backgroundColor: colors.primary500,
		elevation: 2,
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
	logsContainer: {
		flexDirection: 'column',
	},
	listContainer: {
		flex: 1,
		flexDirection: 'column',
		paddingVertical: 5,
	},
})
