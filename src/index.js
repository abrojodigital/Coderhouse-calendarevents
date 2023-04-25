import { Input, List, ModalOkCancel } from './components/index';
import { Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import { useEventState } from './hooks/useEventState';

export default function App() {
  const {
    text,
    setText,
    events,
    addEvent,
    handlerEvent,
    modalVisible,
    selectedEvent,
    cancelModal,
    deleteEvent,
  } = useEventState();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => handlerEvent(item.id)}>
      <Text style={styles.item}>{item.value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Input
        buttonColor='#52528C'
        buttonTitle='Add'
        onChangeText={(text) => setText(text)}
        onHandlerButton={addEvent}
        placeholder='Enter your event'
        value={text}
      />
      <List item={renderItem} data={events} />
      <ModalOkCancel
        modalVisibility={modalVisible}
        animationType='slide'
        modalTitle='Event Detail'
        modalTextBody='Are you sure to delete this item?'
        selected={selectedEvent?.value}
        onHandlerCancelModal={cancelModal}
        onHandlerDeleteEvent={() => deleteEvent(selectedEvent.id)}
      />
    </View>
  );
}
