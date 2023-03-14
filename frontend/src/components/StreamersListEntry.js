import { useDispatch, useSelector } from 'react-redux'
import { addStreamersSelected, removeStreamersSelected } from '../redux/uploadSlice'

const StreamersListEntry = ({streamer}) => {
    const dispatch = useDispatch()
    const { streamersSelected } = useSelector(state => state.upload)

    const handleClick = (e) => {
        if (e.target.checked) {
            dispatch(addStreamersSelected(streamer))
        }
        else {
            dispatch(removeStreamersSelected(streamer))
        }
    }

    const checkList = () => {
        if (streamersSelected.indexOf(streamer) !== -1) {
            return true
        }
        return false
    }
    
    return (
        <div className="streamer-grid">
            <input onChange={handleClick} checked={checkList()} type="checkbox" />
            <div className="streamer-identification">
                <div className="image-holder">
                    <div className="viewer-count">{streamer.viewers}</div>
                </div>
                <h2>{streamer.name}</h2>
                <h3>Ads Queued: {streamer.stack.length}</h3>
            </div>
            <div className="streamer-information">
                <p><strong>Stream Title:</strong> {streamer.streamTitle}</p>
                <p><strong>Followers:</strong> {streamer.followers}</p>
            </div>
        </div>
    )
}

export default StreamersListEntry