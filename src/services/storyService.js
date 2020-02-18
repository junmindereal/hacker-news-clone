import http from "./httpService";
import { apiUrl, json } from "../config.json";

export function getStoryIds(type) {
  return http.get(`${apiUrl}/${type}stories${json}`);
}

export function getItem(id) {
  return http.get(`${apiUrl}/item/${id}${json}`);
}

export function getStories(ids) {
  return http.all(ids.map(id => getItem(id)));
}

export function getComments(ids) {
  return http.all(ids.map(id => getItem(id)));
}

export function getUser(id) {
  return http.get(`${apiUrl}/user/${id}${json}`);
}
