export async function GET({ request, params }) {
  return fetch(params.url, request)
}