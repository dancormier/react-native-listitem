# react-native-listitem
iOS-style listitem component for React Native

![listitem preview](http://i.imgur.com/ZCJoDpb.png)

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
paddingTop      | int    | Yes      | 14        |
paddingRight    | int    | Yes      | 16        |
paddingBottom   | int    | Yes      | 16        |
paddingLeft     | int    | Yes      | 16        |

#### Props for swipeout

Prop                    | Type   | Optional | Default   | Description
----------------------- | ------ | -------- | --------- | -----------
swipeoutLeft            | array  | Yes      | []        | swipeout buttons on left
swipeoutRight           | array  | Yes      | []        | swipeout buttons on right
swipeoutAutoClose       | bool   | Yes      | false     | auto close on button press
swipeoutBackgroundColor | string | Yes      | '#b6bec0' | background color

For swipeout button props, see [react-native-swipeout readme](https://github.com/dancormier/react-native-swipeout/blob/master/README.md)

## To Do

[https://github.com/dancormier/react-native-listitem/issues](https://github.com/dancormier/react-native-listitem/issues)