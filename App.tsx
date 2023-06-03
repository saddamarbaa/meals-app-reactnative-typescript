import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as ReduxProvider } from 'react-redux'

import { AppNavigator } from './navigation'
import { FavoriteMealsProvider as ContextProvider, store } from './globalStates'

export default function App() {
	return (
		<>
			<SafeAreaProvider>
				<StatusBar style="light" />
				<ContextProvider>
					<ReduxProvider store={store}>
						<AppNavigator />
					</ReduxProvider>
				</ContextProvider>
			</SafeAreaProvider>
		</>
	)
}
