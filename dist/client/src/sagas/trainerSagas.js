"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTrainerSales = exports.fetchTrainerCourses = exports.fetchTrainerClients = exports.fetchInitialTrainerData = void 0;
var effects_1 = require("redux-saga/effects");
var trainerActions_1 = require("../actions/trainerActions");
function fetchInitialTrainerData(action) {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, console.log('Fetching trainer data')];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.fetchInitialTrainerData = fetchInitialTrainerData;
function fetchTrainerClients(action) {
    var clients;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, console.log('fetching trainer users by trainer ID', action.payload)];
            case 1:
                _a.sent();
                clients = [];
                return [4 /*yield*/, effects_1.delay(2000, [
                        {
                            id: 'Client ID 1',
                            firstName: 'Client First Name',
                            lastName: 'Client Last Name',
                            contacts: {
                                phone: 87498194,
                                email: 'client@gmail.com',
                                address: {
                                    country: "US",
                                    state: "TX",
                                    city: 'Austin',
                                    street: "Wells Branch",
                                    zipCode: 87828
                                }
                            },
                            activeCourses: [
                                {
                                    id: "Client's course ID",
                                    title: "Client's course title",
                                    description: "Client's course description",
                                    imageURL: "ImageURL",
                                    contentVisibility: 1,
                                    accessToContent: 1,
                                    programStart: 1,
                                    price: 50,
                                    numberOfPurchases: 1,
                                    totalUsers: 10,
                                    lessons: [
                                        {
                                            id: "Client's course lesson ID",
                                            title: "Client's course lesson title",
                                            description: "Client's course lesson description",
                                            index: 1,
                                            isDraft: false,
                                            imageURL: "ImageURL",
                                            blocks: [
                                                {
                                                    id: "Client's course lesson block ID",
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            trainer: 'Trainer ID',
                            purchases: [
                                {
                                    id: "CLient's purchase ID",
                                    title: "Client's purchase title",
                                    courseId: "Client's pucrhase course ID",
                                    date: new Date(),
                                    price: 50,
                                    clientId: "Client's ID",
                                    trainerId: "Trainer's ID"
                                }
                            ],
                            imageURL: "ImageURL"
                        }
                    ])];
            case 2:
                clients = _a.sent();
                return [4 /*yield*/, effects_1.put(trainerActions_1.fetchTrainerClientsSuccess(clients))];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.fetchTrainerClients = fetchTrainerClients;
function fetchTrainerCourses(action) {
    var courses;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, console.log('fetching all trainer courses by Trainer ID', action.payload)];
            case 1:
                _a.sent();
                courses = [];
                return [4 /*yield*/, effects_1.delay(1500, [
                        {
                            id: "course1",
                            title: "Course title 1",
                            description: "Course description 1",
                            imageURL: "ImageURL",
                            contentVisibility: 1,
                            accessToContent: 1,
                            programStart: 1,
                            price: 50,
                            numberOfPurchases: 1,
                            totalUsers: 10,
                            lessons: [
                                {
                                    id: "Client's course lesson ID 1",
                                    title: "Client's course lesson title 1",
                                    description: "Client's course lesson description 1",
                                    index: 1,
                                    isDraft: false,
                                    imageURL: "ImageURL",
                                    blocks: [
                                        {
                                            id: "Client's course lesson block ID",
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            id: "course2",
                            title: "Course title 2",
                            description: "Course description 3",
                            imageURL: "ImageURL",
                            contentVisibility: 1,
                            accessToContent: 1,
                            programStart: 1,
                            price: 50,
                            numberOfPurchases: 1,
                            totalUsers: 10,
                            lessons: [
                                {
                                    id: "Client's course lesson ID 2",
                                    title: "Client's course lesson title 2",
                                    description: "Client's course lesson description 2",
                                    index: 1,
                                    isDraft: false,
                                    imageURL: "ImageURL",
                                    blocks: [
                                        {
                                            id: "Client's course lesson block ID",
                                        }
                                    ]
                                }
                            ]
                        }
                    ])];
            case 2:
                courses = _a.sent();
                return [4 /*yield*/, effects_1.put(trainerActions_1.fetchTrainerCoursesSuccess(courses))];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.fetchTrainerCourses = fetchTrainerCourses;
function fetchTrainerSales(action) {
    var sales;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, console.log('fetching all trainer sales by trainer ID', action.payload)];
            case 1:
                _a.sent();
                sales = [];
                return [4 /*yield*/, effects_1.delay(2000, [
                        {
                            id: "Trainer's sale ID 1",
                            title: "Trainer's sale title 1",
                            courseId: "course1",
                            date: new Date(2021, 2, 29),
                            price: 50,
                            clientId: "Client's ID",
                            trainerId: "Trainer's ID"
                        },
                        {
                            id: "Trainer's sale ID 2",
                            title: "Trainer's sale title 2",
                            courseId: "course2",
                            date: new Date(2021, 2, 25),
                            price: 60,
                            clientId: "Client's ID",
                            trainerId: "Trainer's ID"
                        },
                        {
                            id: "Trainer's sale ID 3",
                            title: "Trainer's sale title 3",
                            courseId: "course1",
                            date: new Date(2021, 2, 20),
                            price: 30,
                            clientId: "Client's ID",
                            trainerId: "Trainer's ID"
                        }
                    ])];
            case 2:
                sales = _a.sent();
                return [4 /*yield*/, effects_1.put(trainerActions_1.fetchTrainerSalesSuccess(sales))];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.fetchTrainerSales = fetchTrainerSales;
