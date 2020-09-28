import type { AppContext } from 'next/app'
import { getSession, Session, signIn } from 'next-auth/client'
import type { AppType } from 'next/dist/next-server/lib/utils'

import 'styles/global.scss'

const App: AppType = ({ Component, pageProps }) => {
  const session: Session = pageProps.session
  return (
    <>
      <header>
        {session ? (
          <img src={session.user.image + '&size=30'} alt={session.user.name} />
        ) : (
          <button onClick={() => signIn('github')}>Sign In</button>
        )}
      </header>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

App.getInitialProps = async ({ ctx }: AppContext) => {
  const session = await getSession(ctx)
  return {
    pageProps: {
      session,
    },
  }
}

export default App
