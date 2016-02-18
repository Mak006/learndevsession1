// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../../typings/react/react-global.d.ts" />
var FriendCard = (function (_super) {
    __extends(FriendCard, _super);
    function FriendCard() {
        _super.apply(this, arguments);
    }
    FriendCard.prototype.render = function () {
        return (React.createElement("div", {"className": "friend"}, React.createElement("div", {"className": "img-circle friend-initials"}, React.createElement("h4", null, this.props.initials)), React.createElement("div", {"className": "friend-name"}, this.props.name), React.createElement("div", {"className": "friend-details"}, React.createElement("div", null, this.props.courseCount, " courses taken"), React.createElement("div", null, this.props.articleCount, " articles reviewed"))));
    };
    return FriendCard;
})(React.Component);
var Friends = (function (_super) {
    __extends(Friends, _super);
    function Friends() {
        _super.apply(this, arguments);
    }
    Friends.prototype.render = function () {
        var friendsList = [];
        this.props.initialData.forEach(function (frd, idx) {
            friendsList.push(React.createElement(FriendCard, {"key": frd.id, "initials": frd.initials, "name": frd.name, "courseCount": frd.courseCount, "articleCount": frd.articleCount}));
        });
        return (React.createElement("div", null, friendsList));
    };
    return Friends;
})(React.Component);
var friendsData = [
    { id: 1, name: "Homer Simpson", initials: "HS", courseCount: 32, articleCount: 19 },
    { id: 2, name: "Marge Simpson", initials: "MS", courseCount: 22, articleCount: 13 },
    { id: 3, name: "Bart Simpson", initials: "BS", courseCount: 12, articleCount: 10 }
];
ReactDOM.render(React.createElement(Friends, {"initialData": friendsData}), document.getElementById('friendsNode'));
//ReactDOM.render(<FriendCard initials="LP" name="Last Person" articleCount={14} courseCount={33} />, document.getElementById('test'));
//# sourceMappingURL=friends.js.map