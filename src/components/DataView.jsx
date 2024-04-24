// DataView.jsx

import React, { useState, useEffect } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';

const DataView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the server endpoint
    axios.get("http://localhost:8080/view")
      .then(response => {
        setData(response.data); // Set fetched data to state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" gap={2}>
      {data.map((val,i)=> (
        <Card   key={val._id} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={val.imageUrl}
              
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {val.fname}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: {val.fprice}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default DataView;