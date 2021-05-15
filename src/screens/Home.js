import React from 'react'
import { Button, Card, CardContent, Grid, Typography, Link } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  const users = ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh'];
  return (
    <Grid container item>
      <Grid item xs="12">
        <Card>
          <CardContent>
          <Typography variant="h3" gutterBottom>
            Top 5 GitHub users
          </Typography>
          <Typography variant="h4" gutterBottom>
            Click in button more details
          </Typography>
            {users.map((user) => (
              <Button variant="contained" key={user} color="primary">
                <Link
                  color="textPrimary"
                  component={RouterLink}
                  to={`/detail/${user}`}
                  params={{a: 3}}
                  variant="h6"
                >
                  {user}
                </Link>
              </Button>
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home;