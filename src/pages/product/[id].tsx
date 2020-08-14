import { Box, Typography } from '@material-ui/core';

export default function Product({ id }) {
    return (
        <Box>
            <Typography>
                Product {id}
            </Typography>
        </Box>
    )
}
