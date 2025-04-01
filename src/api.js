import axios from "axios";

const getUsuario = async (user_id) => {

    const response = await axios.get('http://localhost:2025/test/' + user_id, {
    });
    
    console.log(response)
    return response;
};
  
export default getUsuario;