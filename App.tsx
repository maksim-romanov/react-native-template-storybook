// import StorybookUIRoot from './.ondevice/Storybook';
// export {StorybookUIRoot as default};

import React from 'react';
import {Text, View} from 'react-native';

import Config from 'react-native-config';

function App() {
  React.useEffect(() => {
    console.log(Config);
  }, []);

  return (
    <View>
      <Text>Hello world</Text>
    </View>
  );
}

export default App;
