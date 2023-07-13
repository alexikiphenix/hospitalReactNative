import React from 'react';
import {View, Text} from 'react-native';
import Routes from './routes';

const App = (): JSX.Element => {
  return (
    <View style={{flex: 1}}>
      <Routes />
      <Text>Afficher un texte d App</Text>
    </View>
  );
};

export default App;
