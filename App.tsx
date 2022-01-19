import "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";

import Screen from "./src/navigation";

export default function App() {
	return <Screen />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
