/**
 * PomodoroTimer.js
 * 
 * This screen implements a simple Pomodoro timer.
 * Users can start, pause, and reset the timer.
 * The timer counts down from 25 minutes by default.
 */

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function PomodoroTimer() {
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft(prev => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (!isRunning && intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const startPause = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setSecondsLeft(25 * 60);
    setIsRunning(false);
  };

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pomodoro Timer</Text>
      <Text style={styles.timer}>{formatTime(secondsLeft)}</Text>
      <View style={styles.buttons}>
        <Button title={isRunning ? "Pause" : "Start"} onPress={startPause} />
        <Button title="Reset" onPress={reset} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9fafb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#111827',
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#2563eb',
  },
  buttons: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-around',
  },
});
