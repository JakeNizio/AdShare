import FileUpload from "../components/FileUpload"
import StreamersLiveUI from "../components/StreamersLiveUI"

const Home = () => {
    return (
        <div>
            <FileUpload />
            <div className="container">
                <StreamersLiveUI />
            </div>
        </div>
    )
}

export default Home