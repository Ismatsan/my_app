import React from 'react';
import Header from "./components/Header";
import BlogEntries from "./components/BlogEntries";
import IntroductionMenu from "./components/IntroductionMenu";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import Like from "./components/Like";
import LikeWinder from "./components/LikeWinder";
import HideText from "./components/HideText";
import "./App.css"

const App = () => {
    return (
        <>
            <div className="w3-content" style={{maxWidth: "1400px"}}>
                <Header/>
                <div className="w3-row">
                    <BlogEntries/>
                    <IntroductionMenu/>
                </div>
                <Alert/>
            </div>
            <Footer/>
            <HideText/>
            <Like/>
            <LikeWinder/>

        </>
    )
}

export default App;