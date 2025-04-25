/**
 * BudgetTracker.js
 * 
 * This screen allows users to track their budget.
 * Users can add income and expenses, view the balance, and delete entries.
 */

import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function BudgetTracker() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [entries, setEntries] = useState([]);

  const addEntry = () => {
    const amt = parseFloat(amount);
    if (description.trim().length === 0 || isNaN(amt)) return;
    setEntries([...entries, { id: Date.now().toString(), description, amount: amt }]);
    setDescription('');
    setAmount('');
  };

  const removeEntry = (id) => {
    setEntries(entries.filter(e => e.id !== id));
  };

  const balance = entries.reduce((acc, e) => acc + e.amount, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Budget Tracker</Text>
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount (use negative for expenses)"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Button title="Add Entry" onPress={addEntry} />
      <Text style={styles.balance}>Balance: ${balance.toFixed(2)}</Text>
      <FlatList
        data={entries}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.entryItem}>
            <Text style={styles.entryText}>{item.description}: ${item.amount.toFixed(2)}</Text>
            <TouchableOpacity onPress={() => removeEntry(item.id)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>No entries yet</Text>}
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
  balance: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#2563eb',
  },
  entryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    marginBottom: 10,
  },
  entryText: {
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
