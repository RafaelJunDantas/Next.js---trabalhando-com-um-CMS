const TOKEN = process.env.DATO_TOKEN_KEY;

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

    //console.log('Page content res: ', pageContentRes);

    return {
      data: pageContentRes.data,
    }
  }catch(err) {
    throw new Error(err.message);
  }
}