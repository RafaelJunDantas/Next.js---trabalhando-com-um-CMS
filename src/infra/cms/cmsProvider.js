import React from "react";
import { get } from "lodash";

const CMSContext = React.createContext({
    cmsContent: {}
});

export const getCMSContent = (path = '') => {
    const cmsContent = React.useContext(CMSContext).cmsContent;
    //console.log(cmsContent)

    if(path === '') return cmsContent;

    const output = get(cmsContent, path);
    //console.log("Output: ", output);

    if(!output) throw Error(`Não foi possível encontrar a chave ${path}. Reveja sua query e tente novamente.`)

    return output;
}

export default function CMSProvider({ cmsContent, children }) {
    return (
        <CMSContext.Provider value={{ cmsContent }}>
            {children}
        </CMSContext.Provider>
    )
}