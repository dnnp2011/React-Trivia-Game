import { createMuiTheme } from '@material-ui/core';
import lightGreen from '@material-ui/core/colors/lightGreen';
import lime from '@material-ui/core/colors/lime';
import amber from '@material-ui/core/colors/amber';
import orange from '@material-ui/core/colors/orange';
import bg from '../assets/images/knowledge-wallpaper-edited.jpg';


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
        // justifyContent: 'center',
        // alignContent: 'center',
    },
    menuPaper: {
        // minHeight: '100vh',
        // minWidth: '100vw',
        // height: '100%',
        // width: '100%',
        backgroundColor: 'rgba(15, 15, 15, 0.4)',
        // display: 'inline-flex',
        // justifyContent: 'center',
        // alignContent: 'center',
        // textAlign: 'center',
        // justify: 'center',
    },
    gamePaper: {
        corner: '10px',
        // minHeight: '40vh',
        // minWidth: '50vw',
        // minHeight: '10vh',
        // height: '40vh',
        backgroundColor: 'rgba(66, 66, 66, 0.8)',
        // margin: 'auto',
        borderRadius: '10px',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        justify: 'center',
        textAlign: 'center',
        alignContent: 'center',
    },
    questionCard: {
        // minHeight: '40vh',
        // minWidth: '450px',
        // height: '50%',
        // maxWidth: '50vw',
        margin: 'auto',
        backgroundColor: 'rgba(66, 66, 66, 0.8)',
        display: 'flex',
    },
    center: {
        margin: 'auto',
    },
    centerContent: {
        display: 'flex',
        justifyContent: 'center',
        justify: 'center',
        textAlign: 'center',
    },
    trueFalseButton: {
        paddingTop: '8px',
        paddingBottom: '8px',
        margin: '5px',
    },
});

export default theme;