/**
 * HomeScreen.js
 * 
 * This is the main screen of the app where the user can manage tasks.
 * It includes a simple Task Manager with add, delete, and list tasks functionality.
 * 
 * The UI is built with React Native components and styled for clarity.
 */

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Add a new task to the list
  const addTask = () => {
    if (task.trim().length === 0) return;
    setTasks([...tasks, { id: Date.now().toString(), text: task }]);
    setTask('');
  };

  // Remove a task by id
  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new task"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Add" onPress={addTask} />
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.text}</Text>
            <TouchableOpacity onPress={() => removeTask(item.id)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No tasks yet</Text>}
      />
      <View style={styles.navigationButtons}>
        <Button title="Go to Project Organizer" onPress={() => navigation.navigate('ProjectOrganizer')} />
        <Button title="Go to Notes & Checklists" onPress={() => navigation.navigate('NotesChecklists')} />
        <Button title="Go to Calendar View" onPress={() => navigation.navigate('CalendarView')} />
        <Button title="Go to Smart Reminders" onPress={() => navigation.navigate('SmartReminders')} />
        <Button title="Go to Pomodoro Timer" onPress={() => navigation.navigate('PomodoroTimer')} />
        <Button title="Go to Productivity Stats" onPress={() => navigation.navigate('ProductivityStats')} />
        <Button title="Go to Daily Review" onPress={() => navigation.navigate('DailyReview')} />
        <Button title="Go to Goal Tracker" onPress={() => navigation.navigate('GoalTracker')} />
        <Button title="Go to Habit Tracker" onPress={() => navigation.navigate('HabitTracker')} />
        <Button title="Go to Mood & Journal Tracker" onPress={() => navigation.navigate('MoodJournalTracker')} />
        <Button title="Go to Budget Tracker" onPress={() => navigation.navigate('BudgetTracker')} />
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
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    marginBottom: 10,
  },
  taskText: {
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
  navigationButtons: {
    marginTop: 20,
  },
});
