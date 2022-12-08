
import Head from 'next/head'


export default function Header({ title }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="DLink" />
            </Head>
        </div>
    )
}
