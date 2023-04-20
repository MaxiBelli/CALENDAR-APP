import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

const initialState = {
  events: [{
    id: new Date().getTime(),
    title: "Maximilian's birthday",
    start: moment().toDate(),
    end: moment().add(2, 'hours').toDate(),
    bgcolor: '#fafafa',
    notes: 'Buy the cake',
    user: {
      _id: '123',
      name: 'Maximiliano'
    }
  }],
  activeEvent: null
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    eventSetActive: (state, action) => {
      state.activeEvent = action.payload;
    },
    eventAddNew: (state, action) => {
      state.events.push(action.payload);
    },
    eventClearActiveEvent: (state) => {
      state.activeEvent = null;
    },
    eventUpdated: (state, action) => {
      state.events = state.events.map(
        e => (e.id === action.payload.id) ? action.payload : e
      );
    },
    eventDeleted: (state) => {
      state.events = state.events.filter(
        e => (e.id !== state.activeEvent.id)
      );
      state.activeEvent = null;
    }
  }
});

export const { eventSetActive, eventAddNew, eventClearActiveEvent, eventUpdated, eventDeleted } = calendarSlice.actions;

export default calendarSlice.reducer;