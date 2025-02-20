import {createStyles, makeStyles, Theme} from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        padding: '20px 50px 20px 50px',
        boxShadow: 'none',
        borderRadius: '0px',
        height: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',

    },
    title: {
        fontSize: '24px',
        marginBottom: '20px',
        display: 'flex',
    },
    header: {
        background: theme.palette.primary.main,
        '& th': {
            color: '#fff',
            background: theme.palette.primary.main,
            fontWeight: '400',
            fontSize: '14px',
            padding: '0px 10px !important',
            whiteSpace: 'nowrap'
        }
    },
    tableWrap: {
        height: 'calc(100% - 60px)',
        maxheight: 'calc(100% - 60px)',
        '& td': {
            padding: '5px 10px !important',
            fontSize: '14px'
        },
        '& p': {
            fontSize: '14px'
        }
    },

    cellStatus: {
        borderLeft: '5px solid',
        '& a': {
            color: theme.palette.primary.main,
            textDecoration: 'none'
        }
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '10px'
    },
    addIcon: {
        marginLeft: 'auto',
    },
    titleButtons: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '10px',
    },
    mainContainer: {
        display: 'flex',
        '@media (max-width: 1250px)': {
            flexDirection: 'column-reverse',
        }
    },
    notificationsContainer: {
        display: 'flex',
        marginTop: '-12px',
        width: '30%',
        height: 'calc(100vh - 300px)',
        '@media (max-width: 1250px)': {
            width: '100%',
            height: 'calc(100vh - 600px)',
            '&>div': {
                '&>div': {
                    '&>div': {
                        padding: '0px 20px 0px 0px'
                    }
                }
            }
        }
    },
    dodProfileContainer: {
        width: '70%',
        '@media (max-width: 1250px)': {
            width: '100%',
        }
    },
    userTitle: {
        fontSize: '16px',
        marginBottom: '20px',
    },
    groupsList: {
        marginTop: '20px',
        marginBottom: '20px',
    },
    group: {
        marginRight: '10px',
        marginBottom: '10px',
    }
}));