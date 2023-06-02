import { StatusBar } from 'expo-status-bar'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppNavigator, DrawerNavigator } from './navigation'

export default function App() {
	return (
		<>
			<SafeAreaProvider>
				<StatusBar style="light" />
				<AppNavigator />
				{/* <DrawerNavigator /> */}
			</SafeAreaProvider>
		</>
	)
}
