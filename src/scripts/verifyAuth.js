import { Api } from "../api/api";
const verifyAuth = ()=>{
    if(!Api.keyJwt){
        return true;
    }else{
        return true;
    }
};

export default verifyAuth;