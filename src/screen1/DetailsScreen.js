import React from 'react'
import { Text, View } from 'react-native'
import { Header } from '../components/uikit'

export default class DetailsScreen extends React.Component {
    render() {
        const { name, image, summary } = this.props.navigation.state.params
        const { navigation } = this.props
        const data = { image, name }

        return (
            <View>
                <Header title={name} />
            </View>
        )
    }
}
