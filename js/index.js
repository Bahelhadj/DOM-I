const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation
// This didnt seem to work, so i went with the example below
// const navcontent = document.querySelectorAll("a");
// navcontent[0].textcontent = siteContent["nav"]["nav-item-1"];
// navcontent[1].textcontent = siteContent["nav"]["nav-item-2"];
// navcontent[2].textcontent = siteContent["nav"]["nav-item-3"];
// navcontent[3].textcontent = siteContent["nav"]["nav-item-4"];
// navcontent[4].textcontent = siteContent["nav"]["nav-item-5"];
// navcontent[5].textcontent = siteContent["nav"]["nav-item-6"];

const navcont = document.querySelectorAll("a");
navcont[0].innerHTML = "Services";
navcont[1].innerHTML = "Product";
navcont[2].innerHTML = "Vision";
navcont[3].innerHTML = "Features";
navcont[4].innerHTML = "About";
navcont[5].innerHTML = "Content";

//DomAwesomeSection
document.querySelector("h1").innerHTML = "DOM<br>Is<br>Awesome";
document.querySelector("button").innerHTML = "Get Started";
document.getElementById("cta-img").setAttribute("src", siteContent["cta"]["img-src"]);

//lastimagesection
document.getElementById("middle-img").setAttribute("src", siteContent["main-content"]["middle-img-src"])

//therestofthestuff
const titles = document.getElementsByTagName("h4");
titles[0].innerHTML = siteContent["main-content"]["features-h4"];
titles[1].innerHTML = siteContent["main-content"]["about-h4"];
titles[2].innerHTML = siteContent["main-content"]["services-h4"];
titles[3].innerHTML = siteContent["main-content"]["product-h4"];
titles[4].innerHTML = siteContent["main-content"]["vision-h4"];
titles[5].innerHTML = siteContent["contact"]["contact-h4"];
const paragraph = document.getElementsByTagName("p");
paragraph[0].innerHTML = siteContent["main-content"]["features-content"];
paragraph[1].innerHTML = siteContent["main-content"]["about-content"];
paragraph[2].innerHTML = siteContent["main-content"]["services-content"];
paragraph[3].innerHTML = siteContent["main-content"]["product-content"];
paragraph[4].innerHTML = siteContent["main-content"]["vision-content"];
paragraph[5].innerHTML = siteContent["contact"]["address"];
paragraph[6].innerHTML = siteContent["contact"]["phone"];
paragraph[7].innerHTML = siteContent["contact"]["email"];
paragraph[8].innerHTML = siteContent["footer"]["copyright"];






