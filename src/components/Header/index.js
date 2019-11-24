import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Header = () => (
  <AppBar position="sticky">
    <Toolbar>
      <Typography variant="h4">
        TV Guru
      </Typography>
    </Toolbar>
  </AppBar>
)

export {
  Header
}
