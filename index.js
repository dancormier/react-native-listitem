var React = require('react-native')
var {Text, TouchableHighlight, View} = React
var styles = require('./styles.js')

var Listitem = React.createClass({
  getDefaultProps: function() {
    return {
      onPress: function() {console.log('pressed')},
      text: null,
      underlayColor: "rgba(0,0,0,.015)",
    }
  }
, _handlePress: function() {
    this.props.onPress()
  }
, render: function() {
    var self = this
    var p = self.props

    var styleLi = [styles.li]
    var styleLiContainer = [styles.liContainer]
    var styleLiText = [styles.liText]

    return (
      <View style={styleLiContainer}>
        <TouchableHighlight
          style={styleLi}
          underlayColor={p.underlayColor}
          onPress={self._handlePress}>
            <Text style={styleLiText}>{p.text}</Text>
        </TouchableHighlight>
      </View>
    )
  }
})

module.exports = Listitem