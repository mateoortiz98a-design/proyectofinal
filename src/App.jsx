import React from 'react'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ErrorNotFoundScreen from './Screens/ErrorNotFoundScreen/ErrorNotFoundScreen'
import { getContacts } from './Services/contactService.js'
import ContactsContextProvider from './Context/ContactsContext'
import ContactSidebar from './Components/ContactSidebar/ContactSidebar'
import InfoContact from './Components/InfoContact/infoContact.jsx'
import contacts from './data/contactData.js'

function App() {

    return (
        <div>
            <ContactsContextProvider >
                <Routes>
                    
                    <Route
                        path='/'
                        element={

                            <HomeScreen />

                        }
                    />
                    <Route
                        path='/contact/:contact_id'
                        element={
                            <ContactScreen />
                        }
                    />
                    <Route
                        path='*'
                        element={<ErrorNotFoundScreen />}
                    />
              </Routes>
            </ContactsContextProvider>
        </div>
    )
}

export default App