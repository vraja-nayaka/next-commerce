import Link from 'next/link';
import { Grid, Box } from '@material-ui/core';

export const Navbar = () => (
    <Box minHeight="15vh" bgcolor="#EEE" display="flex" alignItems="center" justifyContent="space-around">
        <Link href={'/'}><a>Home</a></Link>
        <Link href={'/about'}><a>About</a></Link>
        <Link href={'/products'}><a>Products</a></Link>
    </Box>
);