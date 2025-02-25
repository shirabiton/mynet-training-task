import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    '@global': {
        h1: {
            fontSize: '7vw',
            fontWeight: '500'
        },
        p: {
            fontSize: '1.6vw'
        },
        button: {
            borderRadius: '20px',
            width: '10vw',
            minHeight: '2vw',
            border: 'none',
            cursor: 'pointer',
            marginTop: '4vw',
            '&:hover': {
                border: '1px solid black'
            }
        }
    },
    notFoundContainer: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '20vw',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default useStyles;