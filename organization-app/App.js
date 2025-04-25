/**
 * organization-app
 * 
 * This is the main entry point of the React Native app.
 * It sets up the navigation and basic app structure.
 * 
 * Features will be added as separate screens/components.
 */



import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import screens
import HomeScreen from './screens/HomeScreen';
import ProjectOrganizer from './screens/ProjectOrganizer';
import NotesChecklists from './screens/NotesChecklists';
import CalendarView from './screens/CalendarView';
import SmartReminders from './screens/SmartReminders';
import PomodoroTimer from './screens/PomodoroTimer';
import ProductivityStats from './screens/ProductivityStats';
import DailyReview from './screens/DailyReview';
import GoalTracker from './screens/GoalTracker';
import HabitTracker from './screens/HabitTracker';
import MoodJournalTracker from './screens/MoodJournalTracker';
import BudgetTracker from './screens/BudgetTracker';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: true}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="ProjectOrganizer" component={ProjectOrganizer} />
        <Tab.Screen name="NotesChecklists" component={NotesChecklists} />
        <Tab.Screen name="CalendarView" component={CalendarView} />
        <Tab.Screen name="SmartReminders" component={SmartReminders} />
        <Tab.Screen name="PomodoroTimer" component={PomodoroTimer} />
        <Tab.Screen name="ProductivityStats" component={ProductivityStats} />
        <Tab.Screen name="DailyReview" component={DailyReview} />
        <Tab.Screen name="GoalTracker" component={GoalTracker} />
        <Tab.Screen name="HabitTracker" component={HabitTracker} />
        <Tab.Screen name="MoodJournalTracker" component={MoodJournalTracker} />
        <Tab.Screen name="BudgetTracker" component={BudgetTracker} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
