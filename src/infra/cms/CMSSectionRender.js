import { cmsSections } from "../../components/cmsSection";
import { getCMSContent } from "./cmsProvider"

export default function CMSSectionRender({ pageName }) {

    const sections = getCMSContent(`${pageName}.pageContent[0].section`);

    return sections.map((sectionProps) => {
        //console.log(sectionProps);

        const Component = cmsSections[sectionProps.componentName];
        const isVisible = sectionProps.visible === true || sectionProps.visible === undefined;

        if(!Component) return null;

        if(!isVisible) return null;

        return (
            <Component key={sectionProps.id} {...sectionProps}/>
        )
    })
}