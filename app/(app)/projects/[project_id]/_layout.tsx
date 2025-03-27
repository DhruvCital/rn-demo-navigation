import { Stack, useLocalSearchParams } from "expo-router";

export default function ProjectLayout() {
    const { project_id } = useLocalSearchParams();

    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ title: `Project #${project_id}` }} />
            <Stack.Screen name="posts" options={{ title: "Posts" }} />
        </Stack>
    )
}