import axios from "axios";
import * as cheerio from "cheerio";

export async function POST(request) {
  const { Number } = await request.json();
  const res = await axios.get(`https://www.carcheck.co.uk/dacia/${Number}`);
  //   const data = await res.json();
  const data = res.data;
  //   const html = res.json();

  // Load HTML into Cheerio
  const $ = cheerio.load(data);

  // General Information
  const generalInfo = {};
  $(".table.table-striped.table-condensed")
    .first()
    .find("tr")
    .each((index, element) => {
      const key = $(element).find("th").text().trim();
      const value = $(element).find("td").text().trim();
      generalInfo[key] = value;
    });

  // Engine & Fuel Consumption
  const engineInfo = {};
  $(".motor-milieu-info-table")
    .first()
    .find("tr")
    .each((index, element) => {
      const key = $(element).find("th").text().trim();
      const value = $(element).find("td").text().trim();
      engineInfo[key] = value;
    });

  // MOT History
  const motHistory = [];
  $(".mot-test-table").each((index, table) => {
    const motDetails = {};
    $(table)
      .find("tr")
      .each((index, row) => {
        const key = $(row).find("th").text().trim();
        const value = $(row).find("td").text().trim();
        motDetails[key] = value;
      });
    motHistory.push(motDetails);
  });

  // Tax & MOT Check
  const taxMOT = {};
  $(".block-result").each((index, block) => {
    const key = $(block).find("span strong").text().trim();
    const value = $(block).find("span").text().trim();
    taxMOT[key] = value.replace(key, "");
  });

  // Tax Calculation
  const taxCalculation = {};
  $(".mt-3.tax-table tr").each((index, row) => {
    const key = $(row).find("th").text().trim();
    const value = $(row).find("td").text().trim();
    taxCalculation[key] = value;
  });

  // Damage History
  const damageHistory = [];
  $(".motor-milieu-info-table")
    .slice(1)
    .find("tr")
    .each((index, row) => {
      const key = $(row).find("th").text().trim();
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
