import axios from 'axios';


const registerNewUser = async (registerData) => {
    let response = {};
    await axios.post('http://localhost:8082/api/v1//register', {
        registerData
    }).then(rs => {
        console.log(' >> response from api: ', rs.data);
        response = rs.data

    });

    console.log('>> response: ', response);

    return response;
}

export default { registerNewUser };