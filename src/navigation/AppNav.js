import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthStackNavigator from "./AuthStackNavigator";
import AppStackNavigator from "./AppStackNavigator";

import { AuthContext } from "../context/AuthContext";

const AppNav = () => {
	const { isLoading, userToken } = useContext(AuthContext);

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
				<ActivityIndicator size="large" />
			</View>
		);
	}
	return (
		<NavigationContainer>
			{userToken !== "" && userToken !== null ? <AppStackNavigator /> : <AuthStackNavigator />}
		</NavigationContainer>
	);
};

export default AppNav;
