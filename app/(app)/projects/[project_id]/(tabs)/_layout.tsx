import { Stack, Tabs, useLocalSearchParams } from "expo-router";

export default function ProjectTabsLayout() {
    const { project_id } = useLocalSearchParams<{ project_id: string }>();

    return (

            <Tabs screenOptions={{ headerShown: false, title: `project #${project_id}`,  }}>{/* headers are coming from (app)/_layout.tsx */}
                <Tabs.Screen name="index" options={{ title: "Posts" }} />
                <Tabs.Screen name="about" options={{ title: "About" }} />
                <Tabs.Screen name="members" options={{ title: "Members" }} />
            </Tabs>

    )
}