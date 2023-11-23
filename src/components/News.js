import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import Spiner from './Spiner'

export class News extends Component {
        static defaultProps ={
            country: "in",
            pageSize: 8,
            category: "general"
        }
        static propTypes ={
            country: PropTypes.string,
            pageSize: PropTypes.number,
            category: PropTypes.string,
        }
   
             constructor(){
                super();
                console.log('this is constructor');
                this.state = {
                articles: [],
                loading: false,
                page:1

            }
    }
        async componentDidMount (){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=656a81704535468d8f139fd7622795f6&page1&pageSize=${this.props.pageSize}`
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
        }
        handlePrevClick =async ()=>{
            console.log('Previous')
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=656a81704535468d8f139fd7622795f6&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
            
            this.setState({
                page: this.state.page - 1,
                articles: parsedData.articles,
                loading: false
            })

        }
        handleNextClick =async ()=>{
            console.log('Next')
            if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=656a81704535468d8f139fd7622795f6&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true});
            let data = await fetch(url);
            let parsedData = await data.json()
            
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }

        }
  render() {
  
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{margin: '35px 0px'}}>News Hub - Top Headlines</h1>
        {this.state.loading && <Spiner/>}
        <div className='row'>
        {!this.state.loading && this.state.articles.map((element)=>{
         return   <div className='col-md-4' key={element.url} >
            <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
        <div className='container' class="d-flex justify-content-between">
            <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>       
         </div>
        </div>
      </div>
    )
  }
}

export default News