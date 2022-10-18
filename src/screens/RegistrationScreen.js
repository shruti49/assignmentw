import React, { useState } from "react";
import {
	View,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	KeyboardAvoidingView,
	Pressable,
} from "react-native";
import { Text, Button, Datepicker, Modal, Card } from "@ui-kitten/components";
import InputBox from "../components/InputBox.component";
import validateWrapper from "../utilities/validationWrapper";

const RegistrationScreen = ({ navigation }) => {
	const [firstName, setFirstName] = useState();
	const [firstNameError, setFirstNameError] = useState();

	const [lastName, setLastName] = useState();
	const [lastNameError, setLastNameError] = useState();

	const [email, setEmail] = useState();
	const [emailError, setEmailError] = useState();

	const [address, setAddress] = useState();
	const [addressError, setAddressError] = useState();

	const [phoneNumber, setPhoneNumber] = useState("+91");
	const [phoneNumberError, setPhoneNumberError] = useState();

	const [zipCode, setZipCode] = useState();
	const [zipCodeError, setZipCodeError] = useState();

	const [birthDate, setBirthDate] = useState();
	const [birthDateError, setBirthDateError] = useState();

	const [password, setPassword] = useState();
	const [passwordError, setPasswordError] = useState();

	const [confirmPassword, setConfirmPassword] = useState();
	const [confirmPasswordError, setConfirmPasswordError] = useState();

	const [date, setDate] = useState();

	const [visible, setVisible] = React.useState(false);

	const [signUpBtnDisable, setSignUpBtnDisable] = useState(false);

	const validateUser = (fieldName) => {
		let fieldValue = "";
		switch (fieldName) {
			case "firstName":
				fieldValue = firstName;
				break;
			case "lastName":
				fieldValue = lastName;
				break;
			case "email":
				fieldValue = email;
				break;
			case "address":
				fieldValue = address;
				break;
			case "phoneNumber":
				fieldValue = phoneNumber;
				break;
			case "zipCode":
				fieldValue = zipCode;
				break;
			case "birthDate":
				fieldValue = birthDate;
				break;
			case "password":
				fieldValue = password;
				break;
			case "confirmPassword":
				fieldValue = confirmPassword;
				break;
		}

		const error = validateWrapper(fieldName, fieldValue);
		if (error) {
			setSignUpBtnDisable(true);
			switch (fieldName) {
				case "firstName":
					setFirstNameError(error);
					break;
				case "lastName":
					setLastNameError(error);
					break;
				case "email":
					setEmailError(error);
					break;
				case "address":
					setAddressError(error);
					break;
				case "phoneNumber":
					setPhoneNumberError(error);
					break;
				case "zipCode":
					setZipCodeError(error);
					break;
				case "birthDate":
					setBirthDateError(error);
					break;
				case "password":
					setPasswordError(error);
					break;
				case "confirmPassword":
					setConfirmPasswordError(error);
					break;
			}
		} else {
			setSignUpBtnDisable(false);
			validationClear(fieldName);
		}
		return error;
	};

	const validationClear = (fieldName) => {
		setSignUpBtnDisable(false);
		switch (fieldName) {
			case "firstName":
				setFirstNameError("");
				break;
			case "lastName":
				setLastNameError("");
				break;
			case "email":
				setEmailError("");
				break;
			case "address":
				setAddressError("");
				break;
			case "phoneNumber":
				setPhoneNumberError("");
				break;
			case "zipCode":
				setZipCodeError("");
				break;
			case "birthDate":
				setBirthDateError("");
				break;
			case "password":
				setPasswordError("");
				break;
			case "confirmPassword":
				setConfirmPasswordError("");
				break;
		}
	};

	const handleSignUp = () => {
		if (
			validateUser("firstName") ||
			validateUser("lastName") ||
			validateUser("phoneNumber") ||
			validateUser("email") ||
			validateUser("birthDate") ||
			validateUser("zipCode") ||
			validateUser("address") ||
			validateUser("password") ||
			validateUser("confirmPassword")
		) {
			return;
		}

		if (password !== confirmPassword) {
			setConfirmPasswordError("Password Mismatch");
			setSignUpBtnDisable(true);
			return;
		}
		setVisible(true);
	};

	return (
		<View style={styles.container}>
			<View style={{ marginVertical: 16 }}>
				<Text category="h2">Get Started</Text>
			</View>

			<ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
				<KeyboardAvoidingView>
					<View style={{ flexDirection: "row" }}>
						<InputBox
							inputStyle={{ flex: 1, paddingRight: 8 }}
							inputLabel="First Name"
							placeholderText="Rahul"
							inputValue={firstName}
							handleBlurEvent={() => validationClear("firstName")}
							handleFocusEvent={() => validateUser("firstName")}
							handleOnChangeText={(val) => {
								setFirstName(val), setFirstNameError("");
							}}
							inputCaptionError={firstNameError}
						/>
						<InputBox
							inputStyle={{ flex: 1 }}
							inputLabel="Last Name"
							placeholderText="Yadav"
							inputValue={lastName}
							handleBlurEvent={() => validationClear("lastName")}
							handleFocusEvent={() => validateUser("lastName")}
							handleOnChangeText={(val) => {
								setLastName(val), setLastNameError("");
							}}
							inputCaptionError={lastNameError}
						/>
					</View>
					<InputBox
						inputLabel="E-mail"
						placeholderText="rahul@yadav.in"
						inputValue={email}
						handleBlurEvent={() => validationClear("email")}
						handleFocusEvent={() => validateUser("email")}
						handleOnChangeText={(val) => {
							setEmail(val), setEmailError("");
						}}
						inputCaptionError={emailError}
					/>
					<InputBox
						inputLabel="Address"
						placeholderText="B-block"
						inputSize="large"
						inputValue={address}
						handleBlurEvent={() => validationClear(address)}
						handleFocusEvent={() => validateUser(address)}
						handleOnChangeText={(val) => {
							setAddress(val);
							setAddressError("");
						}}
						inputCaptionError={addressError}
					/>
					<InputBox
						inputLabel="Zip Code"
						placeholderText="110016"
						inputSize="large"
						inputValue={zipCode}
						handleBlurEvent={() => validationClear(zipCode)}
						handleFocusEvent={() => validateUser(zipCode)}
						handleOnChangeText={(val) => {
							setZipCode(val);
							setZipCodeError("");
						}}
						inputCaptionError={zipCodeError}
					/>

					<Datepicker
						label="Date Of Birth"
						placeholder="Pick Date"
						date={date}
						onSelect={(nextDate) => setDate(nextDate)}
						caption={birthDateError}
						style={{ marginBottom: 16 }}
						min={new Date(0)}
						max={new Date()}
						// onFocus={Keyboard.dismiss()}
					/>

					<InputBox
						inputLabel="Mobile Number"
						placeholderText="+919999999999"
						keyboardType="phone-pad"
						inputValue={phoneNumber}
						handleBlurEvent={() => validationClear("phoneNumber")}
						handleFocusEvent={() => validateUser("phoneNumber")}
						handleOnChangeText={(val) => {
							setPhoneNumber(val);
							setPhoneNumberError("");
						}}
						inputCaptionError={phoneNumberError}
					/>
					<InputBox
						inputLabel="Password"
						placeholderText="Password"
						inputValue={password}
						handleBlurEvent={() => validationClear("password")}
						handleFocusEvent={() => validateUser("password")}
						handleOnChangeText={(val) => {
							setPassword(val);
							setPasswordError("");
						}}
						inputCaptionError={passwordError}
					/>
					<InputBox
						inputLabel="Confirm Password"
						placeholderText="confirmPassword"
						inputValue={confirmPassword}
						handleBlurEvent={() => validationClear("confirmPassword")}
						handleFocusEvent={() => validateUser("confirmPassword")}
						handleOnChangeText={(val) => {
							setConfirmPassword(val);
							setConfirmPasswordError("");
						}}
						inputCaptionError={confirmPasswordError}
					/>
					<View style={{ flexDirection: "row", marginBottom: 16 }}>
						<Button onPress={handleSignUp} disabled={signUpBtnDisable}>
							Sign Up
						</Button>
					</View>
					<TouchableOpacity onPress={() => navigation.goBack()} style={{ marginBottom: 16 }}>
						<Text category="s1">Sign In</Text>
					</TouchableOpacity>
				</KeyboardAvoidingView>
			</ScrollView>
			<Modal
				visible={visible}
				style={{ minWidth: 250 }}
				backdropStyle={styles.backdrop}
				onBackdropPress={() => setVisible(false)}
			>
				<Card disabled={true} style={{ height: 120 }}>
					<Text category="h6">Thankyou {firstName} for signing up</Text>
					<View style={{ alignSelf: "flex-end", marginVertical: 16 }}>
						<Button onPress={() => navigation.navigate("login")}>
							<Text>Dismiss</Text>
						</Button>
					</View>
				</Card>
			</Modal>
		</View>
	);
};

export default RegistrationScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 16,
	},
	backdrop: {
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
});
