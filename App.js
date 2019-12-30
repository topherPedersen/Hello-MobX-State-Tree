import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { types } from 'mobx-state-tree';

const Todo = types.model({
  name: "",
  done: false
});

const User = types.model({
  name: ""
});

// REFERENCE: https://mobx-state-tree.js.org/intro/getting-started


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <View>
        <Text>Hello, MobX State Tree</Text>
      </View>
    );
  }
}

export default App;
