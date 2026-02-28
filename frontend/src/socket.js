import {io} from "socket.io-client"

const socket = io(import.meta.env.VITE_API_URL,{
    auth: {
        token: localStorage.getItem("token")
      }
})

export default socket;