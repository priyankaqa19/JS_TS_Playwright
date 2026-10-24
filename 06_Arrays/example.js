let browsers = ["Chrome", "Firefox", "Safari", "Edge"];
console.log(browsers.length); // 4

browsers.pop(); // removes the last element
console.log(browsers.length); // 3
console.log(browsers); // ["Chrome", "Firefox", "Safari"]

browsers.push("Opera"); // adds a new element at the end
console.log(browsers.length);
console.log(browsers); // ["Chrome", "Firefox", "Safari", "Opera"]

browsers.shift(); // removes the first element
console.log(browsers.length);
console.log(browsers); // ["Firefox", "Safari", "Opera"]

browsers.unshift("Brave"); // adds a new element at the beginning
console.log(browsers.length);
console.log(browsers); // ["Brave", "Firefox", "Safari", "Opera"]

// Check if "Chrome" is present in the array, if not add it to the end
console.log('Checking if "Chrome" is present in the array, if not add it to the end');
for(let i = 0; i < browsers.length; i++) {
    //console.log(browsers[i]);
    if(browsers[i] != "Chrome") {        
        console.log("Not Chrome browser");
        browsers.push("Chrome"); // adds a new element at the end
        console.log(browsers);
        break;
    }else{
        console.log("Found Chrome browser");
    }
}
