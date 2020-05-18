import React from 'react';
import {StyleSheet, Button} from 'react-native';
import Colors from '../constants/Colors';

const UIButtonHeader = ({children, title, style, ...props}) => {
  return (
    <Button styles={styles.buttonHeader} {...props} title={title}>
      {children}
    </Button>
  );
};

export default UIButtonHeader;

const styles = StyleSheet.create({
  buttonHeader: {},
});
