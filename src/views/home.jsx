import * as React from "react";
import {VideoService} from "../services/video.service";
import {VideoCard} from "../components/Cards/videoCard";


const links = [
    { endpoint: '/home' },
    { endpoint: '/formVideos' },
    { endpoint: '/mediaPlayer' }
];


export class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }

        this.loadPage = this.loadPage.bind(this);

    }


    componentWillMount(){
        this.loadPage();
    }

    loadPage() {
        VideoService.search()
            .then( response => {
                console.log('response', response);
                this.setState({items: response.data});
            })
            .catch( (e) => console.log(e));
    }

    render() {
        return (
            <React.Fragment>
            {this.state.items.map( (videoInfo) => ( VideoCard(videoInfo, this.loadPage) ) )}
            </React.Fragment>
        );
    }
}

