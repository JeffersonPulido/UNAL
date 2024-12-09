import { useState } from 'react'
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';

const initialTheme = 'light'
const initialLanguage = 'es'
const initialAuth = null;

const translations = {
    es: {
        headerTitle: 'Mi aplicacion SIN context API',
        headerSubtitle: 'Mi cabecera',
        headerLight: 'Claro',
        headerDark: 'Oscuro',
        buttonLogin: 'Iniciar Sesion',
        buttonLogout: 'Cerrar Sesion',
        mainWelcome: 'Bienvenido invitado',
        mainHello: 'Hola Usuario',
        mainContent: 'Mi contenido principal',
        footerTitle: 'Mi pie de pagina'
    },
    en: {
        headerTitle: 'My application WITHOUT context API',
        headerSubtitle: 'My header',
        headerLight: 'Light',
        headerDark: 'Dark',
        buttonLogin: 'Login',
        buttonLogout: 'Logout',
        mainWelcome: 'Welcome Guest',
        mainHello: 'Hello User',
        mainContent: 'My main content',
        footerTitle: 'My footer'
    }
}

export const MyPage = () => {
    const [theme, setTheme] = useState(initialTheme);
    const [language, setLanguage] = useState(initialLanguage);
    const [auth, setAuth] = useState(initialAuth);
    const [texts, setTexts] = useState(translations[language]);

    const handleTheme = (event) => {
        setTheme(event.target.value)
    }

    const handleLanguage = (event) => {
        if (event.target.value === 'es') {
            setLanguage('es')
            setTexts(translations.es)
        }else{
            setLanguage('en')
            setTexts(translations.en)
        }
    }

    const handleAuth = () => {
        if (auth) {
            setAuth(null)
        }else{
            setAuth(true)
        }
        //setAuth(!auth)
    }

    return (
        <div className='my-page'>
            {/* TODO: Header, Main, Footer */}
            <Header theme={theme} texts={texts} auth={auth} handleAuth={handleAuth} handleLanguage={handleLanguage} handleTheme={handleTheme}/>
            <Main theme={theme} texts={texts} auth={auth}/>
            <Footer theme={theme} texts={texts}/>
        </div>
    )
}