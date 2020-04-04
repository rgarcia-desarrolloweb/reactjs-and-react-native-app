import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import IoC from './ioc'
import { TYPES, User, UserLoggedUseCase } from 'shared'

IoC.init()

export default class App extends React.Component {
  state = { user: User }

  async componentDidMount() {
    let useCase: UserLoggedUseCase = IoC.container.get(TYPES.UserLoggedUseCase);
    let user = await useCase.execute()
    this.setState({ user });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#FFF", fontSize: 24 }}>{this.state.user != null ? this.state.user.name : "No User Logged"}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282C33',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
