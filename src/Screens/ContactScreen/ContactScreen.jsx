import React, { useContext } from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { Link, useParams } from 'react-router'
import { ContactsContext } from '../../Context/ContactsContext'
import './ContactScreen.css'
import { useState } from 'react'
import InfoContact from '../../Components/InfoContact/infoContact'
import MenuSidebar from '../../Components/menuSidebar/menuSidebar'

export default function ContactScreen() {
  const { contacts } = useContext(ContactsContext)

  const [showInfo, setShowInfo] = useState(false)
  const { contact_id } = useParams()


  const contact_selected = contacts.find(contact => Number(contact.id) === Number(contact_id))

  return (
    <div className='home_screen'>
      <MenuSidebar/>
      <ContactSidebar />

      {!contact_selected
        ? <div>
          <h1>El contacto seleccionado no existe</h1>
        </div>

        : <div className='home_chat_contact'>


          <div className='home_chat_header'>
            <img
              src={contact_selected.profile_picture}
              alt={contact_selected.name}
              onClick={() => setShowInfo(true)}
              style={{ cursor: 'pointer' }}
            />

            <div className='home_chat_header_info'>
              <span>{contact_selected.name}</span>
              <span>{contact_selected.last_time_connection}</span>
            </div>
            <Link to='/' className='volver'>Volver a contactos</Link>
          </div>
          {showInfo && (
            <InfoContact
              contact={contact_selected}
              onClose={() => setShowInfo(false)}
            />
          )}
          <div className='chat_contact'>
            {contact_selected.messages.map(message => (
              <div
                key={message.id}
                className={`message ${message.send_by_me ? "sent" : "received"}`}
              >
                <p>{message.text}</p>
                <span className='message_time'>{message.time}</span>
              </div>
            ))}
          </div>

          <form>
            <textarea placeholder='Escribe un mensaje...' />
            <button type='submit'>Enviar</button>
          </form>

        </div>
      }
    </div>
  )
}