import notion from "../../utils/notion";

export default async function handler(req, res) {
  // タグリスト生成
  function createTagList(dataList) {
    const tagList = [];
    dataList.map((data) => {
      tagList.push(data.name);
    });
    return tagList;
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    const news = response.results.map((page) => ({
      id: page.id,
      title: page.properties.title?.title[0]?.text?.content || "タイトルなし",
      url: page.properties.url.url,
      created_at: page.properties.create_at.created_time,
      tag: page.properties.tag.multi_select[0]
        ? createTagList(page.properties.tag.multi_select)
        : ["タグなし"],
    }));

    res.status(200).json(news);
  } catch (error) {
    console.error("Notion API Error:", error.message);
    res.status(500).json({ error: error.message });
  }
}
