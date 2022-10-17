import React, { useContext } from "react";
import { View } from "react-native";
import { Text, Button } from "@ui-kitten/components";
import { AuthContext } from "../context/AuthContext";

const SettingsScreen = () => {
	const { logout } = useContext(AuthContext);
	return (
		<View>
			<Text>SettingsScreen</Text>
			<Button onPress={() => logout()}>Log Out</Button>
		</View>
	);
};

export default SettingsScreen;
