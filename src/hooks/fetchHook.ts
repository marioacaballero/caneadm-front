export const fetchHook = (url: string, cb: any) => {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => cb(data));
};
