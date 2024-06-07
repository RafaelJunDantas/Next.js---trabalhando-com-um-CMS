const TOKEN = process.env.DATO_TOKEN_KEY_READ;

const globalQuery = `
  query {
    globalFooter{
      description
    }
  }
`;

const BASE_ENDPOINT = 'https://graphql.datocms.com/'
const PREVIEW_ENDPOINT = 'https://graphql.datocms.com/preview'

export async function cmsService({ query, variables, preview }) {

  const ENDPOINT = preview ? PREVIEW_ENDPOINT : BASE_ENDPOINT;

  try {
    const pageContentRes = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + TOKEN,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    })
    .then(async (res) => {
      const body = await res.json();
      //console.log('Body: ', body);
      if(!body.errors) return body;
      throw new Error(JSON.stringify(body));
    });

    const globalContentRes = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + TOKEN,
      },
      body: JSON.stringify({
        query: globalQuery,
      }),
    })
    .then(async (res) => {
      const body = await res.json();
      //console.log('Body: ', body);
      if(!body.errors) return body;
      throw new Error(JSON.stringify(body));
    });

    return {
      data: {
        ...pageContentRes.data,
        globalContent: {
          ...globalContentRes.data,
        } 
      },
    }
  }catch(err) {
    throw new Error(err.message);
  }
}