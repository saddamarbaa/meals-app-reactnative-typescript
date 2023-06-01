import { Dimensions } from 'react-native'
import { colors } from './colors'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default {
	window: {
		width,
		height,
	},
	isSmallDevice: width < 375,
}

export const GlobalScreenOption = {
	headerStyle: { backgroundColor: colors.main },
	contentStyle: {
		backgroundColor: colors.secondary,
	},
	headerTitleStyle: { color: colors.white },
	headerTintColor: colors.white,
	headerTitleAlign: 'center',
}
