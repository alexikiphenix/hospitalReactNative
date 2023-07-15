import {View, Text, ScrollView, Image, FlatList} from 'react-native';
import React from 'react';
import dashboardStyles from './style';
import {FakeActivity} from '../../fakeData/fakeActivity';

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
      <FlatList
        data={FakeActivity}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={dashboardStyles.scrollableList}
        renderItem={({item}) => {
          return (
            <View>
              <Text>{item.mainText}</Text>
            </View>
          );
        }}
      />
    </ScrollView>
  );
};

export default Home;
