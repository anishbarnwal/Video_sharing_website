import { toast } from "react-toastify";

const alretReducer =  ( alret = [], action) => {
    switch(action.type) {
        case 'CREATPOST':
            toast.success("Your post created successfully")
            return alret;
        case 'SUCCESS':
            toast.success(action?.data.message)
            return alret;
        case 'ERROR':
            toast.error(action?.error.response.data);
            return alret;
        case 'LOGOUTALRET':
            toast.warn("You have been logged out.")
            return alret;
        default:
            return alret;
    }
}

export default alretReducer