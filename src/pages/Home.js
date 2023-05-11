import React from 'react'
// import Functions from './cmps/Functions';
// import Intro from './cmps/Intro'

function Home(isAuth) {
    
    return (
    <>
        {isAuth === true?
        (<div className="home">
            <h1>Functionalities</h1>
        </div>)
        :(<div className="home">
            <h1>Personal Portfolio Pitcher</h1>
        </div>)}

        {/* <div>{isAuth}</div> */}
        {console.log(isAuth)}
    </>
    )
}

export default Home;
