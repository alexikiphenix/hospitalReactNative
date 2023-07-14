import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <ScrollView>
      {/* Début du header */}
      <View>
        <Text>John Doe</Text>
        <Image style={{width: '100%'}} source={require('./../../assets/woman_01.jpg')} />
      </View>
      {/* Fin du header */}
    </ScrollView>
  );
};

export default Home;
