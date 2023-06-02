import * as React from 'react'
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons'

import { CategoriesScreen, FavoritesScreen } from '../screens'
import { RootStackParamList } from '../types'
import { GlobalScreenOption, colors } from '../constants'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator<RootStackParamList>()

export function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={({ route }) => ({
				...GlobalScreenOption,
				headerShown: true,
				headerTitleAlign: 'center',
				sceneContainerStyle: { backgroundColor: colors.secondary },
				drawerContentStyle: {
					backgroundColor: colors.main,
				},
				drawerInactiveTintColor: colors.white,
				drawerActiveTintColor: colors.main,

				drawerActiveBackgroundColor: '#e4baa1',
			})}>
			<Drawer.Screen
				name="MealCategories"
				component={CategoriesScreen}
				options={{
					title: 'All Categories',
					drawerLabel: 'Categories',
					drawerIcon: ({ color, size }) => (
						<Ionicons name="list" color={color} size={size} />
					),
				}}
			/>

			<Drawer.Screen
				name="Favorites"
				component={FavoritesScreen}
				options={{
					drawerIcon: ({ color, size }) => (
						<Ionicons name="star" color={color} size={size} />
					),
				}}
			/>
		</Drawer.Navigator>
	)
}

export default DrawerNavigator
