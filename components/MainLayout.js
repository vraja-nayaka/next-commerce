import Head from 'next/head';
import { Grid, Box, CssBaseline } from '@material-ui/core';
import { Navbar } from './Navbar';

export const MainLayout = ({ children, title = "Suite" }) => (
    <>
        <Head>
            <title>{title} | Next Commerce</title>
            <meta name="keywords" content="next,nextjs,e-commerce"/>
            <meta name="discription" content="New e-commerce project for your business"/>
            <meta charSet="utf-8"/>
        </Head>
        <CssBaseline />
        <Grid container>
            <Grid item xs={12}>
                <nav>
                    <Navbar />
                </nav>
            </Grid>
            <Grid item xs={12}>
                <Box minHeight="85vh" bgcolor="#CCC" display="flex" alignItems="center" justifyContent="center">
                    <main>
                        {children}
                    </main>
                </Box>
            </Grid>
        </Grid>
    </>
);