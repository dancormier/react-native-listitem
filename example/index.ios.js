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
        text: "Simple listitem",
        onPress: function() {console.log('pressed')},
      }, {
        text: "Listitem with onPress",
        onPress: function() {alert('listitem onPress fired')},
      }, {
        text: "With swipeout buttons",
        swipeoutRight: [
          {
            text: "Mark as Read",
            onPress: function() {alert('Swipeout button onPress fired')},
            type: "primary",
          }
        ],
      }, {
        children: <View>
                    <Text style={[{color: '#999', fontSize: 18, fontWeight: 600, paddingBottom: 4}]}>Custom component</Text>
                    <Text style={[{color: '#666', fontSize: 12, fontWeight: 200}]}>You can pass any component via the 'children' prop.</Text>
                  </View>,
        paddingTop: 10,
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
              paddingLeft={item.paddingLeft}
              swipeoutRight={item.swipeoutRight}
              swipeoutLeft={item.swipeoutLeft}
              swipeoutAutoClose={item.swipeoutAutoClose}
              swipeoutBackgroundColor={item.swipeoutBackgroundColor}/>
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
