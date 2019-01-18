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
    className: "jsx-2506293188",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "description",
    className: "jsx-2506293188",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    id: "p-button",
    className: "jsx-2506293188",
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
    className: "jsx-2506293188",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "I am the Great All Knowing Space Machine. I crash landed here on Earth from my home planet thousands of years ago. My people have the ability to see every single asteroid that will orbit around this planet everyday. I can show you if they're dangerous or their speed or--", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2506293188",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2506293188",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), " You know what... Here, take a look."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    id: "peek-button",
    className: "jsx-2506293188",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    id: "look-btn",
    onClick: break_machine,
    color: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Kick machine?"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2506293188",
    css: "#description.jsx-2506293188{height:25vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}#summary.jsx-2506293188{text-align:center;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;padding:0px 250px;color:whitesmoke;}#peek-button.jsx-2506293188{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;}#p-button.jsx-2506293188{visibility:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYW5kby9Db2RlL1Byb2plY3RzL05leHQvbmVvLW5hc2EvY29tcG9uZW50cy9EZXNjcmlwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QndCLEFBR2dDLEFBTU0sQUFNRyxBQUdILFlBZEwsTUFNSSxBQVNwQixzREFIQSxjQVhpQyxDQU1YLGtCQUNELGlCQUNyQiwrRUFQc0IsNkZBQ3RCIiwiZmlsZSI6Ii9Vc2Vycy9tYW5kby9Db2RlL1Byb2plY3RzL05leHQvbmVvLW5hc2EvY29tcG9uZW50cy9EZXNjcmlwdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuXG5jb25zdCBEZXNjcmlwdGlvbiA9ICgpID0+IHtcbiAgICBsZXQgc3RhZ2UgPSAwO1xuICAgIGZ1bmN0aW9uIGJyZWFrX21hY2hpbmUoKSB7XG4gICAgICAgIGlmIChzdGFnZSA9PSAwKSB7XG4gICAgICAgICAgICBzdGFnZSA9IHN0YWdlICsgMVxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bW1hcnknKS5pbm5lckhUTUwgPSAnKnNpZGUgcGFuZWwgZmFsbHMgb2ZmKic7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9vay1idG4nKS5pbm5lckhUTUwgPSAnTG9vayBJbnNpZGU/JztcbiAgICAgICAgfSBlbHNlIGlmIChzdGFnZSA9PSAxKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VtbWFyeScpLmlubmVySFRNTCA9IFwiV2hhdCB0aGUgaGVsbC4uLiBUaGlzIHRoaW5nIGlzbid0IGZyb20gU3BhY2UhISBJdCBsb29rcyBsaWtlIHNvbWUgYnJpZ2h0IGFuZCBhbWJpdGlvdXMgd2ViIGRldmVsb3BlciBqdXN0IGNyZWF0ZWQgdGhpcyBzaXRlIHVzaW5nIFJlYWN0IGluIE5leHQuanMhIEhtbSBpbnRlcmVzdGluZywgbG9va3MgbGlrZSBoZSBmZXRjaGVkIHRoZSBkYXRhIGZyb20gdGhlIG9mZmljaWFsIE5BU0EgQVBJIGZvciBuZWFyIGVhcnRoIG9iamVjdHMgYW5kIG9yZ2FuaXplZCBpbnRvIHRoaXMgbmljZSByZWFkYWJsZSB0YWJsZS4gV2hhdCBhIGNvb2wgZ3V5IVwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb29rLWJ0blwiKS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cInAtYnV0dG9uXCI+PEJ1dHRvbj5LaWNrIG1hY2hpbmU/PC9CdXR0b24+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMiBpZD1cInN1bW1hcnlcIj5JIGFtIHRoZSBHcmVhdCBBbGwgS25vd2luZyBTcGFjZSBNYWNoaW5lLiBJIGNyYXNoIGxhbmRlZCBoZXJlIG9uIEVhcnRoIGZyb20gbXkgaG9tZSBwbGFuZXQgdGhvdXNhbmRzIG9mIHllYXJzIGFnby4gTXkgcGVvcGxlIGhhdmUgdGhlIGFiaWxpdHkgdG8gc2VlIGV2ZXJ5IHNpbmdsZSBhc3Rlcm9pZCB0aGF0IHdpbGwgb3JiaXQgYXJvdW5kXG4gICAgICAgICAgICAgICAgdGhpcyBwbGFuZXQgZXZlcnlkYXkuIEkgY2FuIHNob3cgeW91IGlmIHRoZXkncmUgZGFuZ2Vyb3VzIG9yIHRoZWlyIHNwZWVkIG9yLS08YnIgLz48YnIgLz4gWW91IGtub3cgd2hhdC4uLiBIZXJlLCB0YWtlIGEgbG9vay48L2gyPlxuICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwicGVlay1idXR0b25cIj48QnV0dG9uIGlkPVwibG9vay1idG5cIiBvbkNsaWNrPXticmVha19tYWNoaW5lfSBjb2xvcj1cImRhbmdlclwiPktpY2sgbWFjaGluZT88L0J1dHRvbj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAjZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6MjV2aDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjc3VtbWFyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggMjUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAjcGVlay1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI3AtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJpbGl0eTpoaWRkZW47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERlc2NyaXB0aW9uIl19 */\n/*@ sourceURL=/Users/mando/Code/Projects/Next/neo-nasa/components/Description.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Description);

/***/ })

})
//# sourceMappingURL=index.js.0ba6601beb494dac1ca0.hot-update.js.map