import React from 'react';
import {Dimensions, FlatList, Image, View} from 'react-native';
import style from '../Styles/style.js';

const {width} = Dimensions.get('window');

const url1 = 'https://images.unsplash.com/photo-';
const url2 = '&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D';

export default class Gallery extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			images: [
				'1458819757519-7581bade511d?w=',
				'1475759697283-38cc56e4455a?w=',
				'1502471602546-17554aac1160?w=',
				'1438824086897-500332bf6e9b?w=',
				'1454435840133-795d84feef63?w=',
				'1421986598195-0d9c26ecfcde?w=',
				'1461988279488-1dac181a78f9?w=',
				'1445888985293-8e1b904061c4?w=',
				'1447933601403-0c6688de566e?w=',
				'1497935586351-b67a49e012bf?w='
			]
		};
	}

	render()
	{
		return (
			<View style={style.container}>
				<FlatList
					data={this.state.images}
					keyExtractor={(item, index) => index}
					renderItem={({item}) => (
						<Image
							style={style.image}
							source={{
								uri: url1 + item + width + url2
							}} />
					)} />
			</View>
		);
	}
}
