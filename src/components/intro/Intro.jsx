import "./intro.scss";

export default function Intro({menuOpen}) {
    return(
        <div className={'intro ' + (menuOpen && "active")} id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/me.png" alt="Author's"/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Kedir Lluch</h1>
                    <h3>Freelance<span></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="down icon"/>
                </a>
            </div>
        </div>
    )
}   