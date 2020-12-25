import cheerio from "cheerio";
import Axios from "axios";

export const getEmoji = async (req, res) => {
    const { text } = req.body;
    try {
        let list = [];
        const emoji = await Axios.get(
            `https://emojipedia.org/search/?q=${text}`
        ).then((res) => res.data);

        const $ = cheerio.load(emoji);
        const $bodyList = $("ol.search-results").children("li");
        $bodyList.each(function (i) {
            list[i] = {
                emoji:
                    $(this).find("a span").html()?.includes("&") &&
                    $(this).find("a span").text(),

                id: i++,
            };
        });
        res.status(200).json(list);
    } catch (err) {
        console.log(err);
        res.status(400);
    }
};
