import React from 'react'



const User = (props) => {

    const activeUser = props.location.activeUser.activeUser;

    console.log(activeUser);



    


    
    
    return (

        <section className=" container d-flex mt-5">

            <div className="w-25 card border">

                <ul className=" list-unstyled">
                    <li className="my-5">Tidigare beställningar</li>
                    <li className="mb-5">Mina kontakt uppgifter</li>
                    <li className="mb-5">Mina betalningsuppgifter</li>
                </ul>

            </div>

            <div className="ms-5 mt-5">
              <h1>Hej {activeUser.firstName}!</h1>
              <p>Här kan du se alla dina tidigare beställningar!</p>





            
              <p>ordernr:{activeUser.orders}</p>
              <p>e-post:{activeUser.email}</p>
              <p>e-post:{activeUser.password}</p>








            </div>
        </section>
    )
}

export default User
