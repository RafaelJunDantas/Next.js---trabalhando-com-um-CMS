import { SEOBlock } from "./SEOBlock";
import { Footer } from "../commons/Footer";
import { Menu } from "../commons/Menu";
import { PagehomeHeroSection } from "./PagehomeHeroSection";

export const cmsSections = {
    CommonSeoBlockRecord: (props) => <SEOBlock {...props}/>,
    CommonMenuRecord: (props) => <Menu {...props}/>,
    PagehomeHeroSectionRecord: (props) => <PagehomeHeroSection {...props}/>,
    CommonFooterRecord: (props) => <Footer {...props}/>,
}