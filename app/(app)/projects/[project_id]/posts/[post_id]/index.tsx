import { View, Text, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";

interface Post {
    id: number;
    title: string;
    content: string;
}

export default function PostDetailScreen() {
    const { post_id } = useLocalSearchParams<{ post_id: string }>();

    // In a real app, you would fetch the post data from an API
    // For now, we'll simulate the post data
    const post: Post = {
        id: parseInt(post_id),
        title: `Post ${post_id}`,
        content: `This is the detailed content for post ${post_id}. It contains more detailed information about the post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
    };

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: post.title }} />
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.content}>{post.content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 16,
        color: '#333',
    },
    content: {
        fontSize: 16,
        color: '#666',
        lineHeight: 24,
    },
});
