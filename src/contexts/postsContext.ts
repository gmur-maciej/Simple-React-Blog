import React from "react";
import type IPost from "../models/post";

export default React.createContext<undefined | IPost[]>(undefined);