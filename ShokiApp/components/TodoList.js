import React from 'react';
import {Button, AsyncStorage, View, ListView} from 'react-native';
import TodoItem from './TodoItem.js';
import ModalTodo from './ModalTodo.js';

export default class TdList extends React.Component
{
	constructor(props)
	{
		super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			items: [],
			inputOpen: false
		};
		this.toggleModal = this.toggleModal.bind(this);
		this.submitTodo = this.submitTodo.bind(this);
	}

	componentWillMount()
	{
		this._updateTodo().done();
	}

	async _updateTodo()
	{
		const response = await AsyncStorage.getItem('DATA');
		const items = await JSON.parse(response) || [];

		this.setState({
			items
		});
	}

	toggleModal()
	{
		this.setState({
			inputOpen: !this.state.inputOpen
		});
	}

	async submitTodo(title, txt)
	{
		const items = this.state.items;
		items.push({
			title,
			txt,
			complete: false
		});
		await AsyncStorage.setItem('DATA', JSON.stringify(items));
		console.log(title, text);
	}

	render()
	{
		const ds = this.ds.cloneWithRows(this.state.items);
		return (
			<View>
				<Button
					onPress={() => this.toggleModal()}
					title="Add a Todo"
					accessibilityLabel="Add a Todo"
					color="#FF795A" />
				<ListView
					enableEmptySections
					dataSource={ds}
					renderRow={(rowData, rowID) =>
						(<TodoItem
							item={rowData}
							id={rowID} />)
					} />
				<ModalTodo
					show={this.state.inputOpen}
					submitTodo={this.submitTodo}
					onClose={this.toggleModal} />
			</View>
		);
	}
}
