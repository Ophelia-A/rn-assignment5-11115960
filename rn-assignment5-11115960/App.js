import React from 'react';

import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const transactions = [
  { id: '1', name: 'Apple Store', type: 'Entertainment', amount: '- $5,99',  Image: source= require('../rn-assignment5-11115960/assets/applee.png')},
  { id: '2', name: 'Spotify', type: 'Music', amount: '- $12,99', Image: source= require('../rn-assignment5-11115960/assets/spotifyy.png') },
  { id: '3', name: 'Money Transfer', type: 'Transaction', amount: '$300', Image: source= require('../rn-assignment5-11115960/assets/momo.png') },
  { id: '4', name: 'Grocery', type: '', amount: '- $88', Image: source= require('../rn-assignment5-11115960/assets/grocery.png') },
];

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>

      <View style={styles.wcontainer}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
      <View style={styles.header}>
        <View style={styles.profileImagePlaceholder} >
          <Image source= {require('../rn-assignment5-11115960/assets/man.png')} />
        </View>
        <View style={styles.welcomebox}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.userName}>Eric Atsu</Text>
        </View>
        <TouchableOpacity style={styles.searchIcon}>
          <MaterialIcons name="search" size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
      <Image source= {require('../rn-assignment5-11115960/assets/mastercard.png')} 
      style={styles.mascard} 
      />

      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
        <View style={styles.profileImagePlaceholder} >
          <Image source= {require('../rn-assignment5-11115960/assets/sent.png')} />
        </View>
          <Text style={styles.actionText}>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
        <View style={styles.profileImagePlaceholder} >
          <Image source= {require('../rn-assignment5-11115960/assets/recieves.png')} />
        </View>
          <Text style={styles.actionText}>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
        <View style={styles.profileImagePlaceholder} >
          <Image source= {require('../rn-assignment5-11115960/assets/loans.png')} />
        </View>
          <Text style={styles.actionText}>Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
        <View style={styles.profileImagePlaceholder} >
          <Image source= {require('../rn-assignment5-11115960/assets/topup.png')} />
        </View>
          <Text style={styles.actionText}>Topup</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.transactionContainer}>
        <View style={styles.transactionHeader}>
          <Text style={styles.transactionTitle}>Transaction</Text>
          <TouchableOpacity>
            <Text style={styles.sellAllText}>Sell All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={transactions}
          renderItem={({ item }) => (
            <View style={styles.transactionItem}>
                 <View style={styles.profileImagePlaceholder} >
          <Image source= {item.Image} />
        </View>
              <Icon name={item.icon} size={24} color="#000" />
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionName}>{item.name}</Text>
                <Text style={styles.transactionType}>{item.type}</Text>
              </View>
              <Text style={[styles.transactionAmount, { color: item.amount.startsWith('-') ? '#000' : '#007aff' }]}>{item.amount}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="home-outline" size={24} color="#007aff" />
          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="card-outline" size={24} color="#888" />
          <Text style={styles.footerButtonText}>My Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="stats-chart-outline" size={24} color="#888" />
          <Text style={styles.footerButtonText}>Statistics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Icon name="settings-outline" size={24} color="#888" />
          <Text style={styles.footerButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: 'white',
    },
  wcontainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  welcomebox:{
    marginLeft: -130,
  },
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'green',
    height: 70
  },
  profileImagePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 40,
    backgroundColor: "#f5f5f5",
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: '#888',
    marginBottom:10,
    
  },
  userName: {
    fontWeight: 'bold',
  },
  searchIcon: {
    padding: 12,
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: 'red'
  },
  cardContainer: {
    marginVertical: 10,
    backgroundColor: 'purple',
    height: '30%',
    borderRadius: 50,
    marginTop: 40
  },
  mascard:{
    height: '100%',
    width: '100%',
    borderRadius: 40
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  actionButton: {
    alignItems: 'center',
    
  },
  actionText: {
    marginTop: 4,
    fontSize: 12,
  },
  transactionContainer: {
    marginTop: 16,
  },
  transactionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  transactionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  sellAllText: {
    color: '#007aff',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  transactionDetails: {
    marginLeft: 8,
    flex: 1,
  },
  transactionName: {
    fontWeight: 'bold',
  },
  transactionType: {
    color: '#888',
  },
  transactionAmount: {
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 16,
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    marginTop: 4,
    fontSize: 12,
    color: '#888',
  },
});

export default App;