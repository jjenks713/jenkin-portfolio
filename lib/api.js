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
      reactAppsCollection(order: sys_firstPublishedAt_ASC) {
        items {
          title
          image {
            url
          }
          link
          description
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
      jsAppsCollection(order: sys_firstPublishedAt_ASC) {
        items {
          title
          image {
            url
          }
          link
          description
        }
      }
    }`,
    preview
  )
  return entries
}

