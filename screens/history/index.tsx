
import React from 'react';
import {View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//TODO: History - Trading history, Jornel. success and performance metrics

export default function History() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>History</Text>
        <Text style={{ marginTop: 8 }}>This is the history screen where you can view your trading history and performance metrics.</Text>
      </View>
    </SafeAreaView>
  );
}
