import React from 'react';
import AppLoading from 'expo-app-loading';
import theme from './src/global/styles/theme';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';

export default function App() {
	const [fontsLoaded] = useFonts({
		BebasNeue_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<ThemeProvider theme={theme}>
			<StatusBar style='auto' />
			<Home />
		</ThemeProvider>
	);
}
