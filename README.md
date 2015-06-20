# react-native-listitem
iOS-style listitem component for React Native

![listitem preview](http://i.imgur.com/mV1LFqe.gif)

## Installation
```
npm install --save react-native-listitem
```

## Usage example

note: see [example/index.ios.js](https://github.com/dancormier/react-native-listitem/blob/master/example/index.ios.js) for more detailed example

```
var Listitem = require('react-native-listitem')

// Listitem component
<Listitem
  text="Hello"
  onPress={ function(){console.log('pressed')} } />

```

## Props

Prop            | Type   | Optional | Default   | Description
--------------- | ------ | -------- | --------- | -----------
text            | string | Yes      | null      | text displayed in listitem
children        | string | Yes      | null      | pass custom component as child
backgroundColor | string | Yes      | '#ffffff' | 
onPress         | func   | Yes      | null      | function executed onPress
paddingTop      | int    | Yes      | 15        |
paddingRight    | int    | Yes      | 15        |
paddingBottom   | int    | Yes      | 15        |
paddingLeft     | int    | Yes      | 0         |

## To Do

[https://github.com/dancormier/react-native-listitem/issues](https://github.com/dancormier/react-native-listitem/issues)