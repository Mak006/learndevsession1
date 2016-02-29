// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "dojo/request/xhr"], function (require, exports, xhr) {
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
    exports.FriendCard = FriendCard;
    var Friends = (function (_super) {
        __extends(Friends, _super);
        function Friends() {
            _super.apply(this, arguments);
            this.state = {
                data: this.props.initialData
            };
        }
        Friends.prototype.getData = function () {
            var _this = this;
            var options = {
                handleAs: "json",
                headers: {
                    "X-Requested-With": null
                }
            };
            var promise = xhr.get("http://learndevapi.azurewebsites.net/api/Friends", options);
            promise.then(function (data) {
                data = data.map(function (value, idx) {
                    value.courseCount = value.coursesCount;
                    value.articleCount = value.articlesCount;
                    return value;
                });
                _this.setState({
                    data: data
                });
            }, function () {
                console.log("error with the call");
            });
        };
        Friends.prototype.render = function () {
            var friendsList = [];
            this.state.data.forEach(function (frd, idx) {
                friendsList.push(React.createElement(FriendCard, {"key": frd.id, "initials": frd.initials, "name": frd.name, "courseCount": frd.courseCount, "articleCount": frd.articleCount}));
            });
            return (React.createElement("div", null, friendsList));
        };
        return Friends;
    })(React.Component);
    exports.Friends = Friends;
});
//ReactDOM.render(<FriendCard initials="LP" name="Last Person" articleCount={14} courseCount={33} />, document.getElementById('test'));
//# sourceMappingURL=friends.js.map