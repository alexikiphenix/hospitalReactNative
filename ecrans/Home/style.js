import {StyleSheet} from 'react-native';
import {PADDING} from '../../outils/constantes';

const dashboardStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
    backgroundColor: 'white',
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userName: {
    fontSize: 16,
  },
  // styliser la Flatlist
  scrollableList: {

  },
  scrollableListItem: {
    
  }
});

export default dashboardStyles;
