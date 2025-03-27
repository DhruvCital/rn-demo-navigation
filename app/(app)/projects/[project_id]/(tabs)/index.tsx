import { View, Text, Button, StyleSheet, ScrollView, Pressable } from "react-native";
import { useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";

interface Post {
    id: number;
    title: string;
    content: string;
}

export default function ProjectPostsScreen() {
    const { project_id } = useLocalSearchParams<{ project_id: string }>();
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const loadPosts = async (page: number = 1) => {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        const newPosts = Array.from({ length: 5 }, (_, i) => ({
            id: (page - 1) * 5 + i + 1,
            title: `Post ${(page - 1) * 5 + i + 1}`,
            content: `This is the content for post ${(page - 1) * 5 + i + 1}. It contains some sample text to demonstrate the post layout.`
        }));

        setPosts(prev => page === 1 ? newPosts : [...prev, ...newPosts]);
        setHasMore(page < 3); // Simulate having only 3 pages of posts
        setIsLoading(false);
    };

    return (
        <View style={styles.container}>
            {posts.length === 0 ? (
                <View style={styles.emptyState}>
                    <Text style={styles.emptyStateText}>No posts yet</Text>
                    <Button
                        title="Load Posts"
                        onPress={() => loadPosts(1)}
                        disabled={isLoading}
                    />
                </View>
            ) : (
                <ScrollView style={styles.scrollView}>
                    {posts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/projects/${project_id}/posts/${post.id}`}
                            asChild
                        >
                            <Pressable style={styles.postCard}>
                                <Text style={styles.postTitle}>{post.title}</Text>
                                <Text style={styles.postContent}>{post.content}</Text>
                            </Pressable>
                        </Link>
                    ))}
                    {hasMore && (
                        <Button
                            title={isLoading ? "Loading..." : "Load More"}
                            onPress={() => loadPosts(Math.floor(posts.length / 5) + 1)}
                            disabled={isLoading}
                        />
                    )}
                </ScrollView>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyStateText: {
        fontSize: 16,
        color: '#666',
        marginBottom: 16,
    },
    scrollView: {
        flex: 1,
    },
    postCard: {
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        padding: 16,
        marginBottom: 12,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    postTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
        color: '#333',
    },
    postContent: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
});