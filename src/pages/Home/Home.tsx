import React from "react";
import Header from "../../components/Header/Header";
import { HomePage } from "./Home.styled";

const Home: React.FunctionComponent = () => {


    return (
        <HomePage>
            <div className="overlays">
                <Header />
                <div className="section">
                    <div className='info-area'>
                        <div className="text-big">Unlimited movies, series and much more.</div>
                        <div className="text-middle"> Watch wherever you want. Cancel anytime.</div>
                        <div className="text-small">Are you ready to watch? Enter your email address to create or access your subscription.</div>
                        <div className="info-action">
                            <input placeholder="E-mail addresses" /><button>Başlayın</button>
                        </div>
                    </div>

                </div>
            </div>
        </HomePage>
    )
}


export default Home;