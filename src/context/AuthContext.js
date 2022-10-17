import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [userToken, setUserToken] = useState("");

	const storeData = async (value) => {
		try {
			await AsyncStorage.setItem("token", value);
		} catch (e) {
			// saving error
			console.warn(e);
		}
	};

	const getData = async () => {
		try {
			const value = await AsyncStorage.getItem("token");
			if (value !== null) {
				// value previously stored
				return value;
			}
		} catch (e) {
			// error reading value
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
		const res = await AsyncStorage.removeItem("token");
		//console.log(res);
		setIsLoading(false);
	};

	const isLoggedIn = () => {
		setIsLoading(true);
		const token = getData();
		setUserToken(token);
		setIsLoading(false);
	};

	useEffect(() => {
		if (userToken !== "") {
			isLoggedIn();
		}
	}, []);

	return (
		<AuthContext.Provider value={{ isLoading, userToken, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
