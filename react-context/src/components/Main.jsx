import React from 'react'

export const Main = ({
    theme, auth, texts
}) => {
  return (
    <main className={theme}>
        {auth ? <p>{texts.mainHello}</p> : <p>{texts.mainWelcome}</p>}
        <p>{texts.mainContent}</p>
    </main>
  )
}
