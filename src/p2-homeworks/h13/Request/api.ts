import axios from "axios";

export const api = {
    getResponse(checked: boolean) {
        return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`, {success: checked})
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                }
            })
            .catch(function ({...error}) {
                console.log({...error})
                console.log(error.response ? error.response.data.errorText : error.message);
            });
    }

}