import React from 'react';
import {TabNavigator} from 'react-navigation';
import {View, StatusBar} from 'react-native';
import Profile from './components/Profile.js';
import Gallery from './components/Gallery.js';
import TodoList from './components/TodoList.js';
import style from './Styles/style.js';

const Tabs = TabNavigator({
	Profil: {screen: Profile},
	Gallerie: {screen: Gallery},
	Todo: {screen: TodoList}
});

export default class App extends React.Component
{
	render()
	{
		return (
			<View style={style.tabs}>
				<StatusBar hidden />
				<Tabs />
			</View>
		);
	}
}
