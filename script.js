const mockMovieList = [
  { title: "Romain on the moon", description: "lorem ipsum" },
  { title: "Welcome Romania!", description: "lorem ipsum" },
  { title: "Welcome 3!", description: "lorem ipsum" },
]

mockMovieList.forEach((item, i) => {
  const li = document.createElement("li");
  const h2 = document.createElement("h2");
  const title = document.createTextNode(item.title);
  const p = document.createElement("p");
  const description = document.createTextNode(item.description);

  li.appendChild(h2);
  li.appendChild(p);
  h2.appendChild(title);
  p.appendChild(description);

  document.getElementById("movie-list").appendChild(li);
});
