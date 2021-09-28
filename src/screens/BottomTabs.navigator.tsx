import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './Home.screen';
import { History } from './History.screen';
import { Analytics } from './Analytics.screen';
import { Text } from 'react-native';
import { HistoryIcon, HomeIcon, AnalyticsIcon } from '../components/icons';
import { theme } from '../theme';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colorBlue,
        headerTitleStyle: {
          fontFamily: theme.fontFamilyRegular,
        },
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name.toLocaleLowerCase() === 'home') {
            return <HomeIcon size={size} color={color} />;
          }
          if (route.name.toLocaleLowerCase() === 'history') {
            return <HistoryIcon size={size} color={color} />;
          }

          if (route.name.toLocaleLowerCase() === 'analytics') {
            return <AnalyticsIcon size={size} color={color} />;
          }
          return <Text>{route.name}</Text>;
        },
      })}>
      <BottomTabs.Screen
        name="Home"
        component={Home}
        options={{ title: "Today's Mood" }}
      />
      <BottomTabs.Screen
        name="History"
        options={{ title: "Past Mood's" }}
        component={History}
      />
      <BottomTabs.Screen
        name="Analytics"
        options={{ title: 'Fancy graphs' }}
        component={Analytics}
      />
    </BottomTabs.Navigator>
  );
};
