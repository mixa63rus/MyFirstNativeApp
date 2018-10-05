import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import { w } from '../../../constants'

const ImageCard = ({ data }) => {
    const { h1, container, cover, sub } = styles
    const { image, name } = data

    return (
        <View style={container}>
            <View style={sub}>
                <Image style={cover} source={{uri: image}}/>
            </View>
            <Text style={h1}>{name.toUpperCase()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: w / 2.4,
        paddingVertical: 10,
        borderRadius: 10
    },
    sub: {
        shadowColor: '#000',
        shadowRadius: 8,
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 5},
        shadowOpacity: 0.4,
    },
    cover: {
        width: w / 2.4,
        height: w * 0.63,
        borderRadius: 10,

    },
    h1: {
        paddingTop: 10,
        fontFamily: 'Roboto',
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center',
        width: w / 2.4
    }
})

export { ImageCard }
