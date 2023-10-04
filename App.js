import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/navigation/router';

const App = () => {
	return (
		<SafeAreaView style={styles.container}>
			<NavigationContainer>
				<Router />
			</NavigationContainer>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white'
	}
});

export default App;
