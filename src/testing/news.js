import React, { Component } from 'react'
import NewsItems from './newsitem';

export class News extends Component {
  
  constructor(){
    super();
    console.log("hello ");
    this.state = {
      article : []
    }
  }
  async componentDidMount() {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=1908f18795f14054853a91b92430fc3a"
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData.articles);
    this.setState({article :parseData.articles})
//     for ( i = 0 ;i < article.length;i++){
//       console.log(i);
//    }
//   console.log(a);
    console.log(this.state.article)
    console.log("hey");
  }
  
    render() {
        return (
            <div className= "container my-4">
                <h3>VP - NEWS - Top Headline</h3>
                <div className='row'>
                  {this.state.article.map((element) => {
                    return <div className="col-md-4 " key={element.url}>
                       <NewsItems title= {element.title.slice(0,50)} description = {element.description} imgurl = {element.urlToImage} newsUrl ={element.url}/>
                    </div>  
                  })}
                </div>    
            </div>
        )
    }
}

export default News