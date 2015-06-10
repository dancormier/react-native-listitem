var React = require('react-native')
var {Text, TouchableHighlight, View} = React
var styles = require('./styles.js')

var Listitem = React.createClass({
  getDefaultProps: function() {
    return {
      backgroundColor: '#ffffff',
      onPress: null,
      paddingTop: 14,
      paddingRight: 16,
      paddingBottom: 16,
      paddingLeft: 16,
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

    var styleLiContainer = [styles.liContainer]
    styleLiContainer.push([{ backgroundColor: p.backgroundColor }])

    var styleLi = [styles.li]
    styleLi.push([{
      paddingTop: p.paddingTop,
      paddingRight: p.paddingRight,
      paddingBottom: p.paddingBottom,
      paddingLeft: p.paddingLeft,
    }])

    var styleLiText = [styles.liText]

    return (
      <View style={styleLiContainer}>
        <TouchableHighlight
          style={styleLi}
          underlayColor={p.underlayColor}
          onPress={self._handlePress}>
            {p.children ?
              <View>{p.children}</View>
            : <Text style={styleLiText}>{p.text}</Text>
            }
        </TouchableHighlight>
      </View>
    )
  }
})

module.exports = Listitem