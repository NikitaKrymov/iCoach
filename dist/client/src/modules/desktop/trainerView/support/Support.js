"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Test_1 = __importDefault(require("./Test"));
var Support = function (props) {
    return (<div>
            <Test_1.default>

            </Test_1.default>
            <svg style={{ border: '1px solid red', width: '10em', height: '10em', transform: 'rotate(-90deg)' }}>
                <circle style={{ border: '1px solid green', color: 'black', transition: '0.5s' }} r="3em" stroke="black" stroke-width="10px" fill="transparent" cx="5em" cy="5em" strokeDasharray="18.96em 18.96em" strokeDashoffset='16em'>
                    Test
                </circle>
            </svg>
        </div>);
};
exports.default = Support;
