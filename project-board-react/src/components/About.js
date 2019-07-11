import React,{Component} from 'react'
import '../index.css';
import photo from './cooking.png'


class About extends Component{

    render() {
        return (
                <div className="container justify-content-center bg-light welToCake styleText">
                <div className="row">
                    <div className="col-6 justify-content-center">
                        <img src={photo} alt="logo" /></div>

                    <div className="col-6">
                        <br/>
                        <h1 className="display-4"><b>About Cakeland</b></h1>
                        <p className="text-black-50"><b>
                            Cakeland is a family owned bakery that has been serving the beautiful
                            city of Skopje and its surrounding area for over 40 years. Each generation has been instrumental
                            in the construction of Cakeland and the loyal relationships developed with their customers.
                            Cakeland is passionate about taking part in the memories and joy that every celebration life brings.
                            They do this by captivating this within every cake they bake. Cakeland welcomes every new
                            customer for the opportunity to take part in celebrating all your memorable life celebrations with Cakeland!
                        </b></p>
                    </div>
                </div>
                </div>
        )
    }
}

export default About;