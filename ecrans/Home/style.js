import {StyleSheet} from 'react-native';
import {PADDING} from '../../outils/constantes';

const dashboardStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: PADDING.horizontal,
    paddingVertical: PADDING.vertical,
  },
  userImg: {
    width: 50,
    height: 50,
  },
});

export default dashboardStyles;
