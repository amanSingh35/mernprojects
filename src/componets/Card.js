import react from 'react'
import { IoMailOutline, IoChevronForward, IoApps, IoNotifications, IoPieChart, IoNewspaper, IoCard, IoColorFill, IoAnalytics } from "react-icons/io5"
import { IconContext } from "react-icons"

function Card() {
    return (
        <div className="service_container">
            <div className="title_wrapper">
                <span className="service_title">Our Services</span>
                <h2>Save Time Managing Social Media<br />For Your Business</h2>
            </div>
            <div className="service_card">
                <div className="card">
                    <span className="service_icon" style={{ backgroundColor: "ddfbf9" }}>
                        <IconContext.Provider value={{ color: "#800080", size: "22px" }}>
                            <IoMailOutline />
                        </IconContext.Provider>
                    </span>
                    <h3>Ui/Ux Design <br/>For Mobile & Web</h3>
                    <a href="#">
                        <span>Learn More</span>
                        <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
                            <IoChevronForward/>
                        </IconContext.Provider>
                    </a>
                </div>

                <div className="card">
                    <span className="service_icon" style={{ backgroundColor: "ddfbf9" }}>
                        <IconContext.Provider value={{ color: "#4b3621", size: "22px" }}>
                            <IoApps />
                        </IconContext.Provider>
                    </span>
                    <h3>Web & Mobile<br/>App Development</h3>
                    <a href="#">
                        <span>Learn More</span>
                        <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
                            <IoChevronForward/>
                        </IconContext.Provider>
                    </a>
                </div>

                <div className="card">
                    <span className="service_icon" style={{ backgroundColor: "ffede6" }}>
                        <IconContext.Provider value={{ color: "#ff8559", size: "22px" }}>
                            <IoColorFill />
                        </IconContext.Provider>
                    </span>
                    <h3>Illustration Design<br/>Flat, 3d & more</h3>
                    <a href="#">
                        <span>Learn More</span>
                        <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
                            <IoChevronForward/>
                        </IconContext.Provider>
                    </a>
                </div>

                <div className="card">
                    <span className="service_icon" style={{ backgroundColor: "ffele9" }}>
                        <IconContext.Provider value={{ color: "#fa3970", size: "22px" }}>
                            <IoNotifications />
                        </IconContext.Provider>
                    </span>
                    <h3>Stratagy & Product <br/> Management</h3>
                    <a href="#">
                        <span>Learn More</span>
                        <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
                            <IoChevronForward/>
                        </IconContext.Provider>
                    </a>
                </div>

                <div className="card">
                    <span className="service_icon" style={{ backgroundColor: "dcedff" }}>
                        <IconContext.Provider value={{ color: "#56a8f4", size: "22px" }}>
                            <IoNewspaper/>
                        </IconContext.Provider>
                    </span>
                    <h3>Video-Solution</h3>
                    <a href="#">
                        <span>Learn More</span>
                        <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
                            <IoChevronForward/>
                        </IconContext.Provider>
                    </a>
                </div>

                <div className="card">
                    <span className="service_icon" style={{ backgroundColor: "dbf9ed" }}>
                        <IconContext.Provider value={{ color: "#FF0000", size: "22px" }}>
                            <IoPieChart/>
                        </IconContext.Provider>
                    </span>
                    <h3>Digital Marketing</h3>
                    <a href="#">
                        <span>Learn More</span>
                        <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
                            <IoChevronForward/>
                        </IconContext.Provider>
                    </a>
                </div>

                <div className="card">
                    <span className="service_icon" style={{ backgroundColor: "fffada" }}>
                        <IconContext.Provider value={{ color: "#f1df11", size: "22px" }}>
                            <IoCard />
                        </IconContext.Provider>
                    </span>
                    <h3>Cyber Security</h3>
                    <a href="#">
                        <span>Learn More</span>
                        <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
                            <IoChevronForward/>
                        </IconContext.Provider>
                    </a>
                </div>

                <div className="card">
                    <span className="service_icon" style={{ backgroundColor: "ddfbf9" }}>
                        <IconContext.Provider value={{ color: "#1dfdit", size: "22px" }}>
                            <IoAnalytics />
                        </IconContext.Provider>
                    </span>
                    <h3>Web Development</h3>
                    <a href="#">
                        <span>Learn More</span>
                        <IconContext.Provider value={{ color: "#14da8f", size: "18px" }}>
                            <IoChevronForward/>
                        </IconContext.Provider>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Card;