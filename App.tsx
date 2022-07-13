// import StorybookUIRoot from './.ondevice/Storybook';
// export { StorybookUIRoot as default };

import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import RNConfig from 'react-native-config';

import { MyButton } from 'components/Button/Button';

function App() {
  React.useEffect(() => {
    // console.log(components);
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text>{RNConfig.APP_ENV}</Text> */}
      <MyButton onPress={() => console.log('!!!!!!1')} text="hello"></MyButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
