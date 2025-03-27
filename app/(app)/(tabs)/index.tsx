import React from "react";
import { View, Text, Button, StyleSheet, ScrollView, Pressable } from "react-native";
import { useAuth } from "@/context/auth";
import { Link } from "expo-router";

export default function HomeScreen() {
  const { signOut } = useAuth();

  const projects = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Project ${i + 1}`,
  }));

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            asChild
          >
            <Pressable style={styles.projectLink}>
              <Text style={styles.projectText}>{project.title}</Text>
            </Pressable>
          </Link>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  projectLink: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  projectText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});
