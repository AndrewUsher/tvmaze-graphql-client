import React from 'react'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  OutlinedInput,
  InputAdornment,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { gql } from 'apollo-boost'
import { useLazyQuery } from '@apollo/react-hooks'
import SearchRounded from '@material-ui/icons/SearchRounded'

const SEARCH_QUERY = gql`
  query searchQuery($searchQuery: String!) {
    search(query: $searchQuery) {
      genres
      name
      mediumImage
      summary
    }
  }
`

const useStyles = makeStyles({
  card: {
    minHeight: '100%'
  },
  media: {
    height: 'auto',
    width: '100%'
  }
})

const Search = () => {
  const classes = useStyles()
  const [inputText, setInputText] = React.useState('')
  const [searchQuery, { loading, data }] = useLazyQuery(SEARCH_QUERY)
  const startSearch = () => {
    searchQuery({ variables: { searchQuery: inputText } })
  }
  const handleSearchChange = e => {
    if (e.keyCode === 13) {
      startSearch()
    }
    setInputText(e.target.value)
  }

  return (
    <Box component={Grid} container p={2}>
      <Grid item container>
        <Grid item xs={12}>
          <Box mb={2}>
            <Typography variant="h4">Welcome to TV Guru!</Typography>
          </Box>
          <Box mb={2}>
            <Typography variant="body1">
              This is the authoritative source for movie, TV and celebrity
              content. Find ratings and reviews for the newest TV shows.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid item container justify="center">
        <Grid item xs={12} md={3}>
          <OutlinedInput
            fullWidth
            placeholder="Search for a TV Show"
            onChange={handleSearchChange}
            value={inputText}
            endAdornment={
              <InputAdornment position="start" onClick={startSearch}>
                <SearchRounded cursor="pointer" />
              </InputAdornment>
            }
          />
        </Grid>
      </Grid>
      {!inputText && (
        <Box component={Grid} item container justify="center">
          <Box mt={2}>
            <Typography variant="body2" mt={2}>
              Search for a TV Show above
            </Typography>
          </Box>
        </Box>
      )}
      {/* {data && (
        <Grid container>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Grid>
      )} */}
      {data && (
        <Box component={Grid} pt={2} container spacing={4}>
          {data.search.map(result => (
            <Grid item xs={12} md={6} lg={4} key={result.name}>
              <Box component={Card} className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    component="img"
                    image={result.mediumImage}
                  />
                  <CardContent>
                    <Typography variant="h5">{result.name}</Typography>
                    {result.genres.length ? (
                      <Typography variant="h6" gutterBottom>
                        Genres: {result.genres.join(', ')}
                      </Typography>
                    ) : null}
                    <Typography variant="body1">{result.summary}</Typography>
                  </CardContent>
                </CardActionArea>
              </Box>
            </Grid>
          ))}
        </Box>
      )}
    </Box>
  )
}

export { Search }
