import React from 'react'
import { Box, Card, Grid, makeStyles } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

const useStyles = makeStyles(theme => ({
  media: {
    height: '400px',
    width: '100%'
  },
  cardSkeleton: {
    minHeight: '100%',
    paddingBottom: theme.spacing(2)
  },
  titleSkeleton: {
    marginTop: theme.spacing(2)
  }
}))

const SearchSkeleton = () => {
  const classes = useStyles()
  return (
    <Box component={Grid} pt={2} container spacing={4}>
      {[1, 2, 3, 4, 5, 6].map(i => (
        <Grid item xs={12} md={6} lg={4} key={i}>
          <Box
            component={Card}
            className={classes.cardSkeleton}
            elevation={2}
            key={i}
          >
            <Skeleton classes={{ rect: classes.media }} variant="rect" />
            <Box pl={2} pr={2}>
              <Skeleton
                className={classes.titleSkeleton}
                variant="text"
                width="50%"
                height={40}
              />
              <Skeleton variant="text" width="75%" height={30} />
              <Box mt={1}>
                <Skeleton variant="text" height={20} width="100%" />
                <Skeleton variant="text" height={20} width="100%" />
                <Skeleton variant="text" height={20} width="100%" />
              </Box>
            </Box>
          </Box>
        </Grid>
      ))}
    </Box>
  )
}

export { SearchSkeleton }
