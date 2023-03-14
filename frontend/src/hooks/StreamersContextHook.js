import { useContext } from 'react'
import { StreamersContext } from '../contexts/StreamersContext'

const useStreamersContext = () => {
    const context = useContext(StreamersContext)

    if (!context) {
        throw Error('useStreamersContext must be used within a StreamersContextProvider')
    }

    return context
}

export default useStreamersContext