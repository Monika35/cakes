import React,{Component} from 'react'
import '../index.css';
import logo from './image.png'


class HomePage extends Component{

    render() {
        return (<div>
            <div className="container-fluid" id="welcome-page">
                <svg width="100%" height="50px" viewBox="0 0 1300 15" className="fade-el-wait">
                    <line x1="25" x2="100%" y1="90%" y2="90%" stroke="#22d1b8" stroke-width="7" stroke-linecap="round"
                          stroke-dasharray="1, 50"/>
                </svg>
                <div className="row mt-md-3 mb-md-5">
                    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                        <div className="logo-wrapper d-flex justify-content-center align-items-center">
                            <img src={logo} alt="logo" /></div>
                    </div>

                    <div
                        className="styleText bg-white col-lg-4 col-md-12 col-sm-12 cl-xs-12 d-flex justify-content-center align-items-center flex-column fade-el-wait">
                        <h1 className="welToCake "><b>Welcome to the Cakeland</b></h1>
                        <br/>
                        <p className="font-md">
                            We are passionate about taking part in the memories and joy that every celebration life brings.
                            Take part in celebrating all your memorable life celebrations with Cakeland!
                        </p>
                        <br/>
                    </div>
                    <div className="feature-menu col-lg-4 col-md-12 col-sm-12 col-xs-12 p-0 pl-md-5 mt-5 fade-el-wait">
                        <div
                            className="sticky-menu text-light d-flex justify-content-center align-items-center flex-column ml-md-5 p-5 navBoja">
                            <i className="fas fa-birthday-cake"/>
                            <a className="text-light" href="/addProjectTask">
                                <p>Order your fave cake!</p></a>
                        </div>
                        <div
                            className="sticky-menu done bg-blue mt-5 white d-flex justify-content-center align-items-center ml-md-5 flex-column p-5">
                            <i className="far fa-star pb-2"/>
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
    }
}

export default HomePage;