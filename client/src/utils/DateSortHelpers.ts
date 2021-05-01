import { abort } from "process";
import { Course } from "../../../interfaces/courseInterfaces/Course";
import { Sale } from "../../../interfaces/Interfaces";

export const sortArrayToday = (array: any[]) => {
    const currentDate = new Date();
    const priorDate = new Date();
    priorDate.setDate(currentDate.getDate()-1);

    return array.filter((arrayItem) => {
        if (arrayItem.date <= currentDate && arrayItem.date >= priorDate) {
            return arrayItem;
        }
    });

}

export const sortArrayWeek = (array: any[]) => {
    const currentDate = new Date();
    const priorDate = new Date();
    priorDate.setDate(currentDate.getDate()-7);

    return array.filter((arrayItem) => {
        if (arrayItem.date <= currentDate && arrayItem.date >= priorDate) {
            return arrayItem;
        }
    });
}

export const sortArrayMonth = (array: any[]) => {
    const currentDate = new Date();
    const priorDate = new Date();
    priorDate.setDate(currentDate.getMonth()-1);

    return array.filter((arrayItem) => {
        if (arrayItem.date <= currentDate && arrayItem.date >= priorDate) {
            return arrayItem;
        }
    });
}

export const sortWeekEveryday = (course: Course, sales: Sale[]) => {
    const currentDate = new Date();
    const priorDate = new Date();
    let weekValues: any[] = [];
    console.log(sales);
    for (let i = 0; i <= 6; i++) {

    }
    return weekValues;
}

export const renderWeekdaySalesRevenue = (sales: Sale[]) => {
    const currentDate = new Date();
    const priorDate = new Date();
    let weekRevenue: number[] = [0];
    for (let i = 6; i >= 0; i--) {
        priorDate.setDate(currentDate.getDate()-i);
        let dayRevenue = weekRevenue[weekRevenue.length-1];
        sales.filter((sale) => {
            if (sale.date.getDate() === priorDate.getDate()) {
                dayRevenue += sale.price;
            } else {
                dayRevenue += 0;
            }
        });
        weekRevenue.push(dayRevenue);
    }
    return weekRevenue;
}

export const renderMonthlySalesRevenue = (sales: Sale[]) => {
    const currentDate = new Date();
    const priorDate = new Date();
    let yearRevenue: number[] = [0];
    for (let i = 9; i >= 0; i--) {
        priorDate.setMonth(currentDate.getMonth()-i);
        let monthRevenue = yearRevenue[yearRevenue.length-1];
        sales.filter((sale) => {
            if (sale.date.getMonth() === priorDate.getMonth()) {
                monthRevenue += sale.price;
            } else {
                monthRevenue += 0;
            }
        });
        yearRevenue.push(monthRevenue);
    }
    console.log(yearRevenue);
    return yearRevenue;
}