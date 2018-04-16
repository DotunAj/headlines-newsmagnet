import React, { Component } from 'react';


class Home extends Component {

  render() {
    return (
      <div>
        <div className="card-overlord">
            <div className="card-container">
                <div className="card">
                    <div className="image_container">
                        <img src="https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2018/04/15/National-Politics/Images/AP_16347784908683.jpg?t=20170517" alt="Avatar"></img>
                    </div>
                    <div className="container">
                        <h4 className="title"><b>What to eat and what not to eat?</b></h4>
                        <div className="meta">
                            <p className="date"><i className="far fa-calendar-alt"></i>July, 04, 2018</p>
                            <p className="author"><i className="far fa-address-card"></i>Dotun</p>
                            <p className="source"><i className="far fa-newspaper"></i>ABC NEWS</p>
                        </div>
                        <div className="description">
                            <p>
                            An HVDC converter converts electric power from high voltage alternating current (AC) to high-voltage direct current (HVDC), or vice versa. HVDC is used as an alternative to AC for
                            </p>
                        </div>
                        <div className="link-to-source">
                            <button href="#">Read More</button>
                        </div>

                    </div>
                </div>
            </div>

            <div className="card-container">
                <div className="card">
                    <div className="image_container">
                        <img src="https://images.wsj.net/im-7119/social" alt="Avatar"></img>
                    </div>
                    <div className="container">
                        <h4 className="title"><b>What to eat and what not to eat?</b></h4>
                        <div className="meta">
                            <p className="date"><i className="far fa-calendar-alt"></i>July, 04, 2018</p>
                            <p className="author"><i className="far fa-address-card"></i>Dotun</p>
                            <p className="source"><i className="far fa-newspaper"></i>ABC NEWS</p>
                        </div>
                        <div className="description">
                            <p>
                            An HVDC converter converts electric power from high voltage alternating current (AC) to high-voltage direct current (HVDC), or vice versa. HVDC is used as an alternative to AC for
                            </p>
                        </div>
                        <div className="link-to-source">
                            <button href="#">Read More</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
