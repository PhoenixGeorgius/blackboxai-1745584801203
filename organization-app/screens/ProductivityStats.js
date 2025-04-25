/**
 * ProductivityStats.js
 * 
 * This screen displays simple productivity statistics.
 * It shows counts of tasks, projects, notes, and reminders.
 * (For demonstration, it uses static data; can be connected to app state later.)
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProductivityStats() {
  // Static example data
  const stats = {
    tasks: 12,
    projects: 3,
    notes: 7,
    reminders: 5,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productivity Stats</Text>
      <View style={styles.statItem}>
        <Text style={styles.statLabel}>Tasks:</Text>
        <Text style={styles.statValue}>{stats.tasks}</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statLabel}>Projects:</Text>
        <Text style={styles.statValue}>{stats.projects}</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statLabel}>Notes:</Text>
        <Text style={styles.statValue}>{stats.notes}</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statLabel}>Reminders:</Text>
        <Text style={styles.statValue}>{stats.reminders}</Text>
      </View>
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
  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#d1d5db',
    borderBottomWidth: 1,
  },
  statLabel: {
    fontSize: 18,
    color: '#374151',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563eb',
  },
});
