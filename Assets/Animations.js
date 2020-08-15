import {Animated, Easing} from 'react-native';

const MyAnimation = (component, value, duration) => {
  return Animated.timing(component, {
    toValue: value,
    duration: duration,
    useNativeDriver: true,
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
};
export default MyAnimation;
