import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

function App(props) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/profile' render={ () => <Profile postsData={props.postsData}/>}/>
                    <Route exact path='/dialogs' render={ () => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                    <Route exact path='/news' render={ () => <News/>}/>
                    <Route exact path='/music' render={ () => <Music/>}/>
                    <Route exact path='/settings' render={ () => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
