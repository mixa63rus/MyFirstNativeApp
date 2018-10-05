import React from 'react';
import { View, ScrollView } from 'react-native';
import { Header, ImageCard, Layout } from '../components/uikit'
import {
    STARGATE_DETAILS
} from '../route';

const url = 'https://api.tvmaze.com/search/shows?q=stargate'

export default class HomeScreen extends React.Component {
  state = {
    title: 'STAR GATE',
    data: []
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
    } catch(e) {
      throw e
    }
  }

  render() {
    const { title, data } = this.state
    const { navigation } = this.props

    return (
      <View>
        <Header title={title} />
        <ScrollView>
          <Layout>
            { data.map(item => (
              <ImageCard
                data={item.show}
                key={item.show.id}
                onPress={() => navigation.navigate(STARGATE_DETAILS, (item.show))}
                />
            ))
            }
          </Layout>
        </ScrollView>
      </View>
    )
  }
}
