import axios from "axios";

const getUsuario = async (user_id) => {

    const response = await axios.get('https://bookish-winner-7vrv5rv94qqx3xqgp-2025.app.github.dev/test/' + user_id, {
    });
    
    console.log(response)
    return response;
};
  
export default getUsuario;