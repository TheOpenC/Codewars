//https://www.codewars.com/kata/51f2b4448cadf20ed0000386
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//indexof() 

//slice(location of indexof)


function removeUrlAnchor(url){
    let index = ""
    url.includes("#") ? index = url.slice(url.indexOf('#')) : url 
    return url.replace(index,"")
  }

  console.log(removeUrlAnchor("www.codewars.com?page=1"))