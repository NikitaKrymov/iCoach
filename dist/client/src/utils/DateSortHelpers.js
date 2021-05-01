"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderMonthlySalesRevenue = exports.renderWeekdaySalesRevenue = exports.sortWeekEveryday = exports.sortArrayMonth = exports.sortArrayWeek = exports.sortArrayToday = void 0;
var sortArrayToday = function (array) {
    var currentDate = new Date();
    var priorDate = new Date();
    priorDate.setDate(currentDate.getDate() - 1);
    return array.filter(function (arrayItem) {
        if (arrayItem.date <= currentDate && arrayItem.date >= priorDate) {
            return arrayItem;
        }
    });
};
exports.sortArrayToday = sortArrayToday;
var sortArrayWeek = function (array) {
    var currentDate = new Date();
    var priorDate = new Date();
    priorDate.setDate(currentDate.getDate() - 7);
    return array.filter(function (arrayItem) {
        if (arrayItem.date <= currentDate && arrayItem.date >= priorDate) {
            return arrayItem;
        }
    });
};
exports.sortArrayWeek = sortArrayWeek;
var sortArrayMonth = function (array) {
    var currentDate = new Date();
    var priorDate = new Date();
    priorDate.setDate(currentDate.getMonth() - 1);
    return array.filter(function (arrayItem) {
        if (arrayItem.date <= currentDate && arrayItem.date >= priorDate) {
            return arrayItem;
        }
    });
};
exports.sortArrayMonth = sortArrayMonth;
var sortWeekEveryday = function (course, sales) {
    var currentDate = new Date();
    var priorDate = new Date();
    var weekValues = [];
    console.log(sales);
    for (var i = 0; i <= 6; i++) {
    }
    return weekValues;
};
exports.sortWeekEveryday = sortWeekEveryday;
var renderWeekdaySalesRevenue = function (sales) {
    var currentDate = new Date();
    var priorDate = new Date();
    var weekRevenue = [0];
    var _loop_1 = function (i) {
        priorDate.setDate(currentDate.getDate() - i);
        var dayRevenue = weekRevenue[weekRevenue.length - 1];
        sales.filter(function (sale) {
            if (sale.date.getDate() === priorDate.getDate()) {
                dayRevenue += sale.price;
            }
            else {
                dayRevenue += 0;
            }
        });
        weekRevenue.push(dayRevenue);
    };
    for (var i = 6; i >= 0; i--) {
        _loop_1(i);
    }
    return weekRevenue;
};
exports.renderWeekdaySalesRevenue = renderWeekdaySalesRevenue;
var renderMonthlySalesRevenue = function (sales) {
    var currentDate = new Date();
    var priorDate = new Date();
    var yearRevenue = [0];
    var _loop_2 = function (i) {
        priorDate.setMonth(currentDate.getMonth() - i);
        var monthRevenue = yearRevenue[yearRevenue.length - 1];
        sales.filter(function (sale) {
            if (sale.date.getMonth() === priorDate.getMonth()) {
                monthRevenue += sale.price;
            }
            else {
                monthRevenue += 0;
            }
        });
        yearRevenue.push(monthRevenue);
    };
    for (var i = 9; i >= 0; i--) {
        _loop_2(i);
    }
    console.log(yearRevenue);
    return yearRevenue;
};
exports.renderMonthlySalesRevenue = renderMonthlySalesRevenue;
