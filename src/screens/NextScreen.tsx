import React, {useEffect} from 'react';
import {View, StyleSheet, Text, StatusBar, ScrollView} from 'react-native';
import Header from '../components/header';
import {useSelector, useDispatch} from 'react-redux';
import {fetchTodos} from '../redux/todoSlice';
import {selectTodos} from '../redux/todoSelector';

const NextScreen = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <ScrollView style={{flex: 1}}>
      {/* <Header
        title="Custom Header"
        customHeaderStyle={styles.customHeaderStyle}
        customTextStyle={styles.customTextStyle}
      /> */}
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Next Screen Content</Text>
        {todos.map((todo: any) => (
          <Text key={todo.id}>{todo.id}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  customHeaderStyle: {
    backgroundColor: 'blue',
  },
  customTextStyle: {
    color: '#fff',
  },
});

export default NextScreen;
