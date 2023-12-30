import React from 'react'
import NavBar from './Navigation'
import Button from '../Button'
import Theme from '../Component/theme'

let FirstPage= ()=>{
    return(
        <div>
            <div className="curve"></div>
            <NavBar/>
            <div className="imger">
                <img src={require("../Icons/My ids.png")} alt="" />
            </div>
            <div className="pg-1">
                <div className="info">
                    <div className="text">
                        <p className='intro'>Hi there 👋, Am 👇</p>
                        <div className="bio">
                            <h1>George Ozoemena</h1>
                            <p>A Web Developer, CAD Designer and Student Architect</p>
                        </div>
                    </div>
                    <div className="btn-container">
                        <Button btname="Know Me"/>
                    </div>
                </div>
            </div>
            <Theme/>
        </div>
    )
}

export default FirstPage