import React from "react";
import Header from "../../components/Header/Header";

const Home: React.FunctionComponent = () => {
    return (<React.Fragment>
        <div className="page">
            <Header />
            <div className="section">
                <div className="title"></div>
                <div className="middle-title"></div>
                <div className="small-p">
                </div>
                <div className="input-area">
                    <input /><button>Başlayın</button>
                </div>
            </div>
        </div>

    </React.Fragment>)
}


export default Home;