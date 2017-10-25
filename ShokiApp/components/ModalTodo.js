import React from 'react';
import {Button, Modal, Text, View, TextInput} from 'react-native';
import style from '../Styles/style.js';


export default class ModalTodo extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			title: '',
			text: ''
		};
	}

	submit()
	{
		this.props.submitTodo(this.state.title, this.state.text);
		this.props.onClose();
	}

	render()
	{
		if (!this.props.show)
			return null;

		const submitBtn = () =>
		{
			if (this.state.title && this.state.text)
			{
				return (
					<Button
						onPress={() => this.submit()}
						style={style.modalBtn}
						title="Envoyer"
						accessibilityLabel="Submit a Todo"
						color="#FF795A" />
				);
			}
		};

		return (
			<View>
				<Modal
					animationType="fade"
					transparent={false}
					onRequestClose={this.props.onClose} >
					<View style={style.modal}>
						<View>
							<Text>Rajouter un todo : </Text>
							<TextInput
								style={style.modalInput}
								placeholder="Titre"
								onChangeText={title => this.setState({title})} />
							<TextInput
								style={style.modalInput}
								placeholder="Contenue"
								onChangeText={text => this.setState({text})} />
							{submitBtn()}
						</View>
					</View>
				</Modal>
			</View>
		);
	}
}
