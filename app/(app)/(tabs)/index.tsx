import React from "react";
import { View, Text, Button } from "react-native";
import { useAuth } from "@/context/auth";

export default function HomeScreen() {
  const { signOut } = useAuth();

  return (
    <View>
      <Text>Home</Text>
      <Button title="Logout" color="red" onPress={() => { signOut() }} />
    </View>
  );
}
