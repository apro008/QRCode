import {
	Button,
	Linking,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { RootDrawer } from "../navigation";

type DrawerNaavigation = {
	navigation: DrawerNavigationProp<any>;
};

const scan: React.FC<DrawerNaavigation> = (props) => {
	const [permissions, setPermissions] = useState(true);
	const [scandata, setScandata] = useState<any>();
	const [loadings, setLoadings] = useState(true);

	const RequestCameraPermission = async () => {
		try {
			const { status, granted } =
				await BarCodeScanner.requestPermissionsAsync();
			console.log(`Status: ${status}, Granted: ${granted}`);

			if (status === "granted") {
				setPermissions(true);
			} else {
				setPermissions(false);
			}
		} catch (error) {
			console.log(error);
			setPermissions(false);
		} finally {
			setLoadings(false);
		}
	};

	useEffect(() => {
		RequestCameraPermission();
	}, []);

	const HandleLink = (url) => {
		Linking.openURL(url).catch((error) => {
			console.error("Failed opening page because: ", error);
			alert(`Dont know how to open this  : ${url}`);
		});
	};

	return (
		<View
			style={{
				flex: 1,
				//alignItems: "center",
			}}>
			{loadings ? <Text>Loading.....</Text> : null}
			{permissions ? (
				<BarCodeScanner
					style={styles.container}
					onBarCodeScanned={({ type, data }) => {
						try {
							// console.log(`type,`, type);
							// console.log(`data,`, data);
							setScandata(data);
							console.log(scandata);
						} catch (error) {
							console.error("Unable to parse string: ", error);
						}
					}}>
					{scandata ? (
						<>
							<TouchableOpacity onPress={() => HandleLink(scandata)}>
								<Text style={{ fontSize: 20, color: "white" }}>{scandata}</Text>
							</TouchableOpacity>
							<Button title="Scan Again" onPress={() => setScandata(undefined)}>
								Scan Again
							</Button>
						</>
					) : (
						<Text style={styles.text}>Scan the QR code.</Text>
					)}
				</BarCodeScanner>
			) : (
				<Text style={styles.textError}>Permission rejected.</Text>
			)}
		</View>
	);
};

export default scan;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		marginTop: 15,
		backgroundColor: "white",
	},
	textError: {
		color: "red",
	},
});
