require('./Touchable/injectResponderEventPlugin');

const Animated = require('animated');
const View = require('./View/View');
const Text = require('./Text/Text');
const Image = require('./Image/Image');
const StyleSheet = require('./StyleSheet');
const Platform = require('./Platform');
const Touchable = require('./Touchable/Touchable')(Animated, StyleSheet, Platform);

Animated.inject.FlattenStyle(StyleSheet.flatten);

module.exports = {
  Animated: {
    ...Animated,
    View: Animated.createAnimatedComponent(View),
    Text: Animated.createAnimatedComponent(Text),
    Image: Animated.createAnimatedComponent(Image),
  },
  StyleSheet,
  View,
  Text,
  Image,
  Touchable,
  Platform,
  // TODO: TextInput: require('./TextInput'),
};
