import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";

type TextInputType = string;
type qrValue = string;

const Qrcode = () => {
	const [textValue, setTextValue] = React.useState<TextInputType>("");
	const [qrValue, setQrValue] = React.useState<qrValue>();

	const hello = "Aprojyoti";
	console.log(textValue);

	const UpdateQR = () => {
		setQrValue(textValue);
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.textinput}
				value={textValue}
				onChangeText={setTextValue}
				numberOfLines={1}
				maxLength={20}
				placeholder="Type Something to Create QR"
			/>
			{textValue?.length > 0 ? (
				<TouchableOpacity style={styles.button} onPress={UpdateQR}>
					<Text style={styles.text}>{`Create QRCode : ${textValue}`}</Text>
				</TouchableOpacity>
			) : null}
			<View style={styles.qr}>
				{textValue?.length < 1 ? (
					<Text style={[styles.text, { marginBottom: 10 }]}>Demo QR</Text>
				) : null}
				<QRCode value={qrValue || hello} />
			</View>
		</View>
	);
};

export default Qrcode;

const styles = StyleSheet.create({
	qr: {
		marginTop: 10,
		//borderWidth: 1,
		flex: 1,
		justifyContent: "center",
	},
	button: {
		backgroundColor: "#d6b354",
		padding: 15,
		borderRadius: 10,
		marginTop: 10,
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		marginTop: 10,
	},
	text: {
		fontSize: 20,
		textAlign: "center",
	},
	textinput: {
		width: "70%",
		borderWidth: 1,
		borderRadius: 5,
		padding: 5,
		paddingHorizontal: 10,
		marginTop: 30,
	},
});
