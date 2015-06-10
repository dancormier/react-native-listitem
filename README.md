# react-native-listitem
iOS-style listitem component

## Installation
```
npm install --save react-native-listitem
```

## Usage example

note: see example/index.ios.js for more detailed example

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
onPress         | func   | Yes      | null      | function executed onPress
text            | string | Yes      | null      | text displayed in listitem


## To Do

[https://github.com/dancormier/react-native-listitem/issues](https://github.com/dancormier/react-native-listitem/issues)