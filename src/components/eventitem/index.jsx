import { Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

const EventItem = ({ item, onPressHandler }) => {
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={() => onPressHandler(item.id)}>
      <Text style={styles.item}>{item.value}</Text>
    </TouchableOpacity>
  );
};

export default EventItem;
