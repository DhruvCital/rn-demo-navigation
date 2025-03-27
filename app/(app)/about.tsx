import { Button, Text, View } from "react-native";
import { useAuth } from "@/context/auth";

export default function AboutScreen() {
  const { signOut } = useAuth();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>About</Text>
      <Button title="Logout" color="red" onPress={() => { signOut() }} />
    </View>
  );
}
