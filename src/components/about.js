import Profile from "./Profile";
import { Component } from "react";

class About extends Component {
    constructor(props){
        super(props);
    }

    async componentDidMount(){
        //best place to make API calls alike useEffect
    }

    render(){
        return (
            <div className="about-us">
                <h1>About the dev</h1>
                <p style={{textDecoration: 'none'}}>
                    This is a React based (project) Online food delivery SPA, inspired from Zomato and Swiggy's aggregation model.
                </p>
                <Profile/>
            </div>
        )
    }
}

export default About;