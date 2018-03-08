import React, {Component} from 'react'
import {View, TextInput, Button} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={{paddingTop: 50, alignItems: 'center'}}>
        <TextInput
          style={{height: 20}}
          placeholder="input"
          ref={i => (this.input = i)}
        />
        <Button title="Clear" onPress={() => this.input.clear()} />
      </View>
    )
  }
}
