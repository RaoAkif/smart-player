import { apiSlice } from "../../redux/api/apiSlice";

export const playersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: (params) => ({
        url: '/players',
        method: 'GET',
        params,
      }),
    }),
    getPlayerById: builder.query({
      query: (id) => ({
        url: `/players/${id}`,
        method: 'GET',
      }),
    }),
    addPlayer: builder.mutation({
      query: (player) => ({
        url: "/players",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: player,
      }),
    }),
    editPlayer: builder.mutation({
      query: ({ id, ...player }) => ({
        url: `/players/${id}`,
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: player,
      }),
    }),
    deletePlayer: builder.mutation({
      query: (id) => ({
        url: `/players/${id}`,
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const {
  useGetPlayersQuery,
  useGetPlayerByIdQuery,
  useAddPlayerMutation,
  useEditPlayerMutation,
  useDeletePlayerMutation
} = playersApiSlice;