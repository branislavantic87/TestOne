import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.textStyles}>Gists</Text>
        </View>
    )
}

const styles = {
    mainContainer: {
        flex: 1,
        maxHeight: 30,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'gray'
    },
    textStyles: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 3
    }
}

export default Header;