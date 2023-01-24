import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
    render(){
        return(
            <Router>
                <div className='Header'>
                    <header>
                        <Navbar>
                            <Switch>
                                <Route path='/' component={Home}></Route>
                                <Route path='/home' component={Home}></Route>
                                <Route path='/about' component={About}></Route>
                            </Switch>
                        </Navbar>
                    </header>
                </div>
            </Router>
        );
    }
}


class Navbar extends React.Component {
    render(){
        return(
            <nav className="header-nav">
                <ul className="header-nav__list">
                    <li className="header-nav__item header-nav__description">
                        <Link to="/">Rodolfo Ramirez</Link>
                    </li>
                    <li className="header-nav__item header-nav__description">
                        <Link to="/home">Home</Link>
                    </li>
                    <li className="header-nav__item header-nav__description">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('initial-app'));
root.render(<App />);