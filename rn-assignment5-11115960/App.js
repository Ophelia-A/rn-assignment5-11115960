import React, { useState, createContext, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./src/Homepage";
import SettingsScreen from "./src/Settingpage";
import Mycards from "./src/Mycards";
import Statistics from "./src/Statistics";
import Icon from "react-native-vector-icons/Ionicons";


export const ThemeContext = createContext();

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Homepage">
    <Stack.Screen
      name="Homepage"
      component={Homepage}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Settings"
      component={SettingsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const MyCardsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MyCards"
      component={Mycards}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const StatisticsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Statisticspage"
      component={Statistics}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Settingspage"
      component={SettingsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarStyle: {
              position: "absolute",
              bottom: 10,
              borderTopWidth: 0,
              height: 80,
              backgroundColor: isDarkMode ? "black" : "white",
            },
            tabBarIcon: ({ color, size, focused }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = "home-outline";
              } else if (route.name === "My Cards") {
                iconName = "card-outline";
              } else if (route.name === "Statistics") {
                iconName = "stats-chart-outline";
              } else if (route.name === "Settings") {
                iconName = "settings-outline";
              }

              return (
                <Icon
                  name={iconName}
                  color={focused ? "#007aff" : color}
                  size={size}
                />
              );
            },
            tabBarActiveTintColor: "#007aff",
            tabBarInactiveTintColor: isDarkMode ? "gray" : "darkgray",
          })}
        >
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              headerShown: false,
              tabBarLabel: "Home",
            }}
          />
          <Tab.Screen
            name="My Cards"
            component={MyCardsStack}
            options={{
              headerShown: false,
              tabBarLabel: "My Cards",
            }}
          />
          <Tab.Screen
            name="Statistics"
            component={StatisticsStack}
            options={{
              headerShown: false,
              tabBarLabel: "Statistics",
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsStack}
            options={{
              headerShown: false,
              tabBarLabel: "Settings",
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};

export default App;