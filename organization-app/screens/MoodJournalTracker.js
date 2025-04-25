/**
 * MoodJournalTracker.js
 * 
 * This screen allows users to track their mood and journal entries.
 * Users can select a mood from predefined options and write journal entries.
 */

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const moods = [
  { id: 'happy', label: '😊 Happy' },
  { id: 'sad', label: '😢 Sad' },
  { id: 'angry', label: '😠 Angry' },
  { id: 'neutral', label: '😐 Neutral' },
  { id: 'excited', label: '🤩 Excited' },
];

export default function MoodJournalTracker() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [journal, setJournal] = useState('');
  const [entries, setEntries] = useState([]);

  const saveEntry = () => {
    if (!selectedMood || journal.trim().length === 0) return;
    setEntries([{ id: Date.now().toString(), mood: selectedMood, text: journal }, ...entries]);
    setSelectedMood(null);
    setJournal('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood & Journal Tracker</Text>
      <View style={styles.moodContainer}>
        {moods.map(mood => (
          <TouchableOpacity
            key={mood.id}
            style={[
              styles.moodButton,
              selectedMood === mood.id && styles.selectedMoodButton,
            ]}
            onPress={() => setSelectedMood(mood.id)}
          >
            <Text style={styles.moodLabel}>{mood.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Write your journal entry..."
        value={journal}
        onChangeText={setJournal}
        multiline
      />
      <Button title="Save Entry" onPress={saveEntry} />
      <ScrollView style={styles.entriesContainer}>
        {entries.map(entry => (
          <View key={entry.id} style={styles.entryItem}>
            <Text style={styles.entryMood}>{moods.find(m => m.id === entry.mood)?.label}</Text>
            <Text style={styles.entryText}>{entry.text}</Text>
          </View>
        ))}
      </ScrollView>
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
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  moodButton: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#e5e7eb',
  },
  selectedMoodButton: {
    backgroundColor: '#2563eb',
  },
  moodLabel: {
    fontSize: 18,
    color: '#111827',
  },
  input: {
    borderColor: '#d1d5db',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    minHeight: 80,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
  entriesContainer: {
    marginTop: 20,
  },
  entryItem: {
    backgroundColor: '#e5e7eb',
    padding: 15,
    borderRadius: 4,
    marginBottom: 10,
  },
  entryMood: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2563eb',
  },
  entryText: {
    fontSize: 16,
    color: '#111827',
  },
});
