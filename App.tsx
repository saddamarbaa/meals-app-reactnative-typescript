import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { AppNavigator } from './navigation'
import { FavoriteMealsProvider } from './globalStates'

export default function App() {
	return (
		<>
			<SafeAreaProvider>
				<StatusBar style="light" />
				<FavoriteMealsProvider>
					<AppNavigator />
				</FavoriteMealsProvider>
			</SafeAreaProvider>
		</>
	)
}
