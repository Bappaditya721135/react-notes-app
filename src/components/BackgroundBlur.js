export default function BackgroundBlur(props) {

    function handleClick() {
        props.handleClick();
    }
    return(
        <div className="background-blur" onClick={handleClick}></div>
    );
}