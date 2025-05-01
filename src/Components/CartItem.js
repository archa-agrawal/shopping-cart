import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ItemCount from './ItemCount';

export default function CartItem({itemImage, description, price})
{
  const priceString = "$" + price.toString();
  const numberOfItems = 22;
    return (
      <Card sx={{ minWidth: 275, margin: '30px', backgroundColor: 'aliceblue' }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14, display: 'inline-flex', justifyContent: 'space-between', paddingLeft: '100px' }}>
        <img src = {itemImage} alt = "" width = "250" height = "200" />
        </Typography>

        <Typography sx={{ color: 'text.secondary', mb: 1.5, display: 'inline-flex', justifyContent: 'space-between', position: 'absolute', padding:'100px' }}>{description}</Typography>
        <Typography variant="body2" sx={{display: 'inline-flex', justifyContent: 'space-between', position: 'absolute', right: '70px', paddingTop: '100px'}}>
          {priceString}
        </Typography>
      </CardContent>
      <CardActions sx={{paddingLeft: '45em'}}>
        <ItemCount/>
      </CardActions>
    </Card>
    )
}