import { StyleSheet } from 'react-native';
import { colors } from '../utils/theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 10
	},
	serviceText: {
		fontSize: 20,
		fontWeight: '600',
		marginLeft: 10,
		color: colors.black
	},
	tabContainer: {
		height: 50,
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	},
	tab: {
		flex: 1,
		alignItems: 'center',
		borderBottomWidth: 1,
		justifyContent: 'center',
		borderColor: colors.gray
	},
	selectedTab: {
		borderBottomWidth: 1.5,
		borderColor: colors.yellow
	},
	tabTitle: {
		color: colors.gray,
		fontWeight: '400'
	},
	selectedTitle: {
		fontSize: 16,
		color: colors.black,
		fontWeight: '500'
	},
	settingIcon: {
		height: 35,
		width: 35
	}
});

export default styles;