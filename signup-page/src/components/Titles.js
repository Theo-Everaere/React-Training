const Titles = (props) => {

    return (
        <div>
            <div className='Titles'>
                <h2 id='mainTitle'>{props.mainTitle}</h2>
                <p id='subTitle'>{props.subTitle}</p>
            </div>

        </div>
    )
}

export default Titles
