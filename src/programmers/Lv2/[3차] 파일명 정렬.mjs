export const solution = (files = [""]) => {
  const reg = /\D+|\d+/g;

  return files
    .map((file) => {
      const [name, number] = file.toLowerCase().match(reg);
      return {
        file,
        name,
        number: +number,
      };
    })
    .sort((a, b) => {
      if (a.name > b.name) return 1;
      else if (a.name < b.name) return -1;
      else if (a.number > b.number) return 1;
      else if (a.number < b.number) return -1;
      else return 0;
    })
    .map((e) => e.file);
};

export const success_solution = (files = [""]) => {
  return files
    .map((file) => {
      const [name, number] = file.toLowerCase().match(/\D+|\d+/g);
      return [file, [name, number]];
    })
    .sort((a, b) => a[1][1] - b[1][1])
    .sort((a, b) => {
      if (a[1][0] < b[1][0]) return -1;
      else if (a[1][0] > b[1][0]) return 1;
      else return 0;
    })
    .map((file) => file[0]);
};

export const examples__arr = [
  {
    files: ["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"],
    answer: ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"],
  },
  {
    files: ["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"],
    answer: ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"],
  },
];
