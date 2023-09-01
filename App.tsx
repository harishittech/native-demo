// import React, {useState} from 'react';
// import {View, Text, Button} from 'react-native';

// const App: React.FC = () => {
//   const [number, setNumber] = useState<number>(0);

//   const incrementNumber = () => {
//     setNumber(number + 1);
//   };

//   const decrementNumber = () => {
//     setNumber(number - 1);
//   };

//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text style={{fontSize: 24}}>Number: {number}</Text>
//       <Button title="Increment" onPress={incrementNumber} />
//       <Button title="Decrement" onPress={decrementNumber} />
//     </View>
//   );
// };

// export default App;

import React from 'react';
import Navigator from './src/utils/navigations/Navigators';
import store from './store';
import {Provider} from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
