import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Service from '../screens/sevices';

const Stack = createNativeStackNavigator();

const Router = () => {
	return (
		<Stack.Navigator
			initialRouteName='Service'
		>
			<Stack.Screen
				name="Service"
				component={Service}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	)
};

export default Router;