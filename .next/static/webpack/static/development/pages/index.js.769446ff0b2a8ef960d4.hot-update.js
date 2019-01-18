webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Description.js":
/*!***********************************!*\
  !*** ./components/Description.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _jsxFileName = "/Users/mando/Code/Projects/Next/neo-nasa/components/Description.js";




var Description = function Description() {
  var stage = 0;

  function break_machine() {
    if (stage == 0) {
      stage = stage + 1;
      document.getElementById('summary').innerHTML = '*side panel falls off*';
      document.getElementById('look-btn').innerHTML = 'Look Inside?';
    } else if (stage == 1) {
      document.getElementById('summary').innerHTML = "What the hell... This thing isn't from Space!! It looks like some bright and ambitious web developer just created this site using React in Next.js! Hmm interesting, looks like he fetched the data from the official NASA API for near earth objects and organized into this nice readable table. What a cool guy!";
      document.getElementById("look-btn").style.visibility = "hidden";
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3946283140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "description",
    className: "jsx-3946283140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    id: "p-button",
    className: "jsx-3946283140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Kick machine?")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    id: "summary",
    className: "jsx-3946283140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "I am the Great All Knowing Space Machine. I crash landed here on Earth from my home planet thousands of years ago. My people have the ability to see every single asteroid that will orbit around this planet everyday. I can show you if they're dangerous or their speed or--", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3946283140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-3946283140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), " You know what... Here, take a look."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    id: "peek-button",
    className: "jsx-3946283140",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    id: "look-btn",
    onClick: break_machine,
    outline: true,
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Kick machine?"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3946283140",
    css: "#description.jsx-3946283140{height:25vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#summary.jsx-3946283140{text-align:center;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;padding:0px 250px;color:#d9d9d9;}#peek-button.jsx-3946283140{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}#p-button.jsx-3946283140{visibility:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW5kby9Db2RlL1Byb2plY3RzL05leHQvbmVvLW5hc2EvY29tcG9uZW50cy9EZXNjcmlwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QndCLEFBR2dDLEFBTU0sQUFNRyxBQUdILFlBZEwsTUFNSSxBQVNwQixzREFIQSxjQVhpQyxDQU1YLGtCQUNKLGNBQ2xCLGtGQVBzQiw2RkFDdEIiLCJmaWxlIjoiL1VzZXJzL21hbmRvL0NvZGUvUHJvamVjdHMvTmV4dC9uZW8tbmFzYS9jb21wb25lbnRzL0Rlc2NyaXB0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3RzdHJhcCc7XG5cbmNvbnN0IERlc2NyaXB0aW9uID0gKCkgPT4ge1xuICAgIGxldCBzdGFnZSA9IDA7XG4gICAgZnVuY3Rpb24gYnJlYWtfbWFjaGluZSgpIHtcbiAgICAgICAgaWYgKHN0YWdlID09IDApIHtcbiAgICAgICAgICAgIHN0YWdlID0gc3RhZ2UgKyAxXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VtbWFyeScpLmlubmVySFRNTCA9ICcqc2lkZSBwYW5lbCBmYWxscyBvZmYqJztcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb29rLWJ0bicpLmlubmVySFRNTCA9ICdMb29rIEluc2lkZT8nO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YWdlID09IDEpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdW1tYXJ5JykuaW5uZXJIVE1MID0gXCJXaGF0IHRoZSBoZWxsLi4uIFRoaXMgdGhpbmcgaXNuJ3QgZnJvbSBTcGFjZSEhIEl0IGxvb2tzIGxpa2Ugc29tZSBicmlnaHQgYW5kIGFtYml0aW91cyB3ZWIgZGV2ZWxvcGVyIGp1c3QgY3JlYXRlZCB0aGlzIHNpdGUgdXNpbmcgUmVhY3QgaW4gTmV4dC5qcyEgSG1tIGludGVyZXN0aW5nLCBsb29rcyBsaWtlIGhlIGZldGNoZWQgdGhlIGRhdGEgZnJvbSB0aGUgb2ZmaWNpYWwgTkFTQSBBUEkgZm9yIG5lYXIgZWFydGggb2JqZWN0cyBhbmQgb3JnYW5pemVkIGludG8gdGhpcyBuaWNlIHJlYWRhYmxlIHRhYmxlLiBXaGF0IGEgY29vbCBndXkhXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvb2stYnRuXCIpLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwicC1idXR0b25cIj48QnV0dG9uPktpY2sgbWFjaGluZT88L0J1dHRvbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgyIGlkPVwic3VtbWFyeVwiPkkgYW0gdGhlIEdyZWF0IEFsbCBLbm93aW5nIFNwYWNlIE1hY2hpbmUuIEkgY3Jhc2ggbGFuZGVkIGhlcmUgb24gRWFydGggZnJvbSBteSBob21lIHBsYW5ldCB0aG91c2FuZHMgb2YgeWVhcnMgYWdvLiBNeSBwZW9wbGUgaGF2ZSB0aGUgYWJpbGl0eSB0byBzZWUgZXZlcnkgc2luZ2xlIGFzdGVyb2lkIHRoYXQgd2lsbCBvcmJpdCBhcm91bmRcbiAgICAgICAgICAgICAgICB0aGlzIHBsYW5ldCBldmVyeWRheS4gSSBjYW4gc2hvdyB5b3UgaWYgdGhleSdyZSBkYW5nZXJvdXMgb3IgdGhlaXIgc3BlZWQgb3ItLTxiciAvPjxiciAvPiBZb3Uga25vdyB3aGF0Li4uIEhlcmUsIHRha2UgYSBsb29rLjwvaDI+XG4gICAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJwZWVrLWJ1dHRvblwiPjxCdXR0b24gaWQ9XCJsb29rLWJ0blwiIG9uQ2xpY2s9e2JyZWFrX21hY2hpbmV9IG91dGxpbmUgY29sb3I9XCJzZWNvbmRhcnlcIj5LaWNrIG1hY2hpbmU/PC9CdXR0b24+PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgI2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjI1dmg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI3N1bW1hcnkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDI1MHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2Q5ZDlkOTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI3BlZWstYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICNwLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6aGlkZGVuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXNjcmlwdGlvbiJdfQ== */\n/*@ sourceURL=/Users/mando/Code/Projects/Next/neo-nasa/components/Description.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ })

})
//# sourceMappingURL=index.js.769446ff0b2a8ef960d4.hot-update.js.map