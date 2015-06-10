/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
} = React;

var Listitem = require('react-native-listitem')

var listitemExample = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      })
    }
  }
, componentWillMount: function() {
    this.updateDataSource([
      {
        text: "hello",
        onPress: function() {console.log('pressed')},
      }, {
        children: <Text style={[{color: 'blue'}]}>Custom component</Text>,
        paddingBottom: 30,
      }
    ])
  }
, updateDataSource: function(data){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data)
    })
  }
, renderRow: function (item){
    return  <Listitem
              text={item.text}
              children={item.children}
              onPress={item.onPress}
              paddingTop={item.paddingTop}
              paddingRight={item.paddingRight}
              paddingBottom={item.paddingBottom}
              paddingLeft={item.paddingLeft}/>
  }
, render: function() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow} />
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
  },
});

AppRegistry.registerComponent('listitemExample', () => listitemExample);
