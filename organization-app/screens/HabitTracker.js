/**
 * HabitTracker.js
 * 
 * This screen allows users to track their habits.
 * Users can add habits, mark them as done for the day, and delete habits.
 */

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function HabitTracker() {
  const [habit, setHabit] = useState('');
  const [habits, setHabits] = useState([]);

  const addHabit = () => {
    if (habit.trim().length === 0) return;
    setHabits([...habits, { id: Date.now().toString(), text: habit, done: false }]);
    setHabit('');
  };

  const toggleDone = (id) => {
    setHabits(habits.map(h => h.id === id ? { ...h, done: !h.done } : h));
  };

  const removeHabit = (id) => {
    setHabits(habits.filter(h => h.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habit Tracker</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new habit"
          value={habit}
          onChangeText={setHabit}
        />
        <Button title="Add" onPress={addHabit} />
      </View>
      <FlatList
        data={habits}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.habitItem}>
            <TouchableOpacity onPress={() => toggleDone(item.id)}>
              <Text style={[styles.habitText, item.done && styles.done]}>{item.text}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeHabit(item.id)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No habits yet</Text>}
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
  habitItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    marginBottom: 10,
  },
  habitText: {
    fontSize: 16,
    color: '#111827',
  },
  done: {
    textDecorationLine: 'line-through',
    color: '#6b7280',
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
