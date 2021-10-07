import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import VerificationScreen from '../screens/VerificationScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const RootNavigator = () => {
	return (
		<Stack.Navigator 
			initialRouteName="LoginScreen" 
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name="LoginScreen" component={LoginScreen} />
			<Stack.Screen name="SignUpScreen" component={SignUpScreen} />
			<Stack.Screen name="VerificationScreen" component={VerificationScreen} />
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
		</Stack.Navigator>
	)
}

export default RootNavigator;