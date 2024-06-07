import { cmsSections } from "../../components/cmsSection";
import { getCMSContent } from "./cmsProvider"

export default function CMSSectionRender({ pageName }) {

    const sections = getCMSContent(`${pageName}.pageContent[0].section`);

    return sections.map((sectionProps) => {
        //console.log(sectionProps);

        const Component = cmsSections[sectionProps.componentName];

        if(!Component) return null;

        return (
            <Component key={sectionProps.id} {...sectionProps}/>
        )
    })
}