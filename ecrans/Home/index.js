import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import dashboardStyles from './style';
import {FakeActivity} from '../../fakeData/fakeActivity';
import SVG_HOSPITAL from '../../assets/imgs/svg/undraw_medicine_b-1-ol.svg';

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
      {/* Liste des activités à classer */}
      <FlatList
        data={FakeActivity}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={dashboardStyles.scrollableList}
        renderItem={({item}) => {
          // return (
          //   <TouchableOpacity style={dashboardStyles.scrollableListItem}>
          //     <SVG_HOSPITAL width={60} height={60} />
          //     <Text style={dashboardStyles.mainText}>{item.mainText}</Text>
          //     <Text style={dashboardStyles.subText}>{item.subText}</Text>
          //   </TouchableOpacity>
          // );
        }}
      />
    </ScrollView>
  );
};

export default Home;
