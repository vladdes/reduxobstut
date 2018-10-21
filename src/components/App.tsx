import * as React from 'react';
import './App.css';

import PostList from './containers/PostList';

class App extends React.Component {
  public render() {
    return (
      <div>
        <PostList />
      </div>
    );
  }
}

export default App;
