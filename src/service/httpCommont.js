import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://newsapi.org/",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
  }
});
const apiClient1 = axios.create({
  baseURL: "https://api.weatherapi.com/",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
  }
});

export default {
  getDataEverything(getparams) {
   
        const params = new URLSearchParams();
        params.append("q", getparams.q);
        // params.append("qInTitle", state.urlOption.qInTitle);
        params.append("sources", getparams.sources);
        params.append("domains", getparams.domains);
        // params.append("excludeDomains", state.urlOption.excludeDomains);
        params.append("from", getparams.from);
        params.append("sortBy", getparams.sortBy);
        params.append("pageSize", getparams.pageSize);
        params.append("page", getparams.page);
        params.append("apikey", getparams.apiKey);
   
    return apiClient.post("v2/everything?" + params);
  },
  getDataSources(params) {
    return apiClient.get("v2/sources?" + params);
  },
  getDataTopHeadLing(params) {
    return apiClient.get("v2/top_headling?" + params);
  },
  getDateWeather(params) {
    return apiClient1.get("v1/current.json?" + params);
  }
};

// top-headlines? country=us&category=business sources=techcrunch       entertainment
// everything? domains=wsj.com
// sources? sources?language=en language=en&country=us
// World U.S. Politics N.Y. Business
// Opinion: Tech Science Health Sports Arts Books Style Food Travel
//  Magazine: T Magazine Real Estate Video
// const category: [
//     { id: 0, name: 'general' },
// { id: 1, name: 'business' },
// { id: 2, name: 'entertainment' },
// { id: 3, name: 'health ' },
// { id: 4, name: 'science' },
// { id: 5, name: 'sports' },
// { id: 6, name: 'technology' },
// ]
