import React, {Component, Suspense} from 'react';
import store from "./redux/redux-store";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import {initializeApp} from "./redux/app-reducer";
import './App.css';
import {withSuspense} from "./hoc/withSuspense";
import Navbar from "./components/Navbar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer')); // ленивая загрузка
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer')); // ленивая загрузка

class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>;
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/profile/:userId?' render={() => // Route указыввет по какуму пути path='/profile/:userId?' должен произойти рендер компоненты
                        <ProfileContainer/>}/> {/* либо component={<ProfileContainer/>}, но тогда нельзя передать props */}
                    <Route exact path='/dialogs' render={() => {
                        return <Suspense
                            fallback={
                                <Preloader/>}> {/*  показывать прелоадер пока загружается компонент, лучше через хок */}
                            <DialogsContainer/>
                        </Suspense>
                    }}/>
                    <Route exact path='/news' render={() =>
                        <News/>}/> {/* атрибут exact заставляет отрисовывать в точности как указано в конце URL, не захватывая по пути знакомые компоненты  */}
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users'
                           render={withSuspense(UsersContainer)}/> {/* хок для ленивой загрузки и прелоадера */}
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {
        initializeApp,
    })
)(App);

const MainApp = () => {
    return (
        <BrowserRouter //позволяет использовать рендер компонент по ссылкам согласно их URL пути
            basename={process.env.PUBLIC_URL}> {/* атрибут для настройки окружения. Дословно атрибут говорит возьми PUBLIC_URL из process.env. Используется для GithubPages */}
            <Provider store={store}> {/* контекст от реакт-редакса */}
                <AppContainer/>
            </Provider>
        </BrowserRouter>
        // для GithubPages оборачивать <HashRouter>
    )
};



export default MainApp
