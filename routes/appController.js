import axios from "axios";
import NewsAPI from "newsapi";
import config from "../config/index.js";
import { handleError, handleResponse } from "../config/reqHandler.js";
import { startDate } from "../helper/dateHelper.js";

const newsApi = new NewsAPI(config.newsAPIKey);

export const getNews = async (req, res) => {
  try {
    const { search, limit, page } = req.query;
    const data = {
      language: "en",
      country: "us",
      pageSize: limit ? parseInt(limit) : 10,
      page: page ? parseInt(page) : 1,
    };
    if (search != undefined) {
      data["q"] = search;
    }
    newsApi.v2.topHeadlines(data).then((response) => {
      return handleResponse({
        res,
        data: response,
      });
    });
  } catch (err) {
    return handleError({
      res,
      statusCode: err.statusCode ?? 401,
      err_msg: err.message || "Something went Wrong",
    });
  }
};

export const getWeather = async (req, res) => {
  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=21.17&lon=72.83&mode=json&units=metric&appid=${config.weatherAPIKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        var lastDate = "";
        let dayList = [];
        for (let index = 0; index < response.data.list.length; index++) {
          const element = response.data.list[index];
          var date = startDate(element.dt * 1000);
          if (date === lastDate) {
          } else if (dayList.length < 5) {
            lastDate = date;
            dayList.push({
              date: date,
              main: element.weather[0].main,
              temp: element.main.temp,
            });
          }
        }
        const resObj = {
          count: response.data.cnt,
          unit: "metric",
          location: response.data.city.name,
          data: dayList,
        };
        return handleResponse({ res, data: resObj });
      })
      .catch((error) => {
        console.log("error: ", error);
        return handleError({
          res,
          err_msg: error,
          statusCode: 404,
        });
      });
  } catch (err) {
    return handleError({
      res,
      statusCode: err.statusCode ?? 401,
      err_msg: err.message || "Something went Wrong",
    });
  }
};
