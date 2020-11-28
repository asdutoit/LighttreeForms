import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#312b2b",
    // height: "100vh",
    "& > *": {
      // margin: theme.spacing(1)
      // width: "25ch"
    },
    "& .MuiFormLabel-root": {
      color: "#fff"
    },
    // ---- Outlined Textfield variant ----
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#737373"
    },
    // ---- Standard Textfield variant ----
    "& .MuiInput-underline:before": {
      borderBottomColor: "#737373"
    },
    "& .MuiRadio-colorSecondary.Mui-checked": {
      color: yellow[700]
    },
    "& .MuiFormControlLabel-label": {
      color: "#fff"
    },
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      color: yellow[700]
    }
  },
  gridspace: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    paddingBottom: theme.spacing(2)
  },
  text: {
    color: yellow[700],
    fontSize: "26px",
    marginBottom: "30px"
  },
  value: {
    marginBottom: "20px"
  },
  radioSelect: {
    marginBottom: "20px",
    lineHeight: "1.6"
  },
  checkboxText: {
    color: "#fff",
    marginBottom: "20px"
  },
  details: {
    backgroundColor: "#2b2727",
    padding: "110px 39px 47px 43px",
    borderRadius: "21px"
  },
  box: {
    padding: "110px 39px 47px 43px",
    borderRadius: "21px"
  }
  // checkbox: {
  //   .MuiRadio-colorSecondary.Mui-checked
  // }
  // form: {
  //   display: "flex",
  //   margin: theme.spacing(1),
  // }
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      light: yellow[600],
      main: yellow[700],
      dark: yellow[800],
      contrastText: yellow[700]
    },
    text: {
      primary: yellow[700]
    }
  }
});

export { useStyles, theme };
