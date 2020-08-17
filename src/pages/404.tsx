import { Box, Typography } from '@material-ui/core';
import Link from 'next/link';

export default function ErrorPage({ children, title = "Suite" }) {
    return (
        <Box>
            <Typography variant="h1">Error 404</Typography>
            <Typography variant="caption">This page is not found</Typography>
            <Link href={'/'}><a>Go back</a></Link>
        </Box>
    )
};
