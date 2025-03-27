import React from "react";
import { Stack } from "expo-router";
import { DefaultTheme } from "@react-navigation/native";
import { DarkTheme } from "@react-navigation/native";
import { ThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "react-native";

export default function AppLayout() {
    const colorScheme = useColorScheme();

    return (
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="about" options={{ presentation: "modal" }} />
            </Stack>
    )
}
