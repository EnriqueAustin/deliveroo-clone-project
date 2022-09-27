import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    projectId: "mj5hje7i",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// run this to add exception for localhost 3000 cors policy
// sanity cors add http://localhost:3000

export default client;