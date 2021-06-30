import { createMuiTheme} from '@material-ui/core/styles';

const Black = "#202121";
const Gold = "#DAA520";
const Silver = "#C0C0C0";
const White = "#ffffff";
const Gross = "#501B1D";
const Grey = "#868686"

export default createMuiTheme({
    palette: {
        common : {
            black : `${Gross}`,
            gold : `${Gold}`,
            white : `${White}`,
            gross : `${Gross}`
        },
      primary: {
        main: `${Gross}`
      },
      secondary: {
        main: `${Gold}`
      },
    },
    typography : {
        tab : {
            fontFamily : 'Saira Condensed' ,
            fontSize : "1.5rem"  ,
            textTransform : "none",
            fontWeight : 400  ,
            color :`${White}`
        } ,
        h4 : {
            fontFamily : "Arial",
            fontSize : "1.75rem" ,
            color : `${Gold}`,
            fontWeight : 700
        },
        h2 : {
            fontFamily : "M PLUS Rounded 1c",
            fontSize : "7rem" ,
            color : `${Gold}`,
            fontWeight : 700
        },
        h3 : {
            fontFamily : "M PLUS Rounded 1c",
            fontSize : "1.7rem" ,
            color : `${White}`,
            fontWeight : 700
        },
        subtitle1 : {
            fontSize : "1.25rem",
            fontWeight : 300,
            color : "white"
        },
        h6 : {
            color : "white",
            fontFamily : "M PLUS Rounded 1c"
        }
    },
    overrides : {
        MuiInputLabel : {
            root : {
                color : "white" ,
                fontSize : "1.2rem"
            }
        },
        MuiInput : {
            root : {
                color : "white",
                fontWeight : 300 
            },
            underline : {
                "&:before" : {
                    borderBottom: `2px solid ${White}`
                },
                "&:hover:not($disabled):not($focused):not($error):before" : {
                    borderBottom: `2px solid ${White}`
                }
            }
        }
    }
  });