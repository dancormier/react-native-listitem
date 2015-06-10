/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Listitem = require('react-native-listitem')

var listitemExample = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Listitem
          text="Hello"
          onPress={ function(){console.log('pressed')} }/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('listitemExample', () => listitemExample);
