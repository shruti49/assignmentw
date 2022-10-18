import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [userToken, setUserToken] = useState("");

	const storeData = async (value) => {
		try {
			//saving the token in async storage
			await AsyncStorage.setItem("token", value);
		} catch (e) {
			// saving error
			console.warn(e);
		}
	};

	const login = () => {
		setIsLoading(true);
		setUserToken("shruti");
		storeData("shruti");
		setIsLoading(false);
	};

	const logout = async () => {
		setIsLoading(true);
		//removing the token when logout
		const res = await AsyncStorage.removeItem("token");
		setUserToken(null);
		setIsLoading(false);
	};

	const isLoggedIn = async () => {
		//Fetching the token from async storage
		const value = await AsyncStorage.getItem("token");
		if (value !== null) {
			// value previously stored
			setUserToken(value);
		}
	};

	useEffect(() => {
		//Checking whether the user is logged in or not
		isLoggedIn();
	}, []);

	return (
		<AuthContext.Provider value={{ isLoading, userToken, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
