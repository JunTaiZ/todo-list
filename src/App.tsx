import React, {ReactElement, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
    Root,
    // Routes,
    addPrefetchExcludes
} from 'react-static'

import Home from './pages/index'
import Blog from './pages/blog'
import Done from './pages/done'
import NotFound from './pages/404'
import './app.css'
// import Link from 'components/Link'

// import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import RestoreIcon from '@material-ui/icons/Restore';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
    nav: {
        position: 'fixed',
        bottom: '0',
        width: '100%',
    },
});


addPrefetchExcludes(['dynamic'])

function App() {
    const classes = useStyles()
    const [route, setRoute] = useState('/')

    const localTodoList = localStorage.getItem('todolist')
    if (!localTodoList) {
        localStorage.setItem('todolist', JSON.stringify([{
            title: '我的第一个任务',
            done: false,
        }]))
    }

    let element: ReactElement
    switch (route) {
        case '/':
            element = <Home />
            break
        case '/blog':
            element = <Blog />
            break
        case '/done':
            element = <Done />
            break
        default:
            element = <NotFound />
    }

    function Router() {
        return element
    }



    return (
        <Root>
            <div className="content">
                <React.Suspense fallback={<em>Loading...</em>}>
                    <Router />
                </React.Suspense>
            </div>
            <BottomNavigation
                value={route}
                onChange={(_event, newValue) => {
                    setRoute(newValue);
                }}
                className={classes.nav}
                showLabels
            >
                <BottomNavigationAction label="进行中" value="/" />
                <BottomNavigationAction label="已完成" value="/done" />
                {/*<BottomNavigationAction label="Not" value="/ne" icon={<LocationOnIcon />} />*/}
            </BottomNavigation>
        </Root>
    )
}

export default App
