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
          source={require('./../../assets/woman_01.jpg')}
          style={dashboardStyles.userImg}
        />
      </View>
      {/* Fin du header */}
    </ScrollView>
  );
};

export default Home;
