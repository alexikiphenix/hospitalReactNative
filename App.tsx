import React from 'react';
import {View} from 'react-native';
import Routes from './routes';

const App = (): JSX.Element => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <Routes />
    </View>
  );
};

export default App;
