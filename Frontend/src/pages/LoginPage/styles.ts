import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@global": {
    input: {
      border: "#D3D0CB solid 1px",
      width: "100%",
      height: "5vh",
      textAlign: "center",
      "&:focus": {
        border: "#D3D0CB solid 1px",
      },
    },
  },
  loginButton: {
    borderRadius: "4vh",
    backgroundColor: "black",
    color: "white",
    padding: "1.2vw 1vw",
    cursor: "pointer",
    fontWeight: "300",
    border: "1px solid black",
    width: "30%",
    "&:hover:not(:active)": {
      backgroundColor: "white",
      color: "black",
      border: "1px solid black",
    },
    "@media (max-width: 1000px)": {
      width: "50%",
    },
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
    textAlign: "center",
  },
  formContent: {
    display: "flex",
    width: "60%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: "40vh",
  },
});

export default useStyles;
