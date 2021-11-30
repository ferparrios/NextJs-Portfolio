import Navbar from "./Navbar";
import { useEffect } from 'react'
import { useRouter } from "next/router";
import NProgress from 'nprogress'
import classNames from "classnames";

const Layout = ({ children, title, footer = true, dark = false }) => {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      console.log(url)
      NProgress.start()
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', () => NProgress.done())

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <div className={classNames({ 'bg-dark': dark, 'bg-light': !dark })}>
      <Navbar />
      <main className="container py-4">
        {
          title && (
            <h1 className={classNames('text-center', {'text-light': dark})}>{title}</h1>
          )
        }
        {children}
      </main>

      {
        footer && (
          <footer className="bg-dark text-light text-center">
            <div className="container p-4">
              <h1>&copy; Fernando Paredes Rios</h1>
              <p>2017 - {new Date().getFullYear()}</p>
              <p>All rights reserved</p>
            </div>
          </footer>
        )
      }
    </div>

  )
};

export default Layout;
