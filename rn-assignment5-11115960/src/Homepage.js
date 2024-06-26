import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { ThemeContext } from "../App";

const transactions = [
  {
    id: "1",
    name: "Apple Store",
    type: "Entertainment",
    amount: "- $5.99",
    icon: require("../assets/applee.png"),
    iconDark: require("../assets/whitelogo.png"),

  },
  {
    id: "2",
    name: "Spotify",
    type: "Music",
    amount: "- $12.99",
    icon: require("../assets/spotifyy.png"),
  },
  {
    id: "3",
    name: "Money Transfer",
    type: "Transaction",
    amount: "$300",
    icon: require("../assets/momo.png"),
  },
  {
    id: "4",
    name: "Grocery",
    type: "",
    amount: "- $88",
    icon: require("../assets/grocery.png"),
  },
];

const Homepage = ({ navigation }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={isDarkMode ? styles.darkContainer : styles.lightContainer}
    >
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <View style={styles.containerr}>
        <View style={styles.header}>
          <View
            style={[
              styles.profileImagePlaceholder,
              isDarkMode && styles.darkIconBackground,
            ]}
          >
            <Image source={require("../assets/man.png")} />
          </View>
          <View style={styles.headerText}>
            <Text style={isDarkMode ? styles.darkText : styles.lightText}>
              Welcome back,
            </Text>
            <Text style={[styles.userName, isDarkMode && styles.darkText]}>
              Ophe Lia            
              </Text>
          </View>
          <TouchableOpacity style={styles.searchIcon}>
            <MaterialIcons
              name="search"
              size={24}
              color={isDarkMode ? "#fff" : "#000"}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          <Image
            source={require("../assets/mastercard.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <View
              style={[
                styles.profileImagePlaceholder,
                isDarkMode
                  ? styles.darkIconBackground
                  : styles.lightIconBackground,
              ]}
            >
              <Image source={require("../assets/sent.png")} style={{}} />
            </View>
            <Text style={isDarkMode ? styles.darkText : styles.lightText}>
              Sent
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View
              style={[
                styles.profileImagePlaceholder,
                isDarkMode
                  ? styles.darkIconBackground
                  : styles.lightIconBackground,
              ]}
            >
              <Image source={require("../assets/recieves.png")} />
            </View>
            <Text style={isDarkMode ? styles.darkText : styles.lightText}>
              Receive
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View
              style={[
                styles.profileImagePlaceholder,
                isDarkMode
                  ? styles.darkIconBackground
                  : styles.lightIconBackground,
              ]}
            >
              <Image source={require("../assets/loans.png")} />
            </View>
            <Text style={isDarkMode ? styles.darkText : styles.lightText}>
              Loan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <View
              style={[
                styles.profileImagePlaceholder,
                isDarkMode
                  ? styles.darkIconBackground
                  : styles.lightIconBackground,
              ]}
            >
              <Image source={require("../assets/topup.png")} />
            </View>
            <Text style={isDarkMode ? styles.darkText : styles.lightText}>
              Topup
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.transactionContainer}>
          <View style={styles.transactionHeader}>
            <Text
              style={[styles.transactionTitle, isDarkMode && styles.darkText]}
            >
              Transaction
            </Text>
            <TouchableOpacity>
              <Text style={styles.sellAllText}>Sell All</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={transactions}
            renderItem={({ item }) => (
              <View style={styles.transactionItem}>
                <View style={styles.initial}>
                  <View
                    style={[
                      styles.profileImagePlaceholder,
                      isDarkMode
                        ? styles.darkIconBackground
                        : styles.lightIconBackground,
                    ]}
                  >
                    <Image source={item.icon} />
                  </View>
                  <View style={styles.transactionDetails}>
                    <Text
                      style={[
                        styles.transactionName,
                        isDarkMode && styles.darkText,
                      ]}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={[
                        styles.transactionType,
                        isDarkMode && styles.darkText,
                      ]}
                    >
                      {item.type}
                    </Text>
                  </View>
                  <Text
                    style={[
                      styles.transactionAmount,
                      item.amount === "$300" && styles.blueText,
                      item.amount.startsWith("-") &&
                        !isDarkMode && { color: "#000" },
                      item.amount === "$300" && styles.blueText,
                      item.amount.startsWith("-") &&
                        isDarkMode &&
                        styles.darkText,
                    ]}
                  >
                    {item.amount}
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};





const styles = StyleSheet.create({
  containerr: {
    flex: 1,
    padding: 16,
  },
  lightContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  darkContainer: {
    flex: 1,
    backgroundColor: "#001a33",
  },
  darkIconBackground: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  lightIconBackground: {
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    height: "7%",
  },
  profileImagePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    marginRight: 170,
  },
  welcomeText: {
    marginBottom: 10,
    color: "#888",
  },
  userName: {
    fontWeight: "bold",
  },
  searchIcon: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 30,
  },
  cardContainer: {
    width: "100%",
    height: "29%",
    marginTop: 30,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  actionButton: {
    alignItems: "center",
  },
  actionText: {
    marginTop: 4,
    fontSize: 12,
    color: "#000",
  },
  transactionContainer: {
    marginTop: 16,
  },
  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  transactionTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  sellAllText: {
    color: "#007aff",
  },
  initial: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  transactionDetails: {
    paddingTop: 7,
    marginLeft: 8,
    flex: 1,
  },
  transactionName: {
    fontWeight: "bold",
    marginBottom: 3,
  },
  transactionType: {
    color: "#888",
  },
  transactionAmount: {
    paddingTop: 20,
    fontWeight: "bold",
  },
  blueText: {
    color: "#007aff",
  },
  darkText: {
    color: "#fff",
  },
  lightText: {
    color: "#000",
  },
});

export default Homepage;