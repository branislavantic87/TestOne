import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import HomeScreen from './Screens/HomeScreen';


const RouterComponent = () => {
    return (
        <Router>
            <Stack>
                <Scene hideNavBar key='home' initial >
                    <Scene hideBackImage key='HomeScreen' component={HomeScreen} />
                </Scene>
            </Stack>
        </Router>
    )
}

export default RouterComponent;