# ScrapCity

ScrapCity is an API project that scrapes and centralizes data related to Dragon City.

---

We are currently very early in the project and do not have much focus, if you intend to use it, please consider contributing to the development :D

Personally I do not have anything that depends on this project, I am doing it more as a hobby and to test the Web Scraping library that I have been developing, [Xcrap](https://github.com/1Marcuth/xcrap) which so far has proven to be quite scalable.

---

## Plans

We are planning to scrape data from a few websites:

### Deetlist (https://deetlist.com/dragoncity/)

Deetlist is a Dragon City website, perhaps one of the richest in terms of diversity of information, but not very detailed and poorly structured. You can take some good information from it and combine it with other sources to get a little more data.

---

#### Pages

Since Deetlist doesn't have an API, our only alternative is to extract the data from the HTML pages using parsing algorithms. But fear not, [Xcrap](https://github.com/1Marcuth/xcrap) has our back.

---

##### Home (/)
- [x] Parsing Model
- [ ] Trasnformation Model Model

##### All Events (/events)
- [x] Parsing Model
- [ ] Trasnformation Model Model

##### All Dragons (/all-dragons)
- [x] Parsing Model
- [ ] Trasnformation Model Model

##### Fog Island (/events/fog)
- [x] Parsing Model
- [ ] Trasnformation Model Model

##### Grid Island (/events/grid)
- [x] Parsing Model
- [ ] Trasnformation Model Model

##### Puzzle Island (/events/puzzle)
- [x] Parsing Model
- [ ] Trasnformation Model Model

##### Runner Island (/events/runner)
- [x] Parsing Model (incomplete)
- [ ] Trasnformation Model Model

##### Tower Island (/events/puzzle)
- [x] Parsing Model
- [ ] Trasnformation Model Model

##### Maze Island (/events/maze)
- [x] Parsing Model
- [ ] Trasnformation Model Model

#### All Heroic Dragons (/dragons/report/all_heroic.php)
- [x] Parsing Model
- [ ] Trasnformation Model Model

#### All Breedable Category 5 Dragons (/dragons/report/cat5_breedable.php)
- [x] Parsing Model
- [ ] Trasnformation Model Model

#### All Breedable Category 9 Dragons (/dragons/report/cat9_breedable.php)
- [x] Parsing Model
- [ ] Trasnformation Model Model

#### All Breedable Legendary Dragons (/dragons/report/leg_breedable.php)
- [x] Parsing Model
- [ ] Trasnformation Model Model

#### Best Heroic Dragons By Attack (/dragons/report/heroics_by_attack.php)
- [x] Parsing Model
- [ ] Trasnformation Model Model

#### Dragon (/dragon/[slug])
- [x] Parsing Model
- [ ] Trasnformation Model Model

#### Newest Dragons (/new-dragons/)
- [x] Parsing Model
- [ ] Trasnformation Model Model

#### Element Tokens (/tokens/)
- [x] Parsing Model
- [ ] Trasnformation Model Model

#### Elements (/elements/)
- [x] Parsing Model
- [ ] Trasnformation Model Model

---

### Ditlep (https://ditlep.com)

**Diltep** is a *Dragon City* website, I would say it is the most complete currently (for now, wait for **DC Highs** and don't do Web Scraping there xD).

It has several advantages over **Deetlist**, such as having more details on its pages, more accurate and updated information and has layout and feature updates.

But one disadvantage is that **Ditlep** uses **AngularJS** to load and render the content on the pages... What does that mean? That we have to execute JavaScript if we want to extract data directly from the pages, but... Wait a minute, so there is an **API** providing this data behind the scenes, right?

That's right, my friend, we have an undocumented **API** to explore, before they used data encryption in the responses from this **API**, and your *Frontend* had the key, but that is ridiculous, everything that is on the *Client-Side* is not secure, it could even take a while for you to find the key, but it was totally possible.

It seems that over time they realized this too or it was for performance reasons and removed this encryption. Today it is just an undocumented **API**.

I had already mapped some endpoints of this **API** of theirs before and created a **Python** library called [ditlep](https://github.com/1Marcuth/ditlep) that offered a wrapper for this **API**, but since then more endpoints have appeared, such as the ones from Trading Hub and I believe I will have to map them again.

Anyway, this will be the easiest part :v

---

### DBGames.info (https://dbgames.info/dragoncity/)

This is a very old Dragon City website that has stopped being updated, it only has a tab that shows "Latest Dragons", "Latest Heroics", "Latest Legendaries" and another that shows a pagination of all the dragons in the game.

And well, since what I want here is to centralize data sources, disregarding their redundancy and obsolescence a little, we will create models to scrape data from their pages.

---

### Dragon City Fandom (https://dragoncity.fandom.com/)

Dragon City Fandom is a community-maintained Dragon City website, I personally think the information there is of very low quality and may be out of date, but again we will centralize Dragon City data here :v

---

### Dragon City Website (https://www.dragoncitygame.com/pt-BR)

This is the game's official website, and well, here we have great quality information, such as news and offers that we can extract, but from what I've seen, this data is quite annoying to be transformed and separated properly. There is no clear division of classes that we can follow, in fact many elements of the articles don't even have one, I believe we will need to use good Regex rules to get around all this, well, I hope you're here to help me :v