import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

// Set config defaults when creating the instance
const VideoService = {};

VideoService.setup = () => {
    return axios.create({
        baseURL: 'http://localhost:9000/videos',
    });
};

VideoService.search = (params) => {
    const client = VideoService.setup();
    return client.get('/' , { params })
};

VideoService.create = (video) => {
    const client = VideoService.setup();
    return client.post('', video);
};

VideoService.delete = async (video) => {
    // const client = VideoService.setup();
    // return await client.delete(video)
    return axios.delete('http://localhost:9000/videos/'+video._id)
};

export { VideoService };
