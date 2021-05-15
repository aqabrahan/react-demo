import React, { useEffect, useState } from 'react'
import { Avatar, Card, CardContent, Grid, Typography } from '@material-ui/core'
import { useParams } from 'react-router-dom';
import { getTopUsers } from '../services/users';

const Detail = () => {
  const { id } = useParams();
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
    return <div>Loading..!!</div>
  }

  return (
    <Grid container item>
      <Grid item xs="12">
        <Card>
          <CardContent>
            <Avatar alt={user.name} src={user.avatar_url} />
            <div>{user.name}</div>
            <div>{user.location}</div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

Detail.propTypes = {

}

export default Detail;
