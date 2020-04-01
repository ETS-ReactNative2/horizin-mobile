import React from 'react';
import {View} from 'react-native';
import {ProfileHeader} from 'molecules';
import {RadioGroup} from '@components';
import {Button} from 'atoms';

export default props => {
  return (
    <View style={{}}>
      <ProfileHeader
        name={{
          first: 'Kames',
          last: 'Geraghty',
        }}
        details={{
          employer: '0xDf665b52...314391B03b',
        }}
      />
      <View style={{padding: 20}}>
        <View
          style={{backgroundColor: '#FFF', borderRadius: 5, marginTop: -35}}>
          <RadioGroup
            items={['Transactions', 'Tokens', 'Web3']}
            selectedIndex={0}
            onChange={() => {}}
          />
        </View>
        <View style={{paddingVertical: 20}}>
          <Button bg="blue">Review Transactions</Button>
          <Button bg="green" sx={{marginVertical: 10}}>
            Verify Message
          </Button>
          <Button bg="red">Create Burner Wallet</Button>
        </View>
      </View>
    </View>
  );
};
