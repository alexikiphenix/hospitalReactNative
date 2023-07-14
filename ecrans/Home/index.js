import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <ScrollView>
      <View>
        <Text>John Doe</Text>
        <Image source={require('./../../assets/woman_01.jpg')} />
      </View>
    </ScrollView>
  );
};

export default Home;
