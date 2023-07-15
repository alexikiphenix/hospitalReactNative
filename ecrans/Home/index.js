import {View, Text, ScrollView, Image, FlatList} from 'react-native';
import React from 'react';
import dashboardStyles from './style';

const Home = () => {
  return (
    <ScrollView>
      {/* Début du header */}
      <View style={dashboardStyles.header}>
        <Text style={dashboardStyles.userName}>Jane Doe</Text>
        <Image
          source={require('./../../assets/woman_01.jpg')}
          style={dashboardStyles.userImg}
        />
      </View>
      {/* Fin du header */}
      {/* Liste des activités */}
      <FlatList horizontal={true} />
    </ScrollView>
  );
};

export default Home;
