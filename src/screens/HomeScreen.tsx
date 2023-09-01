import {View, Text, StyleSheet, Button, StatusBar} from 'react-native';
import React from 'react';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  return (
    <View style={styles.containerStyle}>
      <StatusBar backgroundColor="orange" barStyle="light-content" />
      <Text style={styles.textStyle}>This is the Home Screen</Text>
      <Button
        onPress={() => {
          navigation.navigate('Next');
        }}
        title="Try it"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 18,
    marginBottom: '2%',
  },
});

export default HomeScreen;
