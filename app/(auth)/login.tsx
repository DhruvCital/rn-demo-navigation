import { View, Text, Button, SafeAreaView } from "react-native";
import { useAuth } from "@/context/auth";

export default function LoginScreen() {
    const { signIn } = useAuth();

    return (
        <SafeAreaView>
            <View>
                <Text>Login</Text>
                <Button title="Login" color="blue" onPress={() => { signIn() }} />
            </View>
        </SafeAreaView>
    )
}