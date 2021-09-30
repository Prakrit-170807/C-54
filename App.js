import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


export default class App extends Component {
  render() {
    return (

      <View style={{ marginTop: 100, backgroundColor: '' }}>
        <RedButton color="red" />
        <Text>My First React Component</Text>
      </View>

    );
  }
}

class RedButton extends Component {
  // displayAlert=function(){
  //   alert("caution!!!")
  // }
  displayAlert = () => {
    alert("caution!!!")
  }
  render() {
    return (
      <Button  title="Click Me" onPress={this.displayAlert} />

    )
  }
}