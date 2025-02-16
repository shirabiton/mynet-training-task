import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@global": {
    input: {
      borderRadius: '15px',
      border: '#D3D0CB solid 1px',
      width: '20vw',
      height: '5vh',
      textAlign: 'center',
      "&:focus": {
        border: '#D3D0CB solid 1px',
      }
    },
    button: {
      backgroundColor: "white",
      padding: "0.5vw 1vw",
      cursor: "pointer",
      fontWeight: "300",
      border: "1px solid black",
      minWidth: "5vw",
      "&:hover:not(:active)": {
        backgroundColor: "black",
        color: "white",
        border: "1px solid white",
      },
    }
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: '90vh',
    textAlign: 'center'
  },
  formContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: '40vh',
  }
});

export default useStyles;