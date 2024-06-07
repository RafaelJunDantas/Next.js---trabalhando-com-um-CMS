import Head from 'next/head';
import { Menu } from '../../components/commons/Menu';
import { Footer } from '../../components/commons/Footer';
import { theme, Box, Button, Text, Image } from '../../theme/components';
import { pageHOC } from '../../components/wrappers/pageHOC';
import { cmsService } from '../../infra/cms/cmsService';
import CMSSectionRender from '../../infra/cms/CMSSectionRender';

export async function getStaticProps({ preview }) {

  const { data } = await cmsService({
    query: `
    query {
      pageHome {
        pageContent {
          section {
            componentName: __typename,
            ... on CommonSeoBlockRecord {
              id, title,
            },
            ... on CommonMenuRecord {
              id,
            },
            ... on PagehomeHeroSectionRecord {
              id, title, description, ctaText, ctaLink,
            },
            ... on CommonFooterRecord {
              id,
              visible,
            }
          }
        }
      }
    }
    `,
    preview,
  })

  return {
    props: {
      cmsContent: data,
    },
    revalidate: 60,
  }
}

function HomeScreen() {
  return (
    <CMSSectionRender pageName="pageHome" />
  )
}

export default pageHOC(HomeScreen);
