import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

let count = [
    {
        code: "country=ng",
        img:"http://www.countryflags.io/ng/flat/64.png"
    },

    {
        code: "country=us",
        img:"http://www.countryflags.io/us/flat/64.png"
    },

    {
        code: "country=ca",
        img:"http://www.countryflags.io/ca/flat/64.png"
    },

    {
        code: "country=gb",
        img:"http://www.countryflags.io/gb/flat/64.png"
    },

    {
        code: "country=au",
        img:"http://www.countryflags.io/au/flat/64.png"
    },

    {
        code: "country=fr",
        img:"http://www.countryflags.io/fr/flat/64.png"
    },

    {
        code: "country=za",
        img:"http://www.countryflags.io/za/flat/64.png"
    }];

class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
          articles: [],
          sources: [],
          country: "country=ng",
          search:'',
          sourcex:''
        };

      }
      
     
    
      componentDidMount = () => {

        axios
          .get("https://newsapi.org/v2/top-headlines?"+this.state.country+"&apiKey=644635e038854371952a2aeaf41c4b1d")
          .then(res => {
    
            // create an array of contacts only with relevant data
            const articles = res.data.articles;
              
    
            // create a new "State" object without mutating 
            // the original State object. 
            const newState = Object.assign({}, this.state, {
              articles: articles
            });
    
            // store the new state object in the component's state
            this.setState(newState);
            console.log(this.state.articles);
          })
          .catch(error => console.log(error));


        axios
            .get("https://newsapi.org/v2/sources?language=en&apiKey=644635e038854371952a2aeaf41c4b1d")
            .then(res => {

            // create an array of contacts only with relevant data
            const sources = res.data.sources;
          

            // create a new "State" object without mutating 
            // the original State object. 
            const newState = Object.assign({}, this.state, {
            sources: sources
            });

            // store the new state object in the component's state
            this.setState(newState);
            console.log(this.state.sources);
        })
        .catch(error => console.log(error));
      }

      _updateSearch = (event) =>{
        this.setState({search: event.target.value})
      }

      _urlChange = () => {

      }


      

    
  render() {

    let filteredSources = this.state.sources.filter(
        (source) => {
            return source.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
      );

    return (


      <div>





        <div className="Header">
        
        <header>
          <div className="datecorner">
              <p>&copy; 2018</p>
          </div>
          <div className="logo">
            <img href="/" alt="NewsMagnet" src="/newsmagnet/assets/logo.png"></img>
          </div>
        
    
          <nav>
            <div className="clearfix">
                <div  className="logoes">
                    <a href="/" onClick={Location.reload}  ><i className="fas fa-home"></i></a>
                </div>
                <div className="filter">
                    <a id="modalBtn"><i className="fas fa-filter"></i></a>
                    <a className="dropbtn" id="dropBtn">
                      <i className="fas fa-search"></i>
                    </a>     
                </div>

                <div id="MyDrp" className="dropdown" >
                  <div  id="MyDrop" className="dropdown-content">
                    <input type="text" placeholder="Search source.." id="myInput" value={this.state.search} onChange={this._updateSearch}/>
                    <div id="MyDrap">
                    {filteredSources.map(source=>
                      <a href="#" className="srcn" onMouseUp={this.componentDidMount}
                        onMouseDown={() =>
                            {this.setState( {country: "sources=" + source.id } );}} >{source.name}
                      </a>
                    )}
                    </div>
                  </div>
                </div> 
            </div>
               
          </nav>
        </header>
      </div>








      <div className="modal" id="MyModal">    
          <div className="modal-content">

            <div className="modal-header">
                <span className="close closer">&times;</span>
                <h4>Filter By Country</h4>
            </div>

            <div className="modal-body">
                <div>
                    {count.map(c => 
                        <button className= "close" key={c.code} onMouseUp={this.componentDidMount} onMouseDown={() =>
                            {this.setState( {country: c.code } );}
                        }><img className="countryFlag" src={c.img} alt={c.code}></img></button>
                    )}
                </div>
            </div>
          </div>
      </div>      
                
          <div className="title-up">
            <h4>Headlines</h4>
          </div>
          
        <div className="card-overlord">
            {this.state.articles.map(article =>
            
            <div className="card-container" key={ article.url} >
                <div className="card">
                    <div className="image_container">
                        <img src={ article.urlToImage } key={ article.url} alt="Featured"></img>
                    </div>
                    <div className="container">
                        <h4 className="title"><b>{ article.title }</b></h4>
                        <div className="meta">
                            <p className="date"><i className="far fa-calendar-alt"></i>{article.publishedAt.slice(0,10)}</p>
                            <p className="author"><i className="far fa-address-card" key={ article.url}></i>{ article.author }</p>
                            <p className="source"><i className="far fa-newspaper" key={ article.url}></i>{ article.source.name }</p>
                        </div>
                        <div className="description">
                            <p key={ article.url}>
                            { article.description }
                            </p>
                        </div>
                        <div className="link-to-source">
                            <a href={ article.url } key={ article.url}><button>Read More</button></a>
                        </div>

                    </div>
                </div>
            </div>
            )}
        </div>
      </div>
    );
  }
}

export default Home;
