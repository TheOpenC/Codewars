// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"



function domainName(url){
    let noHttp = url.startsWith('http://') ? url.replace('http://', '') : url.replace('https://', ''),
        noWww = noHttp.startsWith('www.') ?  noHttp.replace('www.', '') : noHttp,
        dot = noWww.indexOf('.')

    return noWww.substring(0, (dot))
    
    }


  

  console.log(domainName("http://github.jo"))