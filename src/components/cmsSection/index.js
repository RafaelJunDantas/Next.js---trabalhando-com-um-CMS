import { SEOBlock } from "./SEOBlock";
import { Footer } from "../commons/Footer";
import { Menu } from "../commons/Menu";
import { PagehomeHeroSection } from "./PagehomeHeroSection";
import { PageFAQQuestionsSection } from "./PageFAQQuestionsSection";

export const cmsSections = {
    PagefaqQuestionsSectionRecord: (props) => <PageFAQQuestionsSection {...props}/>,
    CommonSeoBlockRecord: (props) => <SEOBlock {...props}/>,
    CommonMenuRecord: (props) => <Menu {...props}/>,
    PagehomeHeroSectionRecord: (props) => <PagehomeHeroSection {...props}/>,
    CommonFooterRecord: (props) => <Footer {...props}/>,
}