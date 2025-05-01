import { useState } from "react";
import Typography from '@mui/material/Typography';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import CardActions from '@mui/material/CardActions';


export default function ItemCount()
{
  const [count, setCount] = useState(1);
  function onAddClick()
  {
    setCount(count + 1);
  }

  function onRemoveClick()
  {
    if (count == 0)
    {
      return;
    }
    setCount(count - 1);
  }
  return (
    <CardActions >
      <AddCircleOutlineIcon sx={{paddingright: '40px'}} onClick={onAddClick}/>
      <Typography>{count}</Typography> 
      <RemoveCircleOutlineIcon onClick={onRemoveClick}/>
    </CardActions>

  )   
}