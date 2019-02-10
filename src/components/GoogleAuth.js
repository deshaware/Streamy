import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions';

class GoogleAuth extends React.Component{
    //state = {isSignedIn:null}
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'565465906795-99uiaehond31d73r2mjqkpq2rohth3mu.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                console.log(this.auth.isSignedIn.get())
                // this.setState({isSignedIn:this.auth.isSignedIn.get()}) componnt level state change, but we use redux
                this.onAuthChange(this.auth.isSignedIn.get()); //will set auth state through actions        
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });
    }

    onAuthChange = (isSignedInFlag) => {
        if(isSignedInFlag){
            this.props.signIn(this.auth.currentUser.get().getId());//calling action
        } else {
            this.props.signOut();//calling action
        }
        //this.setState({isSignedIn:this.auth.isSignedIn.get()})
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
        if(this.props.isSignedIn === null ){
            return (<div></div>)
        } else if (this.props.isSignedIn){
            return (<button className="ui red google button" onClick={this.onSignOutClick}> <i className="google icon" />SignOut</button>)
        } else {
            return (<button className="ui blue google button" onClick={this.onSignInClick}><i className="google icon"/>Sign In</button>)
        }
    }
    render(){
        return(
            <div>
                {this.renderSignIn()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);