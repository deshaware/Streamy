import React from 'react';

class GoogleAuth extends React.Component{
    state = {isSignedIn:null}
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'565465906795-99uiaehond31d73r2mjqkpq2rohth3mu.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                console.log(this.auth.isSignedIn.get())
                this.setState({isSignedIn:this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange)
            }).catch((e) => {
                console.log("error is"+e)
            });
        });
    }

    onAuthChange = () => {
        this.setState({isSignedIn:this.auth.isSignedIn.get()})
    }
    onSignOutClick = () => {
        this.auth.signOut()
        //this.setState({isSignedIn:this.auth.isSignedIn.get()})
    }
    onSignInClick = () => {
        this.auth.signIn()
        //this.setState({isSignedIn:this.auth.isSignedIn.get()})
    }
    

    renderSignIn(){
        if(this.state.isSignedIn === null ){
            return (<div>Needs to sign in</div>)
        } else if (this.state.isSignedIn){
            return (<button className="ui red google button" onClick={this.onSignOutClick}> <i >SignOut</i>  </button>)
        } else {
            return (<button className="ui blue google button" onClick={this.onSignInClick}><i >Sign In</i> </button>)
        }
    }
    render(){
        this.renderSignIn()
        return(
            <div>
                {this.renderSignIn()}
            </div>
        );
    }
}

export default GoogleAuth;