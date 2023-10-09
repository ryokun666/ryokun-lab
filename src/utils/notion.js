const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: "secret_73fdMsU9hnZlnoCcWcaCD3PsgiisZl2TYkWWuPRVgmq",
});

export default notion;
