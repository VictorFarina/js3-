import React from 'react'

const Welcome = ({activeUser}) => {

    

    return (
        
       <div>
            <div className="ms-5 mt-5">
                    <h1>Hej {activeUser.firstName}!</h1>
                    <small>Här kan du se dina beställningar och användaruppgifter!</small>
            </div>
       </div>
    )  
}

export default Welcome
