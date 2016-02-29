// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
define(["require", "exports", "app/friends", "app/items", "app/profile", "dojo/on", "dojo/dom-class"], function (require, exports, Friends, Items, Profile, on, domClass) {
    console.info("in main");
    var friendsData = [
        { id: 1, name: "Homer Simpson", initials: "HS", courseCount: 32, articleCount: 19 },
        { id: 2, name: "Marge Simpson", initials: "MS", courseCount: 22, articleCount: 13 },
        { id: 3, name: "Bart Simpson", initials: "BS", courseCount: 12, articleCount: 10 }
    ];
    var friends = ReactDOM.render(React.createElement(Friends.Friends, {"initialData": friendsData}), document.getElementById('friendsNode'));
    friends.getData();
    var myCourse = ReactDOM.render(React.createElement(Items.ItemsCard, null), document.getElementById("myCourses"));
    var courses = [];
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
    ReactDOM.render(React.createElement(Profile.Profile, null), document.getElementById('profileNode'));
    on(window, "scroll", function () {
        if (document.body.scrollTop > 100) {
            domClass.add(document.getElementsByTagName("nav")[0], "scrolled");
        }
        else {
            domClass.remove(document.getElementsByTagName("nav")[0], "scrolled");
        }
    });
});
//# sourceMappingURL=main.js.map