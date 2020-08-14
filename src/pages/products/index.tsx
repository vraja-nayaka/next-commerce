import { Box, Typography } from '@material-ui/core';
import Link from 'next/link';

export default function Products({ text }) {
    return (
        <Box>
            <Typography variant="h1">
                Products
                </Typography>
            <Typography variant="caption">
                {text}
            </Typography>
            <Link href="/product/22"><a>to 22</a></Link>
        </Box>
    )
}

Products.getInitialProps = async () => {
    return { props: { text: 'some text from datebase' } }
}