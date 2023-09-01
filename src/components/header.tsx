import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface Props {
  title: string;
  customHeaderStyle?: StyleProp<ViewStyle>;
  customTextStyle?: StyleProp<TextStyle>;
}

const Header: React.FC<Props> = ({
  title,
  customHeaderStyle,
  customTextStyle,
}) => {
  return (
    <View style={[styles.header, customHeaderStyle]}>
      <Text style={[styles.headerText, customTextStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Header;
