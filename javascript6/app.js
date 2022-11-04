let search=document.getElementById("search")
let content=document.getElementById("content")

function myFunction(){
    let se=search.value
   let url="https://apis.ccbp.in/wiki-search?search="+se
   fetch(url)
   .then(data=>data.json())
   .then(response => {
    let { search_results } = response
    updateUIonSearchData(search_results)
   })
}

function updateUIonSearchData(searchResults) {
  //  console.log(searchResults)
  for (let result of searchResults) {
    updateSearchResponse(result)
    }
}

function updateSearchResponse(response) {
    let {title} = response
    console.log(title)
    for(let r of title){
   content.innerText=r
    }
}