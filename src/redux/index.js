import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";

export const store=configureStore(
    {
        reducer:{
            user:userReducer,
        },
    }
);

export { authentificateUser} from "./slices/userSlice";
export {logoutUser} from "./slices/userSlice";