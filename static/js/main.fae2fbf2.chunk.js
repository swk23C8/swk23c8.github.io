(window.webpackJsonpdexontech = window.webpackJsonpdexontech || []).push([
    [0], {
        128: function(e, t, a) {
            e.exports = a(286)
        },
        160: function(e, t) {},
        162: function(e, t) {},
        178: function(e, t) {},
        181: function(e, t) {},
        257: function(e, t) {
            function a(e) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND", t
            }
            a.keys = function() {
                return []
            }, a.resolve = a, e.exports = a, a.id = 257
        },
        271: function(e, t) {},
        286: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                l = a.n(n),
                i = a(123),
                s = a(31),
                r = a(30),
                o = (a(133), a(16)),
                h = a(17),
                c = a(20),
                u = a(18),
                m = a(19),
                f = a(26),
                g = a(29),
                d = a(51),
                b = function(e) {
                    function t(e) {
                        var a;
                        return Object(o.a)(this, t), (a = Object(c.a)(this, Object(u.a)(t).call(this, e))).state = {
                            showGoBack: !1
                        }, a
                    }
                    return Object(m.a)(t, e), Object(h.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            this.verifyGoBack(), this.props.history.listen(function(t, a) {
                                e.verifyGoBack(t)
                            })
                        }
                    }, {
                        key: "verifyGoBack",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            e ? "/" !== e.pathname ? this.setState({
                                showGoBack: !0
                            }) : this.setState({
                                showGoBack: !1
                            }) : "/" !== this.props.location.pathname ? this.setState({
                                showGoBack: !0
                            }) : this.setState({
                                showGoBack: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = {
                                    marginRight: "10px",
                                    lineHeight: "32px"
                                },
                                t = {
                                    marginTop: "4px",
                                    marginRight: "7px"
                                },
                                a = {
                                    display: this.state.showGoBack ? "inline-block" : "none",
                                    float: "left",
                                    color: "#fff"
                                };
                            return l.a.createElement("header", null, l.a.createElement("div", {
                                className: "row",
                                style: {
                                    position: "absolute",
                                    width: "100%"
                                }
                            }, l.a.createElement("div", {
                                className: "col s12",
                                style: {
                                    textAlign: "right",
                                    paddingTop: "10px"
                                }
                            }, l.a.createElement(r.b, {
                                to: "/",
                                className: "waves-effect btn-flat",
                                style: a
                            }, l.a.createElement(f.a, {
                                icon: g.c
                            })), l.a.createElement("a", {
                                className: "waves-effect waves-light btn-small blue",
                                href: "https://jsfiddle.net/user/swk23c8/fiddles",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: e
                            }, l.a.createElement(f.a, {
                                icon: d.c,
                                className: "material-icons left",
                                style: t
                            }), " JSFiddle"), l.a.createElement("a", {
                                className: "waves-effect waves-light btn-small blue-grey darken-4",
                                href: "https://github.com/swk23c8",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: e
                            }, l.a.createElement(f.a, {
                                icon: d.b,
                                className: "material-icons left",
                                style: t
                            }), " Github"))))
                        }
                    }]), t
                }(l.a.Component),
                p = Object(s.f)(b),
                v = a(43),
                y = a.n(v),
                w = function(e) {
                    function t() {
                        return Object(o.a)(this, t), Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
                    }
                    return Object(m.a)(t, e), Object(h.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            y.a.AutoInit()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = {
                                    marginRight: "10px",
                                    lineHeight: "32px",
                                    color: "#ecf0f1"
                                },
                                t = {
                                    marginTop: "4px",
                                    marginRight: "7px"
                                };
                            return l.a.createElement("footer", null, l.a.createElement("div", {
                                className: "row",
                                style: {
                                    position: "absolute",
                                    width: "100%",
                                    bottom: 0,
                                    textAlign: "center"
                                }
                            }, l.a.createElement("div", {
                                className: "col s12"
                            }, l.a.createElement(r.b, {
                                to: "/c",
                                className: "waves-effect btn-flat",
                                style: e
                            }, l.a.createElement(f.a, {
                                icon: g.a,
                                className: "material-icons left",
                                style: t
                            }), " Convertion tool"), l.a.createElement(r.b, {
                                to: "/vanitygen",
                                className: "waves-effect btn-flat",
                                style: e
                            }, l.a.createElement(f.a, {
                                icon: d.a,
                                className: "material-icons left",
                                style: t
                            }), " Vanity Generator"), l.a.createElement(r.b, {
                                to: "/aipong",
                                className: "waves-effect btn-flat",
                                style: e
                            }, l.a.createElement(f.a, {
                                icon: g.d,
                                className: "material-icons left",
                                style: t
                            }), " Machine Learning - Pong"))))
                        }
                    }]), t
                }(l.a.Component),
                S = function(e) {
                    function t(e) {
                        var a;
                        return Object(o.a)(this, t), (a = Object(c.a)(this, Object(u.a)(t).call(this, e))).state = {}, a
                    }
                    return Object(m.a)(t, e), Object(h.a)(t, [{
                        key: "render",
                        value: function() {
                            return l.a.createElement("section", {
                                style: {
                                    position: "absolute",
                                    top: "0",
                                    right: "0",
                                    bottom: "0",
                                    left: "0",
                                    boxShadow: "0 0 300px 70px rgba(0, 0, 0, 0.2) inset",
                                    backgroundColor: "#2c3e50",
                                    backgroundImage: "url(/images/noise.png), url(/images/sl.png)",
                                    color: "#7f8c8d"
                                }
                            }, l.a.createElement("div", {
                                className: "row valign-wrapper",
                                style: {
                                    height: "100%",
                                    textAlign: "center",
                                    position: "relative"
                                }
                            }, l.a.createElement("div", {
                                className: "col s12"
                            }, l.a.createElement("h4", {
                                style: {
                                    color: "#ecf0f1",
                                    margin: "0"
                                }
                            }, "Hello, I build Web stuff"), l.a.createElement("h5", {
                                style: {
                                    color: "#7f8c8d",
                                    margin: "1rem 0"
                                }
                            }, "sunwookkim@riseup.net"))))
                        }
                    }]), t
                }(l.a.Component),
                x = a(4),
                E = a(126),
                Y = a.n(E),
                k = function(e) {
                    function t(e) {
                        var a;
                        return Object(o.a)(this, t), (a = Object(c.a)(this, Object(u.a)(t).call(this, e))).state = {
                            fromAmount: 1,
                            fromSymbol: "BTC",
                            toSymbol: "USD",
                            conversion: "",
                            autoRefresh: !1,
                            autoRefreshProgress: 0,
                            autoRefreshTimer: null,
                            autoRefreshProgressBarStyle: {
                                display: "none"
                            }
                        }, a.handleInputChange = a.handleInputChange.bind(Object(x.a)(a)), a.handleConvertButton = a.handleConvertButton.bind(Object(x.a)(a)), a.doConvert = a.doConvert.bind(Object(x.a)(a)), a
                    }
                    return Object(m.a)(t, e), Object(h.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            y.a.AutoInit(), this.doConvert(), this.updateAutoRefreshProgress()
                        }
                    }, {
                        key: "handleInputChange",
                        value: function(e) {
                            "autoRefresh" === e.target.name && (e.target.checked ? this.setState({
                                autoRefresh: !0
                            }) : this.setState({
                                autoRefresh: !1
                            })), "fromSymbol" === e.target.name ? this.refs.ref_fromSymbol.value = String(this.refs.ref_fromSymbol.value).toUpperCase() : "toSymbol" === e.target.name && (this.refs.ref_toSymbol.value = String(this.refs.ref_toSymbol.value).toUpperCase())
                        }
                    }, {
                        key: "handleConvertButton",
                        value: function() {
                            var e = this;
                            this.setState({
                                fromAmount: parseFloat(this.refs.ref_fromAmount.value),
                                fromSymbol: String(this.refs.ref_fromSymbol.value).toUpperCase(),
                                toSymbol: String(this.refs.ref_toSymbol.value).toUpperCase()
                            }, function() {
                                e.doConvert()
                            })
                        }
                    }, {
                        key: "doConvert",
                        value: function() {
                            var e = this;
                            Y.a.get("https://min-api.cryptocompare.com/data/price?fsym=".concat(this.state.fromSymbol, "&tsyms=").concat(this.state.toSymbol)).then(function(t) {
                                "Error" === t.data.Response ? e.setState({
                                    conversion: "Invalid pairs. (".concat(e.state.fromSymbol, "/").concat(e.state.toSymbol, ")")
                                }) : e.setState({
                                    conversion: "".concat(e.state.fromAmount, " ").concat(e.state.fromSymbol, " is ").concat(parseFloat((e.state.fromAmount * t.data[e.state.toSymbol]).toFixed(6)), " ").concat(e.state.toSymbol),
                                    autoRefreshProgress: 0
                                })
                            }).catch(function(t) {
                                e.setState({
                                    conversion: "Invalid pairs. (".concat(e.state.fromSymbol, "/").concat(e.state.toSymbol, ")")
                                }), console.error(t)
                            })
                        }
                    }, {
                        key: "updateAutoRefreshProgress",
                        value: function() {
                            var e = this;
                            if (this.state.autoRefresh)
                                if (this.setState({
                                        autoRefreshProgressBarStyle: {
                                            height: "2px"
                                        }
                                    }), this.state.autoRefreshProgress >= 100) this.doConvert(), this.setState({
                                    autoRefreshProgress: 0
                                });
                                else {
                                    var t = this.state.autoRefreshProgress + .5;
                                    this.setState({
                                        autoRefreshProgress: t
                                    })
                                }
                            else this.setState({
                                autoRefreshProgressBarStyle: {
                                    display: "none"
                                },
                                autoRefreshProgress: 0
                            });
                            var a = setTimeout(function() {
                                e.updateAutoRefreshProgress()
                            }, 200);
                            this.setState({
                                autoRefreshTimer: a
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = {
                                color: "#fff"
                            };
                            return l.a.createElement("section", {
                                style: {
                                    position: "absolute",
                                    top: "0",
                                    right: "0",
                                    bottom: "0",
                                    left: "0",
                                    boxShadow: "0 0 300px 70px rgba(0, 0, 0, 0.2) inset",
                                    backgroundColor: "#2c3e50",
                                    backgroundImage: "url(/images/noise.png), url(/images/sl.png)",
                                    color: "#7f8c8d"
                                }
                            }, l.a.createElement("div", {
                                className: "row valign-wrapper",
                                style: {
                                    height: "100%",
                                    textAlign: "center",
                                    position: "relative"
                                }
                            }, l.a.createElement("div", {
                                className: "col s12"
                            }, l.a.createElement("div", {
                                className: "container"
                            }, l.a.createElement("div", {
                                className: "row"
                            }, l.a.createElement("div", {
                                className: "col s12 m8 l6 offset-m2 offset-l3"
                            }, l.a.createElement("div", {
                                class: "progress blue-grey lighten-5",
                                style: this.state.autoRefreshProgressBarStyle
                            }, l.a.createElement("div", {
                                class: "determinate blue-grey lighten-2",
                                style: {
                                    width: this.state.autoRefreshProgress + "%"
                                }
                            })), l.a.createElement("h4", {
                                style: {
                                    color: "#ecf0f1"
                                }
                            }, this.state.conversion))), l.a.createElement("div", {
                                className: "row"
                            }, l.a.createElement("div", {
                                className: "col s12 m8 l6 offset-m2 offset-l3"
                            }, l.a.createElement("div", {
                                className: "row"
                            }, l.a.createElement("div", {
                                className: "col m2 s5 input-field"
                            }, l.a.createElement("input", {
                                className: "form-control",
                                name: "fromAmount",
                                ref: "ref_fromAmount",
                                type: "number",
                                min: "0",
                                placeholder: "1",
                                defaultValue: "1",
                                autocomplete: "off",
                                style: e,
                                onChange: this.handleInputChange
                            }), l.a.createElement("label", {
                                className: "active"
                            }, "Amount")), l.a.createElement("div", {
                                className: "col m5 s7 input-field"
                            }, l.a.createElement("input", {
                                name: "fromSymbol",
                                ref: "ref_fromSymbol",
                                type: "text",
                                placeholder: "BTC",
                                defaultValue: "BTC",
                                autocomplete: "off",
                                style: e,
                                onChange: this.handleInputChange
                            }), l.a.createElement("label", {
                                className: "active"
                            }, "From Symbol")), l.a.createElement("div", {
                                className: "col m5 s12 input-field"
                            }, l.a.createElement("input", {
                                name: "toSymbol",
                                ref: "ref_toSymbol",
                                type: "text",
                                placeholder: "USD",
                                defaultValue: "USD",
                                autocomplete: "off",
                                style: e,
                                onChange: this.handleInputChange
                            }), l.a.createElement("label", {
                                className: "active"
                            }, "To Symbol"))))), l.a.createElement("div", {
                                className: "row"
                            }, l.a.createElement("div", {
                                className: "col s12"
                            }, l.a.createElement("button", {
                                class: "btn waves-effect",
                                onClick: this.handleConvertButton
                            }, "Convert"), l.a.createElement("p", null, "Auto refresh price"), l.a.createElement("div", {
                                className: "switch"
                            }, l.a.createElement("label", null, "Off", l.a.createElement("input", {
                                name: "autoRefresh",
                                ref: "ref_autoRefreshCheckbox",
                                type: "checkbox",
                                onChange: this.handleInputChange
                            }), l.a.createElement("span", {
                                className: "lever"
                            }), "On")), l.a.createElement("p", null, "Powered by ", l.a.createElement("a", {
                                href: "https://www.cryptocompare.com/",
                                target: "_blank",
                                rel: "noopener noreferrer"
                            }, "CryptoCompare"), ".")))))))
                        }
                    }]), t
                }(l.a.Component),
                O = a(45),
                C = a.n(O),
                T = function(e) {
                    function t(e) {
                        var a;
                        return Object(o.a)(this, t), (a = Object(c.a)(this, Object(u.a)(t).call(this, e))).state = {
                            isGenerating: !1,
                            hasError: !1,
                            P2SH: !1,
                            prefixInput: "",
                            hps: 0,
                            result: ""
                        }, a.ref_prefixInput = l.a.createRef(), a.ref_P2SHCheckbox = l.a.createRef(), a.ref_inputHelperText = l.a.createRef(), a.ref_exampleAddyRest = l.a.createRef(), a.ref_genButton = l.a.createRef(), a.genRandomHex = a.genRandomHex.bind(Object(x.a)(a)), a.handleInputChange = a.handleInputChange.bind(Object(x.a)(a)), a.handleGenerate = a.handleGenerate.bind(Object(x.a)(a)), a.generate = a.generate.bind(Object(x.a)(a)), a.amountHashes = 0, a.hpsTimer = null, a
                    }
                    return Object(m.a)(t, e), Object(h.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            y.a.AutoInit(), this.ref_exampleAddyRest.current.innerText = this.genRandomHex(33)
                        }
                    }, {
                        key: "genRandomHex",
                        value: function(e) {
                            for (var t = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", a = "", n = 0; n < e; n++) a += t[Math.floor(Math.random() * t.length)];
                            return a
                        }
                    }, {
                        key: "handleInputChange",
                        value: function(e) {
                            if ("prefixInput" === e.target.id) {
                                var t = e.target.value;
                                0 === t.length ? (e.target.classList.remove("valid"), e.target.classList.remove("invalid"), this.setState({
                                    prefixInput: t,
                                    hasError: !1
                                })) : new RegExp("^[123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{0,8}$").test(t) ? (e.target.classList.add("valid"), e.target.classList.remove("invalid"), this.setState({
                                    prefixInput: t,
                                    hasError: !1
                                })) : (e.target.classList.remove("valid"), e.target.classList.add("invalid"), this.setState({
                                    hasError: !0
                                })), this.setState({
                                    custom: e.target.value
                                }), this.ref_exampleAddyRest.current.innerText = this.genRandomHex(33 - t.length)
                            } else "P2SH" === e.target.id && (e.target.checked ? this.setState({
                                P2SH: !0
                            }) : this.setState({
                                P2SH: !1
                            }))
                        }
                    }, {
                        key: "handleGenerate",
                        value: function() {
                            var e = this;
                            if (!this.state.hasError)
                                if (this.state.isGenerating) this.setState({
                                    isGenerating: !1,
                                    hps: 0
                                }, function() {
                                    e.ref_genButton.current.classList.remove("grey"), e.ref_genButton.current.classList.add("blue"), e.ref_genButton.current.innerText = "Generate", e.ref_prefixInput.current.disabled = !1, e.ref_P2SHCheckbox.current.disabled = !1, e.amountHashes = 0
                                });
                                else {
                                    if (this.state.isGenerating) return;
                                    this.setState({
                                        isGenerating: !0,
                                        hps: 0,
                                        result: {}
                                    }, function() {
                                        e.ref_genButton.current.classList.remove("blue"), e.ref_genButton.current.classList.add("grey"), e.ref_genButton.current.innerText = "Stop", e.ref_prefixInput.current.disabled = !0, e.ref_P2SHCheckbox.current.disabled = !0, e.amountHashes = 0, e.hpsTimer = setInterval(function() {
                                            e.setState({
                                                hps: e.amountHashes
                                            }, function() {
                                                e.amountHashes = 0
                                            }), e.state.isGenerating || clearInterval(e.hpsTimer)
                                        }, 1e3), e.generate(e.state.prefixInput, e.state.P2SH)
                                    })
                                }
                        }
                    }, {
                        key: "generate",
                        value: function(e, t) {
                            var a = this;
                            if (this.state.isGenerating) {
                                var n = null;
                                if (t) {
                                    var l = C.a.ECPair.makeRandom();
                                    if ((n = {
                                            pub: C.a.payments.p2sh({
                                                redeem: C.a.payments.p2wpkh({
                                                    pubkey: l.publicKey
                                                })
                                            }).address,
                                            priv: l.toWIF()
                                        }).pub.substring(0, e.length + 1) === "3" + e) return this.setState({
                                        isGenerating: !1,
                                        hps: 0,
                                        result: {
                                            pub: n.pub,
                                            priv: n.priv
                                        }
                                    }, function() {
                                        a.ref_genButton.current.classList.remove("grey"), a.ref_genButton.current.classList.add("blue"), a.ref_genButton.current.innerText = "Generate", a.ref_prefixInput.current.disabled = !1, a.ref_P2SHCheckbox.current.disabled = !1, a.amountHashes = 0
                                    }), console.log(n)
                                } else {
                                    var i = C.a.ECPair.makeRandom();
                                    if ((n = {
                                            pub: C.a.payments.p2pkh({
                                                pubkey: i.publicKey
                                            }).address,
                                            priv: i.toWIF()
                                        }).pub.substring(0, e.length + 1) === "1" + e) return this.setState({
                                        isGenerating: !1,
                                        hps: 0,
                                        result: {
                                            pub: n.pub,
                                            priv: n.priv
                                        }
                                    }, function() {
                                        a.ref_genButton.current.classList.remove("grey"), a.ref_genButton.current.classList.add("blue"), a.ref_genButton.current.innerText = "Generate", a.ref_prefixInput.current.disabled = !1, a.ref_P2SHCheckbox.current.disabled = !1, a.amountHashes = 0
                                    }), console.log(n)
                                }
                                this.amountHashes++, window.requestAnimationFrame(function() {
                                    a.generate(e, t)
                                })
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = {
                                display: this.state.hasError ? "hidden" : "inline-block"
                            };
                            return l.a.createElement("section", {
                                style: {
                                    position: "absolute",
                                    top: "0",
                                    right: "0",
                                    bottom: "0",
                                    left: "0",
                                    boxShadow: "0 0 300px 70px rgba(0, 0, 0, 0.2) inset",
                                    backgroundColor: "#2c3e50",
                                    backgroundImage: "url(/images/noise.png), url(/images/sl.png)",
                                    color: "#7f8c8d"
                                }
                            }, l.a.createElement("div", {
                                className: "row valign-wrapper",
                                style: {
                                    height: "100%",
                                    textAlign: "center",
                                    position: "relative"
                                }
                            }, l.a.createElement("div", {
                                className: "col s12"
                            }, l.a.createElement("div", {
                                className: "container"
                            }, l.a.createElement("div", {
                                className: "row"
                            }, l.a.createElement("div", {
                                className: "col s12 m10 offset-m1"
                            }, l.a.createElement("div", {
                                className: "input-field col s9"
                            }, l.a.createElement(f.a, {
                                icon: g.b,
                                className: "material-icons prefix",
                                style: {
                                    fontSize: "20px",
                                    top: "1rem"
                                }
                            }), l.a.createElement("input", {
                                className: "validate",
                                ref: this.ref_prefixInput,
                                id: "prefixInput",
                                type: "text",
                                maxLength: "8",
                                "data-length": "8",
                                style: {
                                    color: "#fff"
                                },
                                onChange: this.handleInputChange
                            }), l.a.createElement("label", {
                                for: "prefixInput"
                            }, "Prefix"), l.a.createElement("span", {
                                className: "helper-text",
                                ref: this.ref_inputHelperText,
                                "data-error": "Alphanumeric characters only and no ambiguity (O,l,0 or I)",
                                "data-success": ""
                            }, " ")), l.a.createElement("div", {
                                className: "input-field col s2"
                            }, l.a.createElement("p", null, l.a.createElement("label", null, l.a.createElement("input", {
                                id: "P2SH",
                                ref: this.ref_P2SHCheckbox,
                                type: "checkbox",
                                onChange: this.handleInputChange
                            }), l.a.createElement("span", null, "SegWit P2SH")))), l.a.createElement("div", {
                                className: "input-field col s12"
                            }, l.a.createElement("h5", null, "Ex. ", l.a.createElement("span", {
                                id: "exampleAddyStart",
                                style: {
                                    color: "#EC9D35"
                                }
                            }, this.state.P2SH ? "3" : "1"), l.a.createElement("span", {
                                style: {
                                    color: "#FFFFFF"
                                }
                            }, this.state.prefixInput), l.a.createElement("span", {
                                ref: this.ref_exampleAddyRest
                            })), l.a.createElement("h6", null, this.state.hps > 0 ? this.state.hps + " Hashes per seconds" : ""), l.a.createElement("h6", null, this.state.result.pub ? "Address: " + this.state.result.pub : ""), l.a.createElement("h6", null, this.state.result.priv ? "WIF: " + this.state.result.priv : "")), l.a.createElement("div", {
                                className: "col s12"
                            }, l.a.createElement("button", {
                                className: "btn waves-effect waves-light blue",
                                ref: this.ref_genButton,
                                style: e,
                                onClick: this.handleGenerate
                            }, "Generate"))))))))
                        }
                    }]), t
                }(l.a.Component),
                P = a(127),
                N = a.n(P),
                R = a(84),
                I = a.n(R),
                j = function(e) {
                    function t(e) {
                        var a;
                        return Object(o.a)(this, t), (a = Object(c.a)(this, Object(u.a)(t).call(this, e))).state = {
                            width: null,
                            height: null,
                            humanPoints: 0,
                            aiPoints: 0,
                            humanY: 0,
                            aiY: 0,
                            ballX: null,
                            ballY: null,
                            ballOriginX: null,
                            ballOriginY: null,
                            ballTargetX: null,
                            ballTargetY: null,
                            ballSpeed: 6,
                            lastBallUpdate: null,
                            aiHistory: [],
                            gameState: "iddle"
                        }, a.getPercent = a.getPercent.bind(Object(x.a)(a)), a.getValue = a.getValue.bind(Object(x.a)(a)), a.onresize = a.onresize.bind(Object(x.a)(a)), a.onmousemove = a.onmousemove.bind(Object(x.a)(a)), a.onclick = a.onclick.bind(Object(x.a)(a)), a.draw = a.draw.bind(Object(x.a)(a)), a.teachAI = a.teachAI.bind(Object(x.a)(a)), a.ai = new N.a.NeuralNetwork, a
                    }
                    return Object(m.a)(t, e), Object(h.a)(t, [{
                        key: "getPercent",
                        value: function(e, t) {
                            return parseFloat(e / t)
                        }
                    }, {
                        key: "getValue",
                        value: function(e, t) {
                            return parseFloat(t * e)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this.setState({
                                width: window.innerWidth,
                                height: window.innerHeight,
                                humanY: window.innerHeight / 2 - 30,
                                aiY: window.innerHeight / 2 - 30,
                                ballX: window.innerWidth / 2 - 5,
                                ballY: window.innerHeight / 2 - 5,
                                ballOriginX: window.innerWidth / 2 - 5,
                                ballOriginY: window.innerHeight / 2 - 5,
                                ballTargetX: null,
                                ballTargetY: null,
                                ballSpeed: 6,
                                lastBallUpdate: (new Date).getTime(),
                                aiHistory: [],
                                gameState: "iddle"
                            }), window.addEventListener("resize", this.onresize), this.draw()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("resize", this.onresize)
                        }
                    }, {
                        key: "onresize",
                        value: function() {
                            var e = this.refs.canvas;
                            e.width = window.innerWidth, e.height = window.innerHeight, this.setState({
                                width: e.width,
                                height: e.height,
                                ballX: e.width * this.state.ballX / this.state.width,
                                ballY: e.height * this.state.ballY / this.state.height,
                                ballOriginX: e.width * this.state.ballOriginX / this.state.width,
                                ballOriginY: e.height * this.state.ballOriginY / this.state.height,
                                ballTargetX: e.width * this.state.ballTargetX / this.state.width,
                                ballTargetY: e.height * this.state.ballTargetY / this.state.height,
                                humanY: Math.max(0, Math.min(this.state.height - 60, e.height * this.state.humanY / this.state.height)),
                                aiY: Math.max(0, Math.min(this.state.height - 60, e.height * this.state.aiY / this.state.height))
                            })
                        }
                    }, {
                        key: "onmousemove",
                        value: function(e) {
                            this.setState({
                                humanY: Math.max(0, Math.min(this.state.height - 60, e.clientY - 30))
                            })
                        }
                    }, {
                        key: "onclick",
                        value: function() {
                            "iddle" === this.state.gameState && this.setState({
                                gameState: "playing",
                                ballOriginX: this.state.ballX,
                                ballOriginY: this.state.ballY,
                                ballTargetX: this.state.humanPoints >= this.state.aiPoints ? this.state.width : 0,
                                ballTargetY: this.state.ballY
                            })
                        }
                    }, {
                        key: "draw",
                        value: function() {
                            var e = this,
                                t = this.refs.canvas;
                            if (t) {
                                var a = t.getContext("2d");
                                a.clearRect(0, 0, this.state.width, this.state.height);
                                ! function() {
                                    a.fillStyle = "white";
                                    var n = e.state.ballX,
                                        l = e.state.ballY;
                                    if (a.fillRect(n, l, 10, 10), "playing" === e.state.gameState && (new Date).getTime() > e.state.lastBallUpdate + 16) {
                                        if (null !== e.state.ballTargetX && e.state.ballX !== e.state.ballTargetX && (n += (e.state.ballTargetX - (e.state.ballTargetX < e.state.width / 2 ? e.state.width : 0)) / (1e3 - 100 * e.state.ballSpeed)), null !== e.state.ballTargetY && e.state.ballY !== e.state.ballTargetY && (l += (e.state.ballOriginY + e.state.ballTargetY - e.state.ballOriginY) / (1e3 - 100 * e.state.ballSpeed)), n <= 15 && l <= e.state.humanY + 60 && l + 10 >= e.state.humanY) {
                                            var i = l + 10 < e.state.humanY + 30,
                                                s = l > e.state.humanY + 30,
                                                r = l < e.state.humanY + 30 && l + 10 > e.state.humanY + 30,
                                                o = 0;
                                            if (i) o = Math.max(-29, l + 10 - (e.state.humanY + 30));
                                            else if (s) o = Math.min(29, l - (e.state.humanY + 30));
                                            else if (r) {
                                                var h = e.state.humanY + 30 - l,
                                                    c = l + 10 - (e.state.humanY + 30);
                                                o = h > c ? -1 * h : c
                                            }
                                            var u = e.state.width,
                                                m = e.state.height * e.getPercent(o, 30);
                                            return e.teachAI(e.state, !0), e.setState(function(e) {
                                                return {
                                                    ballX: Math.max(0, Math.min(e.width - 10, n)),
                                                    ballY: Math.max(0, Math.min(e.height - 10, l)),
                                                    lastBallUpdate: (new Date).getTime(),
                                                    ballTargetX: u,
                                                    ballTargetY: m,
                                                    ballOriginX: n,
                                                    ballOriginY: l,
                                                    ballSpeed: Math.min(9.5, e.ballSpeed += .2)
                                                }
                                            })
                                        }
                                        if (n + 10 >= e.state.width - 15 && l <= e.state.aiY + 60 && l + 10 >= e.state.aiY) {
                                            var f = l + 10 < e.state.aiY + 30,
                                                g = l > e.state.aiY + 30,
                                                d = l < e.state.aiY + 30 && l + 10 > e.state.aiY + 30,
                                                b = 0;
                                            if (f) b = Math.max(-29, l + 10 - (e.state.aiY + 30));
                                            else if (g) b = Math.min(29, l - (e.state.aiY + 30));
                                            else if (d) {
                                                var p = e.state.aiY + 30 - l,
                                                    v = l + 10 - (e.state.aiY + 30);
                                                b = p > v ? -1 * p : v
                                            }
                                            var y = e.state.height * e.getPercent(b, 30);
                                            return e.teachAI(e.state, !1, !0), e.setState(function(e) {
                                                return {
                                                    ballX: Math.max(0, Math.min(e.width - 10, n)),
                                                    ballY: Math.max(0, Math.min(e.height - 10, l)),
                                                    lastBallUpdate: (new Date).getTime(),
                                                    ballTargetX: 0,
                                                    ballTargetY: y,
                                                    ballOriginX: n,
                                                    ballOriginY: l,
                                                    ballSpeed: Math.min(9.5, e.ballSpeed += .2)
                                                }
                                            })
                                        }
                                        if (l <= 0) {
                                            l = 1;
                                            var w = I.a.float(.1 * e.state.height, 1.5 * e.state.height);
                                            return e.setState(function(e) {
                                                return {
                                                    ballX: Math.max(0, Math.min(e.width - 10, n)),
                                                    ballY: Math.max(0, Math.min(e.height - 10, l)),
                                                    lastBallUpdate: (new Date).getTime(),
                                                    ballTargetY: w,
                                                    ballOriginX: n,
                                                    ballOriginY: l
                                                }
                                            })
                                        }
                                        if (l >= e.state.height - 10) {
                                            l = e.state.height - 11;
                                            var S = e.state.height - I.a.float(.1 * e.state.height, 1.5 * e.state.height);
                                            return e.setState(function(e) {
                                                return {
                                                    ballX: Math.max(0, Math.min(e.width - 10, n)),
                                                    ballY: Math.max(0, Math.min(e.height - 10, l)),
                                                    lastBallUpdate: (new Date).getTime(),
                                                    ballTargetY: S,
                                                    ballOriginX: n,
                                                    ballOriginY: l
                                                }
                                            })
                                        }
                                        if ("playing" === e.state.gameState) {
                                            if (n <= 0) return console.log("AI SCORED"), e.setState({
                                                gameState: "iddle",
                                                ballX: t.width / 2 - 5,
                                                ballY: t.height / 2 - 5,
                                                ballTargetX: null,
                                                ballTargetY: null,
                                                ballSpeed: 6,
                                                aiPoints: e.state.aiPoints + 1
                                            });
                                            if (n + 10 >= e.state.width) return console.log("HUMAN SCORED"), e.teachAI(e.state), e.setState({
                                                gameState: "iddle",
                                                ballX: t.width / 2 - 5,
                                                ballY: t.height / 2 - 5,
                                                ballTargetX: null,
                                                ballTargetY: null,
                                                ballSpeed: 6,
                                                humanPoints: e.state.humanPoints + 1
                                            })
                                        }
                                        e.setState(function(e) {
                                            return {
                                                ballX: Math.max(0, Math.min(e.width - 10, n)),
                                                ballY: Math.max(0, Math.min(e.height - 10, l)),
                                                lastBallUpdate: (new Date).getTime()
                                            }
                                        }, function() {
                                            if (e.state.aiHistory.length > 0) {
                                                var t = e.ai.run({
                                                    ballX: e.getPercent(e.state.ballX, e.state.width),
                                                    ballY: e.getPercent(e.state.ballY, e.state.height),
                                                    ballTargetX: e.getPercent(e.state.ballTargetX, e.state.width),
                                                    ballTargetY: e.getPercent(e.state.ballTargetY, e.state.height),
                                                    humanY: e.getPercent(e.state.humanY, e.state.height),
                                                    aiY: e.getPercent(e.state.aiY, e.state.height)
                                                });
                                                e.setState(function(a) {
                                                    return {
                                                        aiY: Math.max(0, Math.min(a.height - 60, e.getValue(parseFloat(t.y), a.height)))
                                                    }
                                                })
                                            }
                                        })
                                    }
                                }(),
                                function() {
                                    a.fillStyle = "white";
                                    var t = null !== e.state.humanY ? e.state.humanY : e.state.height / 2 - 30;
                                    a.fillRect(5, t, 10, 60)
                                }(),
                                function() {
                                    a.fillStyle = "white";
                                    var t = e.state.width - 15,
                                        n = null !== e.state.aiY ? e.state.aiY : e.state.height / 2 - 30;
                                    a.fillRect(t, n, 10, 60)
                                }(),
                                function() {
                                    a.fillStyle = "white";
                                    for (var t = e.state.width / 2 - 1, n = 5; n < e.state.height - 15;) a.fillRect(t, n, 2, 15), n += 30
                                }(), a.font = "25px PressStart2P", a.fillStyle = "white", a.textAlign = "right", a.fillText(e.state.humanPoints, e.state.width / 2 - 30, 50), a.textAlign = "left", a.fillText(e.state.aiPoints, e.state.width / 2 + 30, 50), window.requestAnimationFrame(this.draw)
                            }
                        }
                    }, {
                        key: "teachAI",
                        value: function(e) {
                            var t = this,
                                a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                l = this.state.aiHistory,
                                i = {
                                    input: {
                                        ballX: this.getPercent(e.ballX, e.width),
                                        ballY: this.getPercent(e.ballY, e.height),
                                        ballTargetX: this.getPercent(e.ballTargetX, e.width),
                                        ballTargetY: this.getPercent(e.ballTargetY, e.height)
                                    },
                                    output: {
                                        y: this.getPercent(a ? e.humanY : n ? e.aiY : e.ballY - 25, e.height)
                                    }
                                };
                            a ? i.input.humanY = this.getPercent(e.humanY, e.height) : n && (i.input.aiY = this.getPercent(e.aiY, e.height)), l.push(i), this.setState({
                                aiHistory: l
                            }, function() {
                                t.ai.train(t.state.aiHistory, {
                                    callback: function(e) {
                                        if (parseFloat(e.error) >= .4) return console.error("AI Failed to learn.")
                                    }
                                })
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = {
                                backgroundColor: "#000000",
                                width: "".concat(this.state.width, "px"),
                                height: "".concat(this.state.height, "px"),
                                position: "relative",
                                zIndex: "10"
                            };
                            return l.a.createElement("canvas", {
                                ref: "canvas",
                                width: this.state.width,
                                height: this.state.height,
                                style: e,
                                onMouseMove: this.onmousemove,
                                onClick: this.onclick
                            })
                        }
                    }]), t
                }(l.a.Component);
            Object(i.render)(l.a.createElement(r.a, null, l.a.createElement("div", null, l.a.createElement(p, null), l.a.createElement(function() {
                return l.a.createElement("main", null, l.a.createElement(s.c, null, l.a.createElement(s.a, {
                    exact: !0,
                    path: "/",
                    component: S
                }), l.a.createElement(s.a, {
                    exact: !0,
                    path: "/c",
                    component: k
                }), l.a.createElement(s.a, {
                    exact: !0,
                    path: "/vanitygen",
                    component: T
                }), l.a.createElement(s.a, {
                    exact: !0,
                    path: "/aipong",
                    component: j
                })))
            }, null), l.a.createElement(w, null))), document.querySelector("#app"))
        }
    },
    [
        [128, 1, 2]
    ]
]);
//# sourceMappingURL=main.fae2fbf2.chunk.js.map
