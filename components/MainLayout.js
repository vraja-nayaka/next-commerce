import Link from 'next/link'

export const MainLayout = ({ children, title = "Hello" }) => (
    <>
    <Head>
        <title>
{title} | Next Commerce
        </title>
    </Head>
        <nav>
            <Link href={'/'}><a>Home</a></Link>
            <Link href={'/about'}><a>About</a></Link>
            <Link href={'/products'}><a>Products</a></Link>
        </nav>
        <main>
            {children}
        </main>
    </>
);