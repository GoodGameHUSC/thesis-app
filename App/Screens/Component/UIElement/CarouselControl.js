import * as React from 'react';
import { Dimensions, Image, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';


export default class CarouselControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    }
  }

  get pagination() {
    const { activeIndex: activeSlide } = this.state;
    const { carouselItems: entries } = this.props;
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
    const { control = false, carouselItems = [], loop = true } = this.props;
    return (
      <View style={{ position: 'relative' }}>
        <Carousel
          loop={loop}
          data={carouselItems}
          layout={"default"}
          autoplay={true}
          inactiveSlideScale={1}
          ref={ref => this.carousel = ref}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
          renderItem={this._renderItem}
          onSnapToItem={index => this.setState({ activeIndex: index })}
          activeAnimationType={'spring'}
        />
        {control && this.pagination}
      </View>
    );
  }
}

