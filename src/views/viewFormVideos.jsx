import * as React from "react";
import './ViewFormVideos.css'
import {FileUpload} from "primereact/fileupload";
import {Toast} from "primereact/toast";

export class ViewFormVideos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fileSelected: []
        }

    }

    uploadVideo = () => {
        console.log("Video Subido")
    };



    render() {
        return (


            <div>
                {/*<Toast ref={toast} />*/}
                <div className="card">
                    <FileUpload name="gallery" url="http://localhost:9000/videos/uploads" onUpload={this.uploadVideo} multiple accept=".mp4"
                                maxFileSize={100000000}
                                emptyTemplate={<p className="p-m-0">Drag and drop files to here to upload.</p>}/>

                </div>
            </div>
        )
    }




}
