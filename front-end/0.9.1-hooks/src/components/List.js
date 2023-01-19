import PropTypes from 'prop-types'
import { READ, UNREAD } from '../data/constants'

function List ({messages, setMessagesStatus}) {
  return(
    <ul className="messages-list">
      { messages.map((message) =>   {
        const messageClass = message.status === READ
        ? "message-read" : "message-unread"
        return (
          <li key={message.id}>
            <p className={`message-title ${messageClass}`}>
              { message.title }
            </p>
            <div>
              <button type='button' title='marcar lido'
              onClick={ () => setMessagesStatus(message.id, READ) }>
                Lido
              </button>
              <button type='button' title='marcar lido'
              onClick={ () => setMessagesStatus(message.id, UNREAD) }>
                Não Lido
              </button>
            </div>
          </li>
        )
      } )}
    </ul>
  )
}

List.propTypes = {
  message: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      status: PropTypes.number,
    }),
  ).isRequired,
  setMessagesStatus: PropTypes.func.isRequired,
}

export default List