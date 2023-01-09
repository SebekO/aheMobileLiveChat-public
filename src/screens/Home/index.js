import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../../styles';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.ml10}
          onPress={() => navigation.navigate('Profile')}>
          <FeatherIcon name="user" size={25} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.mr10}
          onPress={() => navigation.navigate('CometChat')}>
          <FeatherIcon name="message-circle" size={25} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>Witaj w aplikacji aheMobileLiveChat!</Text>
        <Text style={styles.content}>Wybierz: </Text>
        <Text style={styles.content}>
          <FeatherIcon name="user" size={25} color="#fff" />
          Aby zoabczyć swój profil.
        </Text>
        <Text style={styles.content}>
          <FeatherIcon name="message-circle" size={25} color="#fff" />
          Aby otworzyć czat.
        </Text>
      </View>
    </View>
  );
}
