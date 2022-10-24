import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { authStyles } from '../styles';
import { theme } from '../theme';

import Header from '../components/auth/Header';
import AppPhoneInput from '../components/auth/AppPhoneInput';
import AppButton from '../components/auth/AppButton';
import AppPassword from '../components/auth/AppPassword';

const LoginScreen = ({ navigation }) => {
	return (
		<View style={authStyles.container}>
			<View style={authStyles.form}>
				<Header title="Sign in" icon="user" />
				<AppPhoneInput />
				<AppPassword placeholder="Password"/>
				<TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
					<Text style={authStyles.signUp}>
						Don't have an account? Sign up
					</Text>
				</TouchableOpacity>
			</View>
			<View style={authStyles.buttonContainer}>
				<AppButton 
					onPress={() => navigation.navigate("VerificationScreen")} 
					color={theme.colors.primary} 
					title="Sign in" 
				/>
			</View>
		</View>
	)
};

export default LoginScreen;