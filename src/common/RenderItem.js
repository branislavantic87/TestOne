import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'

const RenderItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={() => onPress(item.owner.avatar_url)} style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image style={{ width: 50, height: 50 }} source={{ uri: item.owner.avatar_url }} />
            </View>
            <View style={styles.filenameContainer}>
                <Text numberOfLine={2} style={{ color: 'black' }}>{Object.keys(item.files)[0]}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = {
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor: '#141414',
        borderBottomWidth: 0.5
    },
    imageContainer: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    filenameContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 3
    }
}

export default RenderItem;