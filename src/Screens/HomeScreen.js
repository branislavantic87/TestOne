import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, Modal } from 'react-native';
import { connect } from 'react-redux';
import { fetchApiData, loadMore } from '../../store/actions/ApiActions';
import AnimatedImage from '../common/AnimatedImage';
import Header from '../common/Header';
import RenderItem from '../common/RenderItem';


class HomeScreen extends Component {

    state = { uri: null, isVisible: false }

    componentDidMount() {
        this.props.fetchApiData()
    }

    onPress = (uri) => {
        this.setState({ uri, isVisible: true })
    }

    onEndAnimation = () => {
        this.setState({ uri: null, isVisible: false })
    }

    render() {
        return (
            this.props.mainDataArray.length > 0 ?
                <View style={styles.mainContainer}>
                    <Header />
                    <FlatList
                        data={this.props.mainDataArray}
                        renderItem={({ item }) => <RenderItem item={item} onPress={this.onPress} />}
                        keyExtractor={(item, index) => index.toString()}
                        onEndReachedThreshold={0.01}
                        onEndReached={() => {
                            this.props.loadMore()
                        }}
                        style={{ flex: 1 }}
                    />
                    {this.props.loadingMore &&
                        <ActivityIndicator color='blue' size='large' />}
                    <Modal
                        visible={this.state.isVisible}
                        transparent
                        onRequestClose={() => { }}
                        style={{ flex: 1 }}
                    >
                        <View style={styles.animatedHolderContainerStyles} >
                            <AnimatedImage uri={this.state.uri} onEndAnimation={this.onEndAnimation} />
                        </View>
                    </Modal>
                </View>
                :
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator color='blue' size='large' />
                </View>
        )
    }
}

const styles = {
    mainContainer: {
        flex: 1
    },
    activityIndicatorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    animatedHolderContainerStyles: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }

}

const mapStateToProps = state => {
    return {
        mainDataArray: state.mainReducer.mainDataArray,
        loadingMore: state.mainReducer.loadingMore
    }
}

export default connect(mapStateToProps, { fetchApiData, loadMore })(HomeScreen)