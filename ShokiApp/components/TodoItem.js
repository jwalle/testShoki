import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../Styles/style.js';

export default class TodoItem extends React.Component
{
	_onPressButton()
	{
		console.log('doSomething');
	}

	render()
	{
		const item = this.props.item;

		return (
			<View style={style.todoItem}>
				<View style={style.todoTop}>
					<TouchableHighlight onPress={this._onPressButton}>
						{item.complete ?
							<Icon
								name="check-square-o"
								size={26}
								color={'green'} />
							:
							<Icon
								name="square-o"
								size={26}
								color={'black'} /> }
					</TouchableHighlight>
					<Text style={style.todoTitle}>{item.title}</Text>
				</View>
				<Text style={style.todoText}>
					{item.txt}
				</Text>
			</View>
		);
	}
}
