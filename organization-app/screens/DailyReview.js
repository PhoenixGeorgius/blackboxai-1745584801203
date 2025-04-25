/**
 * DailyReview.js
 * 
 * This screen allows users to write a daily review or journal entry.
 * Users can enter text and save it.
 * (For simplicity, saved entries are stored in local state.)
 */

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function DailyReview() {
  const [entry, setEntry] = useState('');
  const [savedEntries, setSavedEntries] = useState([]);

  const saveEntry = () => {
    if (entry.trim().length === 0) return;
    setSavedEntries([{ id: Date.now().toString(), text: entry }, ...savedEntries]);
    setEntry('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Review</Text>
      <TextInput
        style={styles.input}
        placeholder="Write your daily review here..."
        value={entry}
        onChangeText={setEntry}
        multiline
      />
      <Button title="Save" onPress={saveEntry} />
      <ScrollView style={styles.entriesContainer}>
        {savedEntries.map(e => (
          <View key={e.id} style={styles.entryItem}>
            <Text style={styles.entryText}>{e.text}</Text>
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
  input: {
    borderColor: '#d1d5db',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    minHeight: 100,
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
  entryText: {
    fontSize: 16,
    color: '#111827',
  },
});
