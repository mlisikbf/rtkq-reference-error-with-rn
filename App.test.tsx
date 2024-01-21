import 'react-native';
import React from 'react';
import App, {store} from './App';
import {render, screen} from '@testing-library/react-native';

import {it} from '@jest/globals';
import {Provider} from 'react-redux';

const renderComp = () => {
  return render(<App />, {
    wrapper: ({children}) => <Provider store={store}>{children}</Provider>,
  });
};

it('renders correctly', async () => {
  renderComp();

  await screen.findByText('hello');
});
