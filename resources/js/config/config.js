const SERVER_URL = "http://localhost:8000";
// const SERVER_URL = "https://bookings247.co";

export const setAuthToken = (token) => {
    axios.defaults.headers.common['Authorization'] = token;
    axios.interceptors.response.use(
        function(successRes) {
            return successRes;
        },
        function(error) {
            return Promise.reject(error);
        }
    );
}

export default SERVER_URL;

export const setMetaData = (title, desc, keywords, robots) => {
    document.title = title;
    document.querySelector('meta[name="description"]').setAttribute("content", desc);
    // document.querySelector('meta[name="keywords"]').setAttribute("content", keywords);
    // document.querySelector('meta[name="robots"]').setAttribute("content", robots);
}

export const displayNumber = (number) => {
    if (number >= 1000000) return (number / 1000000).toFixed(2)+" M";
    if (number >= 1000) return (number / 1000).toFixed(2)+" K";
    return number;
}

export const cutAmazonTag = (url) => {
    const pos = url.indexOf("?tag=");
    let _url = url;
    if (pos != -1)
        _url = url.substr(0, pos);
    return _url;
}
