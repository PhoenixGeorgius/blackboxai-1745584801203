/**
 * ProjectOrganizer.js
 * 
 * This screen allows users to organize projects.
 * Users can add projects, view a list of projects, and delete projects.
 */

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProjectOrganizer() {
  const [project, setProject] = useState('');
  const [projects, setProjects] = useState([]);

  const addProject = () => {
    if (project.trim().length === 0) return;
    setProjects([...projects, { id: Date.now().toString(), name: project }]);
    setProject('');
  };

  const removeProject = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project Organizer</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new project"
          value={project}
          onChangeText={setProject}
        />
        <Button title="Add" onPress={addProject} />
      </View>
      <FlatList
        data={projects}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.projectItem}>
            <Text style={styles.projectText}>{item.name}</Text>
            <TouchableOpacity onPress={() => removeProject(item.id)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No projects yet</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9fafb',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#111827',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderColor: '#d1d5db',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginRight: 10,
    height: 40,
    backgroundColor: '#fff',
  },
  projectItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    marginBottom: 10,
  },
  projectText: {
    fontSize: 16,
    color: '#111827',
  },
  deleteText: {
    color: '#ef4444',
    fontWeight: 'bold',
  },
  emptyText: {
    textAlign: 'center',
    color: '#6b7280',
    marginTop: 20,
  },
});
