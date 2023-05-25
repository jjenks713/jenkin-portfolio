async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

export async function getAllReactApps(preview) {
  const entries = await fetchGraphQL(
    `query {
      reactAppsList (id: "11dGzg0tgApxHMynw7Td1z") {
        reactAppsCollection {
          items {
            title
            description
            link
            image {
              url
            }
          }
        }
      }
    }`,
    preview
  )
  return entries
}

export async function getAllJsApps(preview) {

  const entries = await fetchGraphQL(
    `query {
      jsAppsList (id: "GdXBbv2etMs5zVwB8tSn4") {
        jsApps2Collection {
          items {
            title
            description
            link
            image {
              url
            }
          }
        }
      }
    }`,
    preview
  )
  return entries
}

