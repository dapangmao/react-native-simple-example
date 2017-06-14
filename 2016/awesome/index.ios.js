import React, {
    AppRegistry,
    Component,
    Image,
    ListView,
    StyleSheet,
    Text,
    View,
} from 'react-native'


const API_KEY = '7waqfqbprs7pajbz28mqf6vz'
const API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json'
const PAGE_SIZE = 35
const PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE
const REQUEST_URL = API_URL + PARAMS


class AwesomeProject extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2 // this one is a must
      }),
      loaded: false
    }
  }

  componentDidMount() {
    fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
            loaded: true
          })
        })
        .done()
  }

  render() {
    if (!this.state.loaded) {
      return renderLoadingView()
    }

    return (
        <ListView
            dataSource={this.state.dataSource}
            renderRow={renderMovie} // this is not a loop
            style={{
                paddingTop: 20,
                backgroundColor: '#F5FCFF'
              }}
        />
    )
  }
}


function renderLoadingView() {
  return (
      <View >
        <Text>
          Loading pigs movies...
        </Text>
      </View>
  )
}


function renderMovie(movie) {
  return (
      <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F5FCFF'
        }}
      >
        <Image
            source={{uri: movie.posters.thumbnail}}
            style={{
                width: 53,
                height: 81
              }}
        />
        <View style={{flex: 1}}>
          <Text style={{fontSize: 20, marginBottom: 8, textAlign: 'center'}}>
            {movie.title}
          </Text>
          <Text style={{textAlign: 'left'}}>{movie.year}</Text>
        </View>
      </View>
  )
}


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject)
