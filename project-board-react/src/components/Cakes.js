import React,{Component} from 'react'
import '../index.css';
import photo from './wedding1.jpg'


class Cakes extends Component{

    render() {
        return (
            <div className="container justify-content-center bg-light welToCake styleText">
                <div className="row">
                    <div className="col-6">
                        <br/>
                        <h1 className="display-4"><b>WEDDING</b></h1>
                        <p className="text-black-50"><b>
                            One of our greatest joys at Cakeland is being able to sit down with a couple to create their dream wedding cake!
                            From the bridal shower, custom wedding dessert tables, to the actual star of the show - the wedding cake!
                            Whether we are developing a grooms or brides cake we are filled with inspiration from our clients.
                        </b></p>
                    </div>

                    <div className="col-6 justify-content-center">
                        <img src={photo} alt="logo" />
                    </div>


                </div>
            </div>
        )
    }
}

export default Cakes;