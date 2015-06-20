var React = require('react-native')
var {Text, TouchableHighlight, View} = React

var styles = require('./styles.js')

var Listitem = React.createClass({
  getDefaultProps: function() {
    return {
      onPress: null,
      text: null,
      underlayColor: "rgba(0,0,0,.015)",
    }
  }
, _handlePress: function() {
    var onPress = this.props.onPress
    if (onPress) onPress()
  }
, render: function() {
    var self = this
    var p = self.props

    //  style container (for backgroundColor and indent)
    var styleLiContainer = [styles.liContainer]
    if (p.backgroundColor) styleLiContainer.push([{ backgroundColor: p.backgroundColor }])
    if (p.indent > -1) styleLiContainer.push([{ paddingLeft: p.indent }])

    var listitemChild = <Text style={[styles.liText, p.styleText]}>{p.text}</Text>
    if (p.children) var listitemChild = <View>{p.children}</View>

    var listitem = <View style={[styles.li, p.style]}>{listitemChild}</View>

    return (
      p.onPress ?
        <TouchableHighlight
          style={styleLiContainer}
          underlayColor={p.underlayColor}
          onPress={self._handlePress}>
            {listitem}
        </TouchableHighlight>
      : <View style={styleLiContainer}>{listitem}</View>
    )
  }
})

module.exports = Listitem