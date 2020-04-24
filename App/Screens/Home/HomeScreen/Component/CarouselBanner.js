import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import Helpers from 'App/Theme/Helpers';

export default class CarouselBanner extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          image_url: "https://laz-img-cdn.alicdn.com/images/ims-web/TB1B0YmCO_1gK0jSZFqXXcpaXXa.jpg_2200x2200Q100.jpg_.webp"
        },
        {
          image_url: "https://laz-img-cdn.alicdn.com/images/ims-web/TB1boO_Dlr0gK0jSZFnXXbRRXXa.jpg_2200x2200Q100.jpg_.webp"
        },
        {
          image_url: "https://laz-img-cdn.alicdn.com/images/ims-web/TB1D3K_Dlr0gK0jSZFnXXbRRXXa.jpg_1200x1200.jpg"
        },
        {
          image_url: "https://laz-img-cdn.alicdn.com/images/ims-web/TB1vJybCYj1gK0jSZFuXXcrHpXa.jpg_2200x2200Q100.jpg_.webp"
        },
        {
          image_url: "https://laz-img-cdn.alicdn.com/images/ims-web/TB19Cq3Di_1gK0jSZFqXXcpaXXa.jpg_2200x2200Q100.jpg_.webp"
        },
        {
          image_url: "https://laz-img-cdn.alicdn.com/images/ims-web/TB1F8O7Dbj1gK0jSZFuXXcrHpXa.jpg_2200x2200Q100.jpg_.webp"
        },
      ],

    }
  }

  get pagination() {
    const { carouselItems: entries, activeIndex: activeSlide } = this.state;
    return (
      <View style={{
        position: 'absolute',
        bottom: 0,
        left: '35%'
      }}>
        <Pagination
          dotsLength={entries.length}
          activeDotIndex={activeSlide}
          dotContainerStyle={{
            width: 10
          }}
          containerStyle={{
            width: Dimensions.get('window').width / 4,
          }}
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'white',
          }}
          inactiveDotStyle={{
            width: 10,
            height: 3
          }}
          inactiveDotOpacity={0.7}
          inactiveDotScale={0.6}
        />
      </View>
    );
  }

  _renderItem({ item, index }) {
    return (
      <View style={{
        backgroundColor: 'red',
        borderRadius: 0,
        height: Dimensions.get('window').width / 2,
        padding: 0,
        marginLeft: 0,
        marginRight: 0,
      }}>
        <View key={index}>
          <Image
            source={{ uri: item.image_url }}
            style={{
              height: '100%',
              width: undefined,
              aspectRatio: 2,
            }} />
        </View>
      </View>

    )
  }

  render() {
    return (
      <View style={{ position: 'relative' }}>
        <Carousel
          layout={"default"}
          autoplay={true}
          inactiveSlideScale={1}
          ref={ref => this.carousel = ref}
          data={this.state.carouselItems}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
          renderItem={this._renderItem}
          onSnapToItem={index => this.setState({ activeIndex: index })}
          activeAnimationType={'spring'}
        />
        {this.pagination}
      </View>
    );
  }
}

