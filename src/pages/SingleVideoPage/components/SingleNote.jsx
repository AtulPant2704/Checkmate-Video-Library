const SingleNote = () => {
    return (
        <div className="note">
            <h3>Title</h3>
            <p>Note Description</p>
            <small><i className="fa-regular fa-clock"></i> 03:51</small>
            <div className="note-btns">
                <i className="fa-solid fa-pencil"></i>
                <i className="fa-solid fa-trash-can"></i>
            </div>
        </div>
    )
}

export { SingleNote }
