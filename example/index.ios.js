/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Image,
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
      }, {
        text: "With onPress",
        onPress: function() {alert('listitem onPress fired')},
      }, {
        text: "With props style, styleText, indent, backgroundColor",
        backgroundColor: '#0777fe',
        indent: 0,
        style: [styles.customLi],
        styleText: [styles.customLiText]
      }, {
        children: <View>
                    <Image style={{height: 20, width: 20}} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />
                    <Text style={[{color: '#999', fontSize: 18, fontWeight: '600', paddingBottom: 4}]}>Custom component</Text>
                    <Text style={[{color: '#666', fontSize: 12, fontWeight: '200'}]}>You can pass any component via the 'children' prop.</Text>
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
              backgroundColor={item.backgroundColor}
              indent={item.indent}
              style={item.style}
              styleText={item.styleText}/>
  }
, render: function() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          style={styles.listview} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#efeff4',
    flex: 1,
    flexDirection: 'row',
  },
  customLi: {
    borderBottomColor: '#0044aa',
    borderBottomWidth: 4,
    paddingTop: 10,
    paddingBottom: 12,
  },
  customLiText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    paddingLeft: 15,
  },
});

AppRegistry.registerComponent('listitemExample', () => listitemExample);
