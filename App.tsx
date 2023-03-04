import React from 'react';
import AppLoading from 'expo-app-loading';
import theme from './src/global/styles/theme';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';

export default function App() {
	const [fontsLoaded] = useFonts({
		BebasNeue_400Regular,
		Roboto_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<ThemeProvider theme={theme}>
			<StatusBar style='light' />
			<Home />
		</ThemeProvider>
	);
}
