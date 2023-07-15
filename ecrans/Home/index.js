import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import dashboardStyles from './style';

const Home = () => {
  return (
    <ScrollView>
      {/* Début du header */}
      <View style={dashboardStyles.header}>
        <Text>John Doe</Text>
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{width: 180, height: 180}}
          source={require('./../../assets/woman_01.jpg')}
        />
      </View>
      {/* Fin du header */}
    </ScrollView>
  );
};

export default Home;
