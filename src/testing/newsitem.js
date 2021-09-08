import React, { Component } from 'react'

export class NewsItems extends Component {
    render() {
       let  {title , description ,imgurl,newsUrl} = this.props;
        return (
            <div className='my3 '>
                <div className="card" >
                 <img src={imgurl} alt = ''  className="card-img-top" />
                    <div className="card-body">
                      <h2 className="card-title">{title}...</h2>
                      {console.log(description)}
                      <p className="card-text">{description}...</p>
                      <a href={newsUrl}  className="btn btn-sm btn-primary">Read More</a>
                    </div>
                 </div>
            </div>
        )
    }
}

export default NewsItems