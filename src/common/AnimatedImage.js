import React, { Component } from 'react';
import { View, Image, Animated } from 'react-native';

export default class AnimatedImage extends Component {
    state = { opacity: new Animated.Value(0) }

    onLoad = () => {
        Animated.timing(this.state.opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            Animated.timing(this.state.opacity, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true
            }).start(() => this.props.onEndAnimation());
        });
    }

    render() {
        return (
            <Animated.Image
                source={{ uri: this.props.uri }}
                resizeMode='contain'
                onLoad={this.onLoad}
                style={[
                    {
                        opacity: this.state.opacity,
                        transform: [
                            {
                                scale: this.state.opacity.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.85, 1],
                                })
                            },
                        ],
                    }, { width: '50%', height: '50%', position: 'absolute' }]}
            />
        )
    }

}