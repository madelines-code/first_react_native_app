import React from 'react';
import {View} from 'react-native';

const AppView = props => {
  const getBorder = () => {
    if (props.border) {
      return {
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#847059',
      };
    }

    return {};
  };
  return (
    <View
      style={{
        ...getBorder(),
        ...props.style,
        margin: 10,
        padding: 10,
      }}>
      {props.children}
    </View>
  );
};

export default AppView;
