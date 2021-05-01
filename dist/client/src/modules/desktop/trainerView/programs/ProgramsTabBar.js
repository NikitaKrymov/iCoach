"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CreateNewProgramButton_1 = __importDefault(require("../../../../elements/desktop/programsElements/CreateNewProgramButton"));
var ProgramsOptions_1 = __importDefault(require("../../../../elements/desktop/programsElements/ProgramsOptions"));
var ProgramsTabBar = function () {
    return (<ProgramsOptions_1.default>
            <CreateNewProgramButton_1.default>
                + Create New Course
            </CreateNewProgramButton_1.default>
        </ProgramsOptions_1.default>);
};
exports.default = ProgramsTabBar;
