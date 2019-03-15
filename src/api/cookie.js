let cookie = document.cookie.split(";"),
    map = new Map(),
    cookie_obj = {};
cookie.forEach((e, v) => {
  e = e.split("=");
  map.set(e[0], e[1])
});
map.forEach((v, k) => cookie_obj[k] = v);

export default{
    cookie_obj
}