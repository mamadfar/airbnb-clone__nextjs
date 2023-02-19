import type {AppProps} from 'next/app'
import Router from "next/router";
import '@/styles/globals.css'
import MainLayout from "@/layout/MainLayout";
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
    size: 4,
    color: "#FE595E",
    className: "z-50",
    delay: 100
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function App({Component, pageProps}: AppProps) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    )
}
