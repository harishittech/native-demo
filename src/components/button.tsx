import {View, Text} from 'react-native';
import React from 'react';

interface Props {
  title: string;
}

const button: React.FC = () => {
  return (
    <View>
      <Text>button</Text>
    </View>
  );
};

export default button;
