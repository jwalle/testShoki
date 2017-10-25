import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export default {
	tabs: {
		flex: 1
	},
	profileView: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	},
	profilePic: {
		flex: 2,
		width: 200,
		height: 200,
		borderRadius: 100,
		marginTop: 30,
		borderWidth: 2,
		borderColor: 'steelblue'
	},
	name: {
		flex: 1,
		marginTop: 15,
		fontSize: 20,
		fontWeight: 'bold'
	},
	describeView: {
		flex: 3,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	describeText: {
		marginLeft: 10,
		fontSize: 14
	},
	image: {
		width,
		height: height / 3,
		resizeMode: 'cover'
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	todoItem: {
		backgroundColor: '#FF795A',
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderBottomWidth: 1,
		borderWidth: 0,
		borderBottomColor: '#000'
	},
	todoTitle: {
		color: '#000',
		fontSize: 20,
		paddingLeft: 20
	},
	todoTop: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	todoText: {
		color: '#fff',
		fontSize: 16
	},
	modalInput: {
		fontSize: 20,
		padding: 20
	},
	modal: {
		backgroundColor: '#ff553e',
		padding: 20,
		height: height / 3
	},
	modalBtn: {
		MarginVertical: 50,
		MarginHorizontal: 20
	}
};
