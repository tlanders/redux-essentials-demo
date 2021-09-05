import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {client} from "../../api/client";

export const fetchNotifications = createAsyncThunk(
    'notifications/fetchNotifications',
    async (_, {getState}) => {
        console.log('fetching notifications');
        const allNotifications = selectAllNotifications(getState());
        const [latestNotification] = allNotifications;
        console.log('latest notification: ', latestNotification);
        const latestTimestamp = latestNotification ? latestNotification.date : '';
        const response = await client.get(`/fakeApi/notifications?since=${latestTimestamp}`);
        return response.notifications;
    }
);

const notificationSlice = createSlice({
    name: 'notifications',
    initialState: [],
    reducers: {
        allNotificationsRead(state,action) {
            state.forEach(notification => notification.read = true);
        }
    },
    extraReducers: {
        [fetchNotifications.fulfilled]: (state, action) => {
            state.forEach(notification => notification.isNew = !notification.read);
            state.push(...action.payload)
            // sort with newest first
            state.sort((a,b) => b.date.localeCompare(a.date));
        }
    }
});

export const {allNotificationsRead} = notificationSlice.actions;

export default notificationSlice.reducer;

export const selectAllNotifications = state => state.notifications;