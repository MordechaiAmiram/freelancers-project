import { useContext } from 'react'
import useFetch from '../../hooks/useFetch'
import { userContext } from '../../App'
import ReceivedMessages from './ReceivedMessages'
import SentMessages from './SentMessages'

function Messages() {
    const { currentUser, setCurrentUser } = useContext(userContext)
    const [sentMessages, setSentMessages, error] = useFetch(`/messages/by-sender/${currentUser.userId}`)
    const [receivedMessages, setReceivedMessages, error] = useFetch(`/messages/by-receiver/${currentUser.userId}`)

    return (
        <>
            <div>
                {receivedMessages &&
                    <ReceivedMessages Messages={receivedMessages} />}
            </div>
            <div>
                {sentMessages &&
                    <SentMessages Messages={sentMessages} />}
            </div>
        </>
    )
}

export default Messages