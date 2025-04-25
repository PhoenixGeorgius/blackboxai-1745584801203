/**
 * NotesChecklists.js
 * 
 * This screen allows users to create and manage notes and checklists.
 * Users can add notes, view a list of notes, and delete notes.
 */

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function NotesChecklists() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (note.trim().length === 0) return;
    setNotes([...notes, { id: Date.now().toString(), text: note }]);
    setNote('');
  };

  const removeNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notes & Checklists</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new note"
          value={note}
          onChangeText={setNote}
          multiline
        />
        <Button title="Add" onPress={addNote} />
      </View>
      <FlatList
        data={notes}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteText}>{item.text}</Text>
            <TouchableOpacity onPress={() => removeNote(item.id)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No notes yet</Text>}
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
    marginBottom: 20,
  },
  input: {
    borderColor: '#d1d5db',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
    minHeight: 60,
    textAlignVertical: 'top',
  },
  noteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    marginBottom: 10,
  },
  noteText: {
    fontSize: 16,
    color: '#111827',
    flex: 1,
  },
  deleteText: {
    color: '#ef4444',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  emptyText: {
    textAlign: 'center',
    color: '#6b7280',
    marginTop: 20,
  },
});
