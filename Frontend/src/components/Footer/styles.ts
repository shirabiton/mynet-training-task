import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    '@global': {
        footer: {
            backgroundColor: '#E7E6E4',
            minHeight: '1vh',
            margin: '0',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            '& p': {
                margin: 0,
                padding: '0.5rem',
                fontSize: '0.8rem',
                display: 'inline-block',
            }
        }
    }
})

export default useStyles;