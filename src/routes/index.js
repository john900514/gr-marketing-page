/** @type {import('./__types/').RequestHandler} */
export async function get({ params }) {
    // `params.id` comes from [id].js
    const body = {
        foo: "bar"
    };
   
    if (body) {
      return {
        body 
      };
    }
   
    return {
      status: 404
    };
  }