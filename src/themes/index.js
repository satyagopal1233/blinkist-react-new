import { createTheme } from "@material-ui/core/styles";

import { grey, cyan, orange, lightGreen } from "@material-ui/core/colors";



const baseTheme = createTheme({
    
    palette: {
      primary: {
        main: '#00c853' ,
      }
    },
    typography: {
        fontSize:16,
        fontFamily: 'Raleway, Arial',
        button: {
          textTransform: "none",
         // fontStyle: 'italic',
        }
      },
      
	overrides: {
		MuiButton: {
			root: {	
				border: '1px solid'  + '#516f90'
			}
		}
	}


  });

  export default baseTheme;



