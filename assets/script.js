const appID = "b169b31281ffa2a2b70b9e8ac22c3e88l";

function load() {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        console.log(lat, long);
    })
}