import React from 'react';
import {connect} from 'react-redux';
import {fetchStream} from '../../actions';
import Loading from '../Loading';
import flv from 'flv.js';//downloading stram and run on browser( like axios)

class StreamShow extends React.Component{
    constructor(props){
        super(props)
        this.videoRef = React.createRef();

    }
    componentDidMount(){
        const {id} = this.props.match.params;
        console.log(this.videoRef)
        this.props.fetchStream(id);   
        this.buildPlayer()  ;  
    }

    componentDidUpdate(){
        this.buildPlayer();
    }

    buildPlayer(){
        if(this.player || !this.props.stream)
            return;
        const {id} = this.props.match.params;
         //this should be done only after having the actual stream
         this.player = flv.createPlayer({
            type:'flv',
            url:`http://localhost:8000/live/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load()
        this.player.play()
    }

    componentWillUnmount(){
        this.player.destroy();
    }

    render(){
        if(!this.props.stream){
            return <Loading />;
        }
        const {title,description} = this.props.stream;
        return(
            <div>       
                <video ref={this.videoRef} style={{width:"100%"}} controls/>
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    return{
        stream: state.streams[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps,{
    fetchStream
})(StreamShow);