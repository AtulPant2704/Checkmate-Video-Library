const SingleNote = ({ title, description, videoTime }) => {
    return (
        <div className="note">
            <h3>{title}</h3>
            <p>{description}</p>
            <small><i className="fa-regular fa-clock"></i> {videoTime}</small>
            <div className="note-btns">
                <i className="fa-solid fa-pencil"></i>
                <i className="fa-solid fa-trash-can"></i>
            </div>
        </div>
    )
}

export { SingleNote }
