/**
 * SmartReminders.js
 * 
 * This screen allows users to create and manage smart reminders.
 * Users can add reminders with a title and time, view the list, and delete reminders.
 */

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function SmartReminders() {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [reminders, setReminders] = useState([]);

  const addReminder = () => {
    if (title.trim().length === 0 || time.trim().length === 0) return;
    setReminders([...reminders, { id: Date.now().toString(), title, time }]);
    setTitle('');
    setTime('');
  };

  const removeReminder = (id) => {
    setReminders(reminders.filter(r => r.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Smart Reminders</Text>
      <TextInput
        style={styles.input}
        placeholder="Reminder title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Time (e.g., 14:00)"
        value={time}
        onChangeText={setTime}
      />
      <Button title="Add Reminder" onPress={addReminder} />
      <FlatList
        data={reminders}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.reminderItem}>
            <Text style={styles.reminderText}>{item.title} at {item.time}</Text>
            <TouchableOpacity onPress={() => removeReminder(item.id)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No reminders yet</Text>}
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
  input: {
    borderColor: '#d1d5db',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  reminderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    marginBottom: 10,
  },
  reminderText: {
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
