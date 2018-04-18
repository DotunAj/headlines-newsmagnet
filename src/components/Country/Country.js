// import React, { Component } from 'react';
// import axios from 'axios';


// class Country extends Component {

//     constructor(props){
//         super(props);
    
//         this.state = {
//           sources: [],
//           search: ''
//         };
    
//       }

//       componentDidMount = () => {

//         axios
//           .get("https://newsapi.org/v2/sources?language=en&apiKey=644635e038854371952a2aeaf41c4b1d")
//           .then(res => {
    
//             // create an array of contacts only with relevant data
//             const sources = res.data.sources;
              
    
//             // create a new "State" object without mutating 
//             // the original State object. 
//             const newState = Object.assign({}, this.state, {
//               sources: sources
//             });
    
//             // store the new state object in the component's state
//             this.setState(newState);
//             console.log(this.state.sources);
//           })
//           .catch(error => console.log(error));
//       }

//       _updateSearch = (event) =>{
//         this.setState({search: event.target.value})
//       }
    

//   render() {
//     let filteredSources = this.state.sources.filter(
//         (source) => {
//             return source.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
//         }
//     );

//     return (

//       <div>
//         <input type="text" value={this.state.search} onChange={this._updateSearch} />
          
//           {filteredSources.map(source =>

//             <div className="title-up" key={ source.id }>
//                 <h4>{ source.name }</h4>
//             </div>

//           )}
          
        
//        <div className="card-overlord">
//             <div className="card-container">
//                 <div className="card">
//                     <div className="image_container">
//                         <img src="https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2018/04/15/National-Politics/Images/AP_16347784908683.jpg?t=20170517" alt="Avatar"></img>
//                     </div>
//                     <div className="container">
//                         <h4 className="title"><b>What to eat and what not to eat?</b></h4>
//                         <div className="meta">
//                             <p className="date"><i className="far fa-calendar-alt"></i>July, 04, 2018</p>
//                             <p className="author"><i className="far fa-address-card"></i>Dotun</p>
//                             <p className="source"><i className="far fa-newspaper"></i>ABC NEWS</p>
//                         </div>
//                         <div className="description">
//                             <p>
//                             An HVDC converter converts electric power from high voltage alternating current (AC) to high-voltage direct current (HVDC), or vice versa. HVDC is used as an alternative to AC for
//                             </p>
//                         </div>
//                         <div className="link-to-source">
//                             <button href="#">Read More</button>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Country;
