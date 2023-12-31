import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SVG_HOSPITAL from '../../assets/imgs/svg/undraw_medicine_b-1-ol.svg';
import dashboardStyles from './style';
import {FakeActivity} from '../../fakeData/fakeActivity';
import styles from './style';

const ActivityItem = () => {
  return (
    <TouchableOpacity style={styles.scrollableListItem}>
      <SVG_HOSPITAL width={60} height={60} />
      <Text style={styles.mainText}>{this.mainText}</Text>
      <Text style={styles.subText}>{this.subText}</Text>
    </TouchableOpacity>
  );
};

export default ActivityItem;
