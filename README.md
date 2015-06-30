# react-native-listitem
react-native-listitem acts as a quick default for iOS-native styling of a listitem

![listitem preview](http://i.imgur.com/x3Hlfbe.png)

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
indent          | int    | Yes      | 15        | paddingLeft for listitem contents
onPress         | func   | Yes      | null      | function executed onPress
style           | string | Yes      |           | custom style for listitem
styleText       | string | Yes      |           | custom style for listitem text

## To Do

[https://github.com/dancormier/react-native-listitem/issues](https://github.com/dancormier/react-native-listitem/issues)