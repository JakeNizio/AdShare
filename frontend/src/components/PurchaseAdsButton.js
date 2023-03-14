import { useSelector } from "react-redux"

const PurchaseAdsButton = () => {
    const { upload, streamersSelected } = useSelector(state => state.upload)
    
    const handleClick = () => {
        
        // This function should commit the current 'upload' to the database, if sucessful it should then take the id returned from that post request and add it to each stack
        
        const patch = async (streamer) => {
            const response = await fetch('/api/streamers/'+streamer._id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    stack: [...streamer.stack, upload]
                }),
            })

            const json = await response.json()

            if (response.ok){
                console.log(json)
            }
        }
        
        streamersSelected.map((streamer) => {
            patch(streamer)
        })
}
    
    return (
        <div>
            {/* <button className="btn">Purchase Ad</button> */}
            <button onClick={handleClick}>Purchase Ad</button>
        </div>
    )
}

export default PurchaseAdsButton