import "../styles/forgot.css"

function ForgotScreen () {
    return (
        <div className="forgot">
            <div className="forgot-box">
            <h1>Did You Forget Your passowrd?</h1>
                <form action="">
                    <input required type="email" placeholder="Please type in your email" />
                    <button type="submit">  Reset</button> 
                </form>
            </div>
        </div>
    )
}

export default ForgotScreen;