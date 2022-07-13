// import StorybookUIRoot from './.ondevice/Storybook';
// export {StorybookUIRoot as default};

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Config from 'react-native-config';

function App() {
  React.useEffect(() => {
    console.log(Config);
  }, []);

  return (
    <View style={styles.container}>
      <Text>{Config.APP_ENV}</Text>
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
