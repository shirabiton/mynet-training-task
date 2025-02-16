import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@global": {
    ul: {
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      "@media (min-width: 1024px)": {
        gap: "10px",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        padding: 0,
        margin: "0 auto",
      },
    },
    li: {
      "@media (min-width: 1024px)": {
        borderRight: "1px solid #ccc",
        margin: "2vw",
        // Remove right border for the extreme items in each row
        "&:first-child, &:last-child, &:nth-child(4n)": {
          borderRight: "none",
        },
      },
      "@media (max-width: 1023px)": {
        borderBottom: "1px solid #ccc",
        "&:last-child": {
          borderBottom: "none",
        },
      },
    },
  },
  ulContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
});

export default useStyles;
