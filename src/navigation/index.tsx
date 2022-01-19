import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { DrawerMenuIcon, ExploreIcon } from "../icon/";

import { Qrcode, scan } from "../screens";

export type RootDrawer = {
	Qrcode: undefined;
	scan: undefined;
};

const Drawer = createDrawerNavigator<RootDrawer>();

const Screen = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				screenOptions={{
					headerShown: false,
				}}>
				<Drawer.Screen
					name="Qrcode"
					component={Qrcode}
					options={{
						drawerLabel: "Generate QR",
						drawerIcon: ({ color, size }) => (
							<DrawerMenuIcon color={color} size={size} />
						),
					}}
				/>
				<Drawer.Screen
					name="scan"
					component={scan}
					options={{
						drawerLabel: "Scan QR",
						drawerIcon: ({ color, size }) => (
							<ExploreIcon color={color} size={size} />
						),
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default Screen;
