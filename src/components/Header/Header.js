// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// class Header extends Component {

//   constructor(props){
//     super(props);

//     this.state = {
//       sources: [],
//       search: ''
//     };

//   }

//   componentDidMount = () => {

//     axios
//       .get("https://newsapi.org/v2/sources?language=en&apiKey=644635e038854371952a2aeaf41c4b1d")
//       .then(res => {

//         // create an array of contacts only with relevant data
//         const sources = res.data.sources;
          

//         // create a new "State" object without mutating 
//         // the original State object. 
//         const newState = Object.assign({}, this.state, {
//           sources: sources
//         });

//         // store the new state object in the component's state
//         this.setState(newState);
//         console.log(this.state.sources);
//       })
//       .catch(error => console.log(error));
//   }

//   _updateSearch = (event) =>{
//     this.setState({search: event.target.value})
//   }

//   render() {


//     let filteredSources = this.state.sources.filter(
//       (source) => {
//           return source.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
//       }
//     );

//     return (
//       <div className="Header">
        
//         <header>
//           <div className="datecorner">
//               <p>{this.props.name}</p>
//           </div>
//           <div className="logo">
//             <img alt="NewsMagnet" src="/assets/logo.png"></img>
//           </div>
        
    
//           <nav>
//             <div className="clearfix">
//                 <div className="logoes">
//                     <Link to="/" ><i className="fas fa-home"></i></Link>
//                 </div>
//                 <div className="filter">
//                     <a id="modalBtn"><i className="fas fa-filter"></i></a>
//                     <a className="dropbtn" id="dropBtn">
//                       <i className="fas fa-search"></i>
//                     </a>     
//                 </div>

//                 <div className="dropdown" >
//                   <div id="MyDrop" className="dropdown-content">
//                     <input type="text" placeholder="Search source.." id="myInput" value={this.state.search} onChange={this._updateSearch}/>
//                     {filteredSources.map(source=>
//                       <a href="#" >{source.name}</a>
//                     )}
                    
//                   </div>
//                 </div> 
//             </div>
               
//           </nav>
//         </header>
//       </div>
//     );
//   }
// }

// export default Header;