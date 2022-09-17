export const solution = (cacheSize, cities = [""]) => {
  cities = cities.map((x) => x.toLowerCase());
  const [, hit, miss] = LRU_LeastRecentlyUsed(cacheSize, cities);
  return hit + miss * 5;
};

export const LRU_LeastRecentlyUsed = (cacheSize = 1, data = [""]) => {
  if (cacheSize === 0) {
    return [[], 0, data.length];
  }

  let cache = [];
  let hit = 0;
  let miss = 0;
  for (let d of data) {
    let i = cache.findIndex((x) => x === d);
    if (i !== -1) {
      cache.splice(i, 1);
      ++hit;
    } else {
      ++miss;
    }
    if (cache.length === cacheSize) {
      cache.shift();
    }
    cache.push(d);
  }
  return [cache, hit, miss];
};

export const other = (cacheSize, cities) => {
  const map = new Map();

  const hitOfLRU = (data) => {
    map.delete(data);
    map.set(data, 1);
    return 1;
  };

  const missOfLRU = (data, size) => {
    if (size === 0) return 5;
    map.size === size && map.delete(map.keys().next().value);
    map.set(data, 1);
    return 5;
  };

  const getTimeCacheLRU = (data, size) => {
    data = data.toLocaleLowerCase();
    (map.has(data) ? hitOfLRU : missOfLRU)(data, size);
  };

  return cities.map((city) => getTimeCacheLRU(city, cacheSize)).reduce((a, b) => a + b, 0);
};

export function LRU(cacheSize, data) {
  const map = new Map();

  const hit = (data) => {
    map.delete(data);
    map.set(data, 1);
    return 1;
  };

  const miss = (data) => {
    if (cacheSize === 0) return 5;
    map.size === cacheSize && map.delete(map.keys().next().value);
    map.set(data, 1);
    return 5;
  };

  const getTime = (data) => {
    return (map.has(data) ? hit : miss)(data);
  };

  return data.map((d) => getTime(d)).reduce((a, b) => a + b, 0);
}

export const examples__arr = `
3	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]	50
3	["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]	21
2	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]	60
5	["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]	52
2	["Jeju", "Pangyo", "NewYork", "newyork"]	16
0	["Jeju", "Pangyo", "Seoul", "NewYork", "LA"]	25
`;
