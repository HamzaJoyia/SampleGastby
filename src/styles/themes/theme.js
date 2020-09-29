import { createMuiTheme } from '@material-ui/core';
export default createMuiTheme({
   palette: {
      type: 'light',
      primary: {
         main: '#592f8e',
         light: '#812d8c',
         contrastText: '#FAFAFA',
      },
      secondary: {
         main: '#ffc52c',
         contrastText: '#263238'
      },
      text: {
         primary: '#FAFAFA',
         secondary: '#000000',
      },
   },
   typography: {
      h1: {
         fontSize: "79px"
      },
      h3: {
         fontWeight: '300',
         fontSize: '37px',
      },
      h6: {
         opacity: 0.7,
         fontWeight: 'bold',
         fontSize: '1em',
      },
      subtitle2: {
         fontSize: '12px',
         opacity: 0.7,
         fontWeight: '300',
      },
      subtitle1: {
         opacity: 0.7,
         fontSize: '24px',
         fontWeight: "300",
         lineHeight: '29px'
      },
      caption: {
         color: 'white',
         fontWeight: 500,
         fontSize: "14px"
      },
      body2: {
         margin: 0,
         padding: 0,
         fontSize: '14px',
         lineHeight: '1.29',
         color: '#707070'
      }
   },
});