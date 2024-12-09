import React from 'react'
import { AuthProvider } from '../context/AuthContext'
import { HeaderContext } from './HeaderContext'
import { ThemeProvider } from '../context/ThemeContext'
import { LanguageProvider } from '../context/LanguageContext'
import { MainContext } from './MainContext'
import { FooterContext } from './FooterContext'

export const MyPageContext = () => {
  return (
    <div className='my-page'>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
              {/* Header, main, footer */}
              <HeaderContext/>
              <MainContext/>
              <FooterContext/>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  )
}
