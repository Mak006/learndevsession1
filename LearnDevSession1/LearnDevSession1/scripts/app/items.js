// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/react/react-global.d.ts" />
var ItemCard = (function (_super) {
    __extends(ItemCard, _super);
    function ItemCard() {
        _super.apply(this, arguments);
    }
    ItemCard.prototype.formatRating = function () {
        return this.props.rating.toFixed(1);
    };
    ItemCard.prototype.render = function () {
        return (React.createElement("div", {"className": "row record"}, React.createElement("div", {"className": "record-detail"}, React.createElement("div", {"className": "record-title"}, React.createElement("a", {"href": this.props.link}, this.props.title)), React.createElement("div", {"className": "record-description"}, this.props.description)), React.createElement("div", {"className": "record-rating"}, this.formatRating())));
    };
    return ItemCard;
})(React.Component);
var ItemsCard = (function (_super) {
    __extends(ItemsCard, _super);
    function ItemsCard(args) {
        _super.call(this, args);
        this.state = { items: [] };
    }
    ItemsCard.prototype.updateData = function (newValue) {
        this.setState({ items: newValue });
    };
    ItemsCard.prototype.render = function () {
        var itemList = [];
        this.state.items.forEach(function (frd, idx) {
            itemList.push(React.createElement(ItemCard, {"key": idx, "description": frd.description, "link": frd.link, "rating": frd.rating, "title": frd.title}));
        });
        return (React.createElement("div", null, itemList));
    };
    return ItemsCard;
})(React.Component);
console.log("initializing the card");
var myCourse = ReactDOM.render(React.createElement(ItemsCard, null), document.getElementById("myCourses"));
debugger;
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
//# sourceMappingURL=items.js.map