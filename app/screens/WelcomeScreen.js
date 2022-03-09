import React from 'react';
import { SafeAreaView } from 'react-native';

import Login from '../screens/Login';

function WelcomeScreen(props) {
    return (
        <SafeAreaView>
            <Login />
        </SafeAreaView>
    );
}

export default WelcomeScreen;