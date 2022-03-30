import { getSingleVideoService } from "../../services";

const getSingleVideoHandler = async (videoId, setVideo) => {
    try {
        const response = await getSingleVideoService(videoId);
        if (response.status === 200) {
            setVideo(response.data.video);
            return response.data.video;
        }
        else {
            throw new Error();
        }
    }
    catch (error) {
        alert(error);
    }
}

export { getSingleVideoHandler };
