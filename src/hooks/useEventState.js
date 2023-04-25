import { useState } from 'react';

export function useEventState() {
  const [text, setText] = useState('');
  const [events, setEvents] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const addEvent = () => {
    if (text.length === 0) return;
    setEvents([
      ...events,
      {
        id: Math.random().toString(),
        value: text
      }
    ]);
    setText('');
  };

  const handlerEvent = (id) => {
    setModalVisible(!modalVisible);
    const selectedEvent = events.find(event => event.id === id);
    setSelectedEvent(selectedEvent);
  };

  const cancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedEvent(null);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
    setModalVisible(!modalVisible);
  };

  return {
    text,
    setText,
    events,
    addEvent,
    handlerEvent,
    modalVisible,
    selectedEvent,
    cancelModal,
    deleteEvent,
  };
}
