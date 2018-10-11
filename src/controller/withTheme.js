import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import lightGreen from '@material-ui/core/colors/lightGreen';
import lime from '@material-ui/core/colors/lime';
import amber from '@material-ui/core/colors/amber';
import orange from '@material-ui/core/colors/orange';
import bg from '../assets/images/knowledge-wallpaper-edited.jpg';


const withTheme = ( Child ) => {
    return class extends React.Component {
        render() {
            const theme = createMuiTheme({
                palette: {
                    primary: { main: lightGreen[ 400 ] },
                    secondary: { main: lime[ 400 ] },
                    textAmber: amber[ 400 ],
                    textOrange: orange[ 400 ],
                    textLight: '#EEEEEE',
                    textDark: '#424242',
                },
                typography: {
                    fontWeight: 'bold',
                    textAmber: amber[ 400 ],
                    textOrange: orange[ 400 ],
                },
                themeBackground: {
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    minHeight: '100vh',
                    minWidth: '100vw',
                    backgroundImage: `url(${bg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',
                },
                menuPaper: {
                    height: '100vh',
                    minHeight: '100vh',
                    // minHeight: '40vh',
                    // minWidth: '50vw',
                    minWidth: '100vw',
                    backgroundColor: 'rgba(15, 15, 15, 0.4)',
                    // marginTop: '30vh',
                },
                gamePaper: {
                    height: '50%',
                    minHeight: '40vh',
                    minWidth: '50vw',
                    backgroundColor: '#424242',
                    marginTop: '30vh',
                },
                gameComponent: {
                    // marginTop: '30vh',
                    marginTop: '60vh',
                },
            });
            return <Child theme={ theme } { ...this.props } />;
        }
    };
};

export default withTheme;