import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@global": {
    header: {
      backgroundColor: "black",
      color: "white",
      minHeight: "8vh",
      margin: "0 0 1vw 0",
      '& p': {
        fontSize: '1rem',
        textAlign: 'center'
      }
    },
  },
  headerContent: {
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 auto",
  },
  logo: {
    margin: 0,
    padding: "2rem 0",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "1.3rem",
    display: "inline-block",
  },
});

export default useStyles;
