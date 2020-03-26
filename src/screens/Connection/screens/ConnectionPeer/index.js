/* --- Global --- */
import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';

/* --- Local --- */
import {TabBottomIcon} from 'molecules';

/* --- Module --- */
import Recent from './screens/Recent';
import Timeline from './screens/Timeline';
import Archived from './screens/Archived';

export default createBottomTabNavigator(
  {
    Recent,
    Timeline,
    Archived,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused}) => {
        const {routeName} = navigation.state;
        let iconSource;
        switch (routeName) {
          case 'Recent':
            iconSource =
              'https://image.flaticon.com/icons/svg/2189/2189488.svg';
            break;
          case 'Timeline':
            iconSource =
              'https://image.flaticon.com/icons/svg/1156/1156949.svg';
            break;
          case 'Archived':
            iconSource =
              'https://image.flaticon.com/icons/svg/1790/1790008.svg';
            break;
          default:
            iconSource = 'https://image.flaticon.com/icons/svg/813/813322.svg';
        }
        return (
          <TabBottomIcon
            iconSource={iconSource}
            focused={focused}
            routeName={routeName}
          />
        );
      },
    }),

    tabBarOptions: {
      showLabel: false,
    },
  },
);
