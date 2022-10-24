import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import Icon from '@expo/vector-icons/FontAwesome'

import { theme } from '../../theme';
import { inputStyles } from '../../styles';

const AppPassword = ({ placeholder, ...otherProps }) => {
	return (
		<View style={inputStyles.mainContainer}>
			
			<TextInput 
				placeholder={placeholder} 
				style={styles.input} 
				{...otherProps} 
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	input: {
		
		backgroundColor: theme.colors.white,
		color: theme.colors.black,
		width: '100%',
		fontSize: 15,
		paddingLeft: 10
	}
})

export default AppPassword;