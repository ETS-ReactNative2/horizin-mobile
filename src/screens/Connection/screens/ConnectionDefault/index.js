import React from 'react';
import {View, Text} from 'react-native';
import {ProfileCardSimple} from '@components';

export default () => (
  <View style={styles.container}>
    <Text>Friends</Text>
    <Text>Community</Text>
    <Text>Applications</Text>
  </View>
);

const styles = {
  title: {fontSize: 22, marginBottom: 10},
  container: {padding: 20},
};
