"use strict";

var _react = _interopRequireDefault(require("react"));

var _client = _interopRequireDefault(require("react-dom/client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var parent = [_react["default"].createElement("div", {
  key: "1",
  id: "parent1"
}, _react["default"].createElement("div", {
  id: "child1"
}, [_react["default"].createElement("h1", {}, "I am a h1 tag"), _react["default"].createElement("h2", {}, "I am a h2 tag")])), _react["default"].createElement("div", {
  key: "2",
  id: "parent2"
}, _react["default"].createElement("div", {
  id: "child2"
}, [_react["default"].createElement("h1", {}, "I am a h1 tag"), _react["default"].createElement("h2", {}, "I am a h2 tag")]))];

var root = _client["default"].createRoot(document.getElementById("root"));

root.render(parent);
//# sourceMappingURL=App.dev.js.map
