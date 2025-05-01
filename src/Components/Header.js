import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function Header ()
{
  return (
    <div style={{ position: 'relative', backgroundColor: 'lavender', height: '70px' }}>
      <HomeIcon color="secondary" sx={{ fontSize: 50 }} />
      <IconButton aria-label="cart" style={{ position: 'absolute', top: '10px', right: '10px' }}>
      <Badge badgeContent={4} color="secondary">
        <ShoppingCartIcon sx={{ fontSize: 40 }} />
      </Badge>
    </IconButton>
    </div>
  )
}