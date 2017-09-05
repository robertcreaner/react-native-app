import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

class Blink extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      showText : true
    };

    setInterval(() => {
      this.setState(previousState => {
        return {showText : !previousState.showText};
      });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : '';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class BlinkComponent extends React.Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View style = {styles.mainContent}>
            <Blink text = "Hello, my name is Robbie" />
            <Blink text = "This is my application" />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  'mainContent' : {
    'textAlign': 'center'
  }
});
