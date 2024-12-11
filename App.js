import 'react-native-gesture-handler';
import React from 'react';
import {View} from 'react-native';

import TabNavigation from './src/components/TabNavigation';
import {CopilotProvider} from 'react-native-copilot';

function App() {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <CopilotProvider
        overlay="view"
        backdropColor="rgba(0, 0, 0, 0.4)"
        tooltipStyle={{backgroundColor: '#ffffff', borderRadius: 10}}
        arrowColor="#db2228"
        verticalOffset={30}>
        <TabNavigation />
      </CopilotProvider>
    </View>
  );
}

export default App;
