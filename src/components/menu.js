import React from 'react';


function Menu(props) {



    return (

        <div className="Menu">
            <div className="container">
                <div className="row">
                    
        <div className="col">
                        {props.title}
        </div>
                </div>
            </div>
        </div>
    )
}
export default Menu;