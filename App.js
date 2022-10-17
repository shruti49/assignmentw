import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";

import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import { AuthProvider } from "./src/context/AuthContext";
import AppNav from "./src/navigation/AppNav";

const App = () => {
	return (
		<>
			<IconRegistry icons={EvaIconsPack} />
			<ApplicationProvider {...eva} theme={eva.light}>
				<SafeAreaView style={styles.container}>
					<AuthProvider>
						<AppNav />
					</AuthProvider>
				</SafeAreaView>
			</ApplicationProvider>
		</>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight,
	},
});
