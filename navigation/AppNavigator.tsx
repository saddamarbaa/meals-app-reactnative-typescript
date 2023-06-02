import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { MealOverViewScreen, MealDetailScreen } from '../screens'
import { RootStackParamList } from '../types'
import { GlobalScreenOption } from '../constants'
import DrawerNavigator from './DrawerNavigator'

const Stack = createNativeStackNavigator<RootStackParamList>()

export function AppNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={({ route }) => ({
					...GlobalScreenOption,
					headerShown: true,
					headerTitleAlign: 'center',
				})}>
				<Stack.Screen
					name="Drawer"
					component={DrawerNavigator}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name="MealOverView"
					component={MealOverViewScreen}
					initialParams={{ categoryId: 'testId' }}
					options={({ route, navigation }) => ({
						title: route.params?.categoryId || '',
					})}
				/>
				<Stack.Screen name="MealDetail" component={MealDetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default AppNavigator
