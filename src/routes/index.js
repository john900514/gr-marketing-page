/** @type {import('./__types/').RequestHandler} */
export async function get({ params }) {
  // `params.id` comes from [id].js
  const body = {
    foo: "gr benchmarking",
  };

  if (body) {
    return {
      body,
    };
  }

  return {
    status: 404,
  };
}
