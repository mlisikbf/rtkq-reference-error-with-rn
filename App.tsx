import React from 'react';

import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {Text} from 'react-native';

const api = createApi({
  keepUnusedDataFor: 0,
  baseQuery: fetchBaseQuery(),
  endpoints: builder => ({
    getSome: builder.query<string, void>({
      queryFn: () => {
        return {
          data: 'hello',
        };
      },
    }),
  }),
});

export const store = configureStore({
  reducer: combineReducers({[api.reducerPath]: api.reducer}),
  middleware: gdm => gdm().concat(api.middleware),
});

function App() {
  const {data} = api.useGetSomeQuery();

  return <Text>{data}</Text>;
}

export default function ActualApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
