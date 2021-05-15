import React, { useEffect, useState } from 'react'
import { Avatar, Card, CardContent, Grid, Typography, LinearProgress } from '@material-ui/core'
import { useParams } from 'react-router-dom';
import { getTopUsers } from '../services/users';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',
  },
  info: {
    marginLeft: 20,
  }
}));

const Detail = () => {
  const { id } = useParams();
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getTopUsers(id)
    .then(({data}) => {
      setUser(data);
    })
    .catch((err) => {
      console.log('err:', err);
    })
    .finally(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <LinearProgress />
  }

  return (
    <Grid container item>
      <Grid item xs={12}>
        <Card>
          <CardContent className={classes.card}>
            <Avatar alt={user.name} src={user.avatar_url} />
            <div className={classes.info}>
              <Typography variant="h6">{user.name}</Typography>
              <Typography variant="subtitle1">{user.location}</Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

Detail.propTypes = {

}

export default Detail;
