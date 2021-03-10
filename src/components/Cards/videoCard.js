import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import {VideoService} from "../../services/video.service";
import {Tooltip} from "primereact/tooltip";


export const VideoCard = (props, loadPage) => {
    const url = "http://localhost:9000/videos/";

    async function handleClickDelete() {
        const result = VideoService.delete(props);
        loadPage()
    }


    const header = (
        <img alt="Card" src= {url+"thumbnail/"+props.screenshot} onError={(e) => console.log(e)} />
    );

    const footer = (
        <span>
           <Button label="Ver" icon="pi pi-video" onClick={()=> window.open(url+props.name, "_blank")} />
           <Button label="Borrar" icon="pi pi-trash" className="p-button-secondary p-ml-2" onClick={handleClickDelete} />
           <Tooltip target=".p-button-rounded" />
           <Button icon="pi pi-user" className="p-button-rounded p-button-info p-button-outlined"
                   data-pr-tooltip={"Audio Codec: " + props.audioCodec + "/nVideo codec" +props.videoCodec }
                   data-pr-position="right"
                   data-pr-at="right+5 top"
                   data-pr-my="left center-2"
                   style={{ fontSize: '2rem', cursor: 'pointer' }}
           />
        </span>
    );

    return (

        <div>
            <Card title={props.name} style={{ width: '25em' }} footer={footer} header={header}>

            </Card>
        </div>
    )



}
