import { createContext, useContext, useState } from "react";

const Context = createContext();

export const Provider = ({children})=>{
    const[pageData,setPageData]=useState("?page=1")
    const[paginal,setPaginal]=useState("")
    const[isTrue,setIsTrue]=useState(false)
    const[reviewData,setReviewData]=useState(false)

    const values={pageData,setPageData,paginal,setPaginal,isTrue,setIsTrue,reviewData,setReviewData};
    return <Context.Provider value={values}>{children}</Context.Provider>;
};

export const DataContext=()=> useContext(Context)