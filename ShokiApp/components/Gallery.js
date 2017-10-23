import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import style from '../Styles/style.js';

export default class Gallery extends React.Component
{
	render()
	{
		return (
			<View style={style.container}>
				<Text>Ici c est la gallerie</Text>
			</View>
		);
	}
}
