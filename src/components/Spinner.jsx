const spinner='https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-lists/spinner.gif';


function Spinner(){
    return(
        <div>
            <img src={spinner} alt="Loading" />
        </div>
    )
}


export default Spinner;