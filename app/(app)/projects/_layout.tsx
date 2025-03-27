import { Stack, useLocalSearchParams } from "expo-router";

export default function ProjectsLayout() {
    const { project_id } = useLocalSearchParams<{ project_id: string }>();
    return (
        <Stack>
            <Stack.Screen name="[project_id]" options={{ headerShown: false }} />
        </Stack>
    )
}