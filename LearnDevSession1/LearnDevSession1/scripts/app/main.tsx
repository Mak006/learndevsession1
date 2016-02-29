// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

console.info("in main");

import Friends = require("app/friends");
import Items = require("app/items");
import Profile = require("app/profile");
import on = require("dojo/on");
import domClass = require("dojo/dom-class");

var friendsData: Friends.IFriendProps[] = [
    { id: 1, name: "Homer Simpson", initials: "HS", courseCount: 32, articleCount: 19 },
    { id: 2, name: "Marge Simpson", initials: "MS", courseCount: 22, articleCount: 13 },
    { id: 3, name: "Bart Simpson", initials: "BS", courseCount: 12, articleCount: 10 }
];

var friends:Friends.Friends = ReactDOM.render(<Friends.Friends initialData={friendsData} />, document.getElementById('friendsNode')) as Friends.Friends;
friends.getData();

var myCourse = ReactDOM.render(<Items.ItemsCard />, document.getElementById("myCourses")) as Items.ItemsCard;
var courses: Items.IItemProp[] = [];
courses.push({
    description: "I haven't finished this one, but so far it seems interesting. It's nice having a primer on HTML5 and CSS3.", link: "#", rating: 4, title: "Front-End Web Development Quick Start With HTML5, CSS, and JavaScript"
});
courses.push({
    description: "I haven't finished this one, but so far it seems interesting. It's nice having a primer on HTML5 and CSS3.", link: "#", rating: 4, title: "Front-End Web Development Quick Start With HTML5, CSS, and JavaScript"
});
courses.push({
    description: "I haven't finished this one, but so far it seems interesting. It's nice having a primer on HTML5 and CSS3.", link: "#", rating: 4, title: "Front-End Web Development Quick Start With HTML5, CSS, and JavaScript"
});
courses.push({
    description: "I haven't finished this one, but so far it seems interesting. It's nice having a primer on HTML5 and CSS3.", link: "#", rating: 4, title: "Front-End Web Development Quick Start With HTML5, CSS, and JavaScript"
});
courses.push({
    description: "I haven't finished this one, but so far it seems interesting. It's nice having a primer on HTML5 and CSS3.", link: "#", rating: 4, title: "Front-End Web Development Quick Start With HTML5, CSS, and JavaScript"
});
console.log("updating the card");
myCourse.updateData(courses);


ReactDOM.render(<Profile.Profile />, document.getElementById('profileNode'));

on(window, "scroll", () => {
    if (document.body.scrollTop > 100) {
        domClass.add(document.getElementsByTagName("nav")[0], "scrolled");
    } else {
        domClass.remove(document.getElementsByTagName("nav")[0], "scrolled");
    }
});
