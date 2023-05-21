import { ToastContainer, toast } from 'react-toastify';


const successTost = (message:any, time = 5000) => {
    toast.success(message, {
        autoClose: time,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

const errorTost = (message:any, time = 5000) => {
    toast.error(message, {
        
        autoClose: time,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}



export { successTost ,errorTost}