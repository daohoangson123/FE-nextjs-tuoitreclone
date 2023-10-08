import axios from 'axios';
function getUserList() {
    axios
        .get('http://localhost:8081/api/user-list')
        .then(function (res) {
            // console.log(res.data);
            return res.data;
        })
        .catch(function (err) {
            // console.log(err);
        })
        .finally(function () {
            // console.log('API CAllED');
        });
}

export default getUserList;
