import { apiSlice } from "../../redux/api/apiSlice";

export const eventsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: (params) => ({
        url: '/events',
        method: 'GET',
        params,
      }),
    }),
    getEventsWithPlayers: builder.query({
      query: (id) => ({
        url: `/events/${id}/players`,
        method: 'GET',
      }),
    }),
    addEvent: builder.mutation({
      query: (event) => ({
        url: "/events",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: event,
      }),
    }),
    editEvent: builder.mutation({
      query: ({ id, ...event }) => ({
        url: `/events/${id}`,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { ...event },
      }),
    }),
    updatePlayerAvailabilityInAnEvent: builder.mutation({
      query: ({ eventId, playerId, availability_status }) => ({
        url: `/events/${eventId}/players/${playerId}/availability`,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { availability_status },
      }),
    }),
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `/events/${id}`,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const {
  useGetEventsWithPlayersQuery,
  useGetEventsQuery,
  useAddEventMutation,
  useEditEventMutation,
  useUpdatePlayerAvailabilityInAnEventMutation,
  useDeleteEventMutation
} = eventsApiSlice;
