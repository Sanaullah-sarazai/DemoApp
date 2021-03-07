import "./Header.css"

import Image from '../../assets/images/businessman.svg'


const Header = () => {
    return <div >
       <div className="main-container">
        <h1>Sanaullah Mustafa 
        <h2 className="email">Email: 
        <a href="#">
            Sanaullah.gn5005@gmail.com</a></h2></h1>
        
        <div className="image">
            <img src={Image} />
        </div>
        </div>       


    </div>
}

export default Header;