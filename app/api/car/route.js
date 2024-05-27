import axios from "axios";
import * as cheerio from "cheerio";

export async function POST(request) {
  const { Number } = await request.json();
  const res = await axios.get(`https://www.carcheck.co.uk/dacia/${Number}`);
  const data = res.data;
  const $ = cheerio.load(data);

  function convertKeyToCamelCase(key) {
    // Handle both spaces and periods in key names
    return key.replace(/\s+|\./g, ' ')
      .split(" ")
      .map((word, index) =>
        index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join("");
  }

  const extractTableData = (selector) => {
    const info = {};
    $(selector)
      .first()
      .find("tr")
      .each((index, element) => {
        const key = convertKeyToCamelCase($(element).find("th").text().trim());
        const value = $(element).find("td").text().trim();
        info[key] = value;
      });
    return info;
  };

  const generalInfo = extractTableData(".table.table-striped.table-condensed");
  const engineInfo = extractTableData(".motor-milieu-info-table");
  const motHistory = [];

  $(".mot-test-table").each((index, table) => {
    const motDetails = {};
    $(table)
      .find("tr")
      .each((index, row) => {
        const key = convertKeyToCamelCase($(row).find("th").text().trim());
        const value = $(row).find("td").text().trim();
        motDetails[key] = value;
      });
    motHistory.push(motDetails);
  });

  const taxMOT = extractTableData(".block-result");
  const taxCalculation = extractTableData(".mt-3.tax-table");

  const damageHistory = [];
  $(".motor-milieu-info-table")
    .slice(1)
    .find("tr")
    .each((index, row) => {
      const key = convertKeyToCamelCase($(row).find("th").text().trim());
      const value = $(row).find("td").text().trim();
      if (key) {
        damageHistory.push({ key, value });
      }
    });

  return Response.json({
    generalInfo,
    engineInfo,
    motHistory,
    taxMOT,
    taxCalculation,
    damageHistory,
  });
}
