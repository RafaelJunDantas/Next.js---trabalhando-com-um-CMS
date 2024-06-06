const TOKEN = process.env.DATO_TOKEN_KEY_READ;

const globalQuery = `
  query {
    globalFooter{
      description
    }
  }
`;

export async function cmsService({ query }) {

  try {
    const pageContentRes = await fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + TOKEN,
      },
      body: JSON.stringify({
        query,
      }),
    })
    .then(async (res) => {
      const body = await res.json();
      //console.log('Body: ', body);
      if(!body.errors) return body;
      throw new Error(JSON.stringify(body));
    });

    const globalContentRes = await fetch('https://graphql.datocms.com/', {
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