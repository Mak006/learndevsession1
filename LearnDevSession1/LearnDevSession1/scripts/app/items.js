// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
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
    exports.ItemCard = ItemCard;
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
    exports.ItemsCard = ItemsCard;
});
//# sourceMappingURL=items.js.map