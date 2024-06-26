import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Switch,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ThemeContext } from "../App"; 

const SettingsScreen = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={isDarkMode ? styles.darkContainer : styles.lightContainer}
    >
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={styles.header}>
        <Text style={[styles.headerTitle, isDarkMode && styles.darkText]}>
          Settings
        </Text>
      </View>
      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={[styles.settingsText, isDarkMode && styles.darkText]}>
            Language
          </Text>
          <Icon name="chevron-forward-outline" size={20} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={[styles.settingsText, isDarkMode && styles.darkText]}>
            My Profile
          </Text>
          <Icon name="chevron-forward-outline" size={20} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={[styles.settingsText, isDarkMode && styles.darkText]}>
            Contact Us
          </Text>
          <Icon name="chevron-forward-outline" size={20} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={[styles.settingsText, isDarkMode && styles.darkText]}>
            Change Password
          </Text>
          <Icon name="chevron-forward-outline" size={20} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={[styles.settingsText, isDarkMode && styles.darkText]}>
            Privacy Policy
          </Text>
          <Icon name="chevron-forward-outline" size={20} color="#888" />
        </TouchableOpacity>
        <View style={styles.themeContainer}>
          <Text style={[styles.themeText, isDarkMode && styles.darkText]}>
            Theme
          </Text>
          <Switch value={isDarkMode} onValueChange={toggleTheme} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  darkContainer: {
    flex: 1,
    backgroundColor: "#000",
    padding: 16,
  },
  darkText: {
    color: "#fff",
  },
  header: {
    marginTop: 50,
    alignItems: "center",
    marginVertical: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "normal",
    marginBottom: 30,
  },
  settingsContainer: {
    marginVertical: 16,
  },
  settingsItem: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  settingsText: {
    fontSize: 16,
    color: "#000",
  },
  themeContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  themeText: {
    fontSize: 16,
    color: "#000",
  },
});

export default SettingsScreen;