import { Component } from "react";

class ProfileComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                company : "test company",
                location : "test location"
            }
        };
    };
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/sow2245");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo : json
        });
    };
    async componentDidUpdate(prevProps,prevState){
        if((this.state.userInfo.company != undefined && prevState.userInfo.company !== this.state.userInfo.company)){
            this.setState({userInfo: {avatar_url:this.state.userInfo.avatar_url,company:this.state.userInfo.company, location:this.state.userInfo.location + " (Current Work Location)"}});
        }
    };
    componentWillUnmount(){
        console.log("Profile componentWillUnmount");
    };
    render(){        
        console.log("Profile render");
        return (
        <div>
            <h3>Name : {this.props.name}</h3>
            <h3>Company : {this.state.userInfo.company}</h3>
            <h3>Location : {this.state.userInfo.location}</h3>
            <img src={this.state.userInfo.avatar_url} alt="yet to load image"/>
        </div>
    );
    }
}

export default ProfileComponent;