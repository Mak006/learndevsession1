// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    var ProfileTextBox = (function (_super) {
        __extends(ProfileTextBox, _super);
        function ProfileTextBox() {
            _super.apply(this, arguments);
        }
        ProfileTextBox.prototype.render = function () {
            var pHidden = this.props.editable ? " hidden" : "";
            var inputHidden = this.props.editable ? "" : " hidden";
            return (React.createElement("div", null, React.createElement("p", {"className": "form-control-static" + pHidden}, this.props.value), React.createElement("input", {"type": "text", "value": this.props.value.toString(), "className": "form-control" + inputHidden, "onChange": this.props.onChange})));
        };
        return ProfileTextBox;
    })(React.Component);
    exports.ProfileTextBox = ProfileTextBox;
    var ProfileButton = (function (_super) {
        __extends(ProfileButton, _super);
        function ProfileButton() {
            _super.apply(this, arguments);
        }
        ProfileButton.prototype.render = function () {
            return (React.createElement("button", {"className": "btn btn-block " + this.props.iconClass, "onClick": this.props.onClick}, this.props.label));
        };
        return ProfileButton;
    })(React.Component);
    exports.ProfileButton = ProfileButton;
    var Profile = (function (_super) {
        __extends(Profile, _super);
        function Profile(args) {
            _super.call(this, args);
            this.state = {
                courses: 14,
                articles: 22,
                editable: false
            };
        }
        Profile.prototype.editClickHandler = function (e) {
            e.preventDefault();
            this.setState({
                editable: true
            });
        };
        Profile.prototype.cancelClickHandler = function (e) {
            e.preventDefault();
            this.setState({
                editable: false
            });
        };
        Profile.prototype.coursesChangeHandler = function (e) {
            this.setState({
                courses: parseInt(e.target.value)
            });
        };
        Profile.prototype.articleChangeHandler = function (e) {
            this.setState({
                articles: parseInt(e.target.value)
            });
        };
        Profile.prototype.render = function () {
            var _this = this;
            var editButtonHidden = this.state.editable ? " hidden" : " ";
            var saveCancelButtonHidden = this.state.editable ? "" : " hidden";
            return (React.createElement("div", null, React.createElement("div", null, React.createElement("label", null, "Courses"), React.createElement(ProfileTextBox, {"value": this.state.courses, "editable": this.state.editable, "onChange": function (e) { return _this.coursesChangeHandler(e); }})), React.createElement("div", null, React.createElement("label", null, "Articles"), React.createElement(ProfileTextBox, {"value": this.state.articles, "editable": this.state.editable, "onChange": function (e) { return _this.articleChangeHandler(e); }})), React.createElement("div", {"className": "profile-buttons row"}, React.createElement("div", {"className": "col-md-6 col-md-push-6" + editButtonHidden}, React.createElement(ProfileButton, {"iconClass": "btn-primary", "label": "Edit", "onClick": this.editClickHandler.bind(this)})), React.createElement("div", {"className": "col-md-6" + saveCancelButtonHidden}, React.createElement(ProfileButton, {"iconClass": "btn-primary", "label": "Save", "onClick": this.cancelClickHandler.bind(this)})), React.createElement("div", {"className": "col-md-6" + saveCancelButtonHidden}, React.createElement(ProfileButton, {"iconClass": "btn-danger", "label": "Cancel", "onClick": this.cancelClickHandler.bind(this)})))));
        };
        return Profile;
    })(React.Component);
    exports.Profile = Profile;
});
//# sourceMappingURL=profile.js.map