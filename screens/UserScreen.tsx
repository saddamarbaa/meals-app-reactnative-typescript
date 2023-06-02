import { CompositeNavigationProp } from '@react-navigation/native'
import {
	NativeStackNavigationProp,
	NativeStackScreenProps,
} from '@react-navigation/native-stack'
import {
	DrawerNavigationProp,
	DrawerScreenProps,
} from '@react-navigation/drawer'
import { View, Text, Button, StyleSheet } from 'react-native'
import { RootStackParamList } from '../types'

type UserScreenNavigationProps = DrawerNavigationProp<
	RootStackParamList,
	'User'
>

type UserScreenStackNavigationProps =
	NativeStackNavigationProp<RootStackParamList>

type NavigationProps = CompositeNavigationProp<
	UserScreenNavigationProps,
	UserScreenStackNavigationProps
>

type Props = {
	navigation: NavigationProps
}

export function UserScreen({ navigation }: Props) {
	function openDrawerHandler() {
		navigation.toggleDrawer()
	}

	return (
		<View style={styles.rootContainer}>
			<Text>
				This is the <Text style={styles.highlight}>"User"</Text> screen!
			</Text>
			<Button title="Open Drawer" onPress={openDrawerHandler} />
		</View>
	)
}

export default UserScreen

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	highlight: {
		fontWeight: 'bold',
		color: '#eb1064',
	},
})
