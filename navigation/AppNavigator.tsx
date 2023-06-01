import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { CategoriesScreen, MealOverViewScreen } from '../screens'
import { RootStackParamList } from '../types'
import { GlobalScreenOption } from '../constants'

const Stack = createNativeStackNavigator<RootStackParamList>()

export function AppNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={({ route }) => ({
					...GlobalScreenOption,
					headerShown: true,
				})}>
				<Stack.Screen
					name="MealCategories"
					component={CategoriesScreen}
					options={{
						title: 'Meals Categories',
					}}
				/>
				<Stack.Screen
					name="MealOverView"
					component={MealOverViewScreen}
					initialParams={{ categoryId: 'tetsId' }}
					options={({ route, navigation }) => ({
						title: route.params.categoryId,
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default AppNavigator
