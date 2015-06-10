var React = require('react-native')
var {StyleSheet} = React

var styles = StyleSheet.create({
  li: {
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
  },
  liContainer: {
    flex: 1,
  },
  liText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '400'
  },
})

module.exports = styles