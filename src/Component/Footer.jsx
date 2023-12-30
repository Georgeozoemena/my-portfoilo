import React from "react";
// import '../Icons'
import Avatar from "./Avatar";

let Footer= ()=> {
    return(
        <footer>
            <div className="icon-container">
                <Avatar
                image={require('./insta.png')}
                alt="instagram" 
                />
                <Avatar
                image={require('./x.png')}
                alt="instagram" 
                />
                <Avatar
                image={require('./whatsapp.png')}
                alt="instagram" 
                />
            </div>
        </footer>
    )
}

export default Footer