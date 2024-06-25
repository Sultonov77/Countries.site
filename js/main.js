let countryList = document.querySelector(".countries-list");
///////////
function allCountries(arr, list) {
  arr.forEach((value) => {
    let elItem = document.createElement("li");
    let elImg = document.createElement("img");
    let elName = document.createElement("h2");
    let elCapital = document.createElement("p");
    let elPopulation = document.createElement("p");
    let elIdtag = document.createElement("span");
    let elMore = document.createElement("button");
    //////////////////
    elItem.className = "w-[300px] p-2 m-6 bg-stone-100 rounded-[10px]";
    ///////////////////
    elImg.src = value.flag;
    elImg.className = "w-[100%] h-[200px] rounded-[10px] ";
    elName.textContent = "Country: " + value.name;
    elName.className = "font-bold text-[22px] mb-2";
    elCapital.textContent = "Capital: " + value.capital;
    elCapital.className = "text-[20px]  text-blue-800 mb-1";
    elPopulation.textContent = "Population: " + value.population;
    elPopulation.className = "text-[18px] text-zinc-700";
    elIdtag.textContent = "Country: " + value.id;
    elIdtag.className = "text-[18px] text-teal-800";
    elMore.textContent = "More info";
    elMore.className =
      "text-md ml-[20px] border-slate-700 border rounded-md px-3 py-1 hover:bg-blue-950 hover:text-white transition-all duration-500";
    /////////////////////////////////
    elItem.append(elImg, elName, elCapital, elPopulation, elIdtag, elMore);
    list.append(elItem);
  });
}
allCountries(countrys, countryList);
