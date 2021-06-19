import Document, {Html, Main} from 'next/document';
import Head from "next/head";
import  NextScript from "next/script";


export default class MyDocument extends Document {
    render (){
        return (
            <Html>
               <Head>
               <link rel="shortcut icon" href="favicon.jpg" type="image/jpg" />

                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet"/>
             </Head>

             <body>
                 <Main/>
                 <NextScript/>
             </body>

            </Html>   
        );
    }
}