import React from 'react';
import Header from "./components/Header";
import BlogEntries from "./components/BlogEntries";
import IntroductionMenu from "./components/IntroductionMenu";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import Like from "./components/Like";


const App = () => {
    return (
        <>
            <div className="w3-content" style={{maxWidth: "1400px"}}>
                <Header/>
                <div className="w3-row">
                    <BlogEntries/>
                    <IntroductionMenu/>
                </div>
            </div>
            <Footer/>
            <Like/>
            <Alert/>
        </>
    )
}

export default App;