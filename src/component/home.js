import React from 'react';
import SearchEngine from './searchEngine';
import axios from 'axios'
import ImageList from './imageList'
   
class Home extends React.Component {
  constructor(props){
    super(props)
    this.state={images:[]}
    this.onSearchSubmit=this.onSearchSubmit.bind(this)
  }
  
  async onSearchSubmit(entry){
    const response = await axios.get(`https://pixabay.com/api/?key=25142811-0236951b39ca2870c8f49a605&q=${entry}&image_type=photo&pretty=true`)
    console.log(response.data.hits);
    this.setState({images: response.data.hits})
  }
  render() { 
    return <div className='container' style={{marginTop:"30px"}}>
      <SearchEngine onSearchSubmit={this.onSearchSubmit}/>
      we currently have {this.state.images.length} images
      <ImageList images={this.state.images}/>
    </div>;
  }
}
 
export default Home;