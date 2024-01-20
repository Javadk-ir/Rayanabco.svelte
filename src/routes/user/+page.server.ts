import type { PageServerLoad } from "./$types"
import { orderinfoModel } from '$lib/models/orderinfoModel'
import { customerModel } from '$lib/models/customerModel'
import { productModel } from '$lib/models/productModel'
import { orderModel } from '$lib/models/orderModel'




export const load: PageServerLoad = async function (event): Promise<any> {
    //defining client information
    const client: Object | any = event.locals.client

    //get all data we need for analytics in homepage
    const orderinfos: any[] = await orderinfoModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
    if(client.class == 'A'){
    const orders: any[] = await orderModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
    const customers: any[] = await customerModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
    const shops: any[] = await productModel.aggregate([{ $sort: { createdAt: -1 } }]).exec();
    
    // -- Variables --
    //define Total Customes
    let mazandaranCity: number = 0, 
    golestanCity: number = 0, 
    tehranCity: number = 0, 
    guilanCity: number = 0, 
    otherCity: number = 0,
     allCity: number = orders.length

    //define values for seeing how many successful sells we  have
    let mazandaranCitySells: number = 0,
     golestanCitySells: number = 0,
     tehranCitySells: number = 0,
     guilanCitySells: number = 0,
     otherCitySells: number = 0,
     allCitySells: number = orderinfos.length

    //define some Arrays to pass through client Side
    let mazandaranCityArray: any[] = [], 
    golestanCityArray: any[] = [], 
    tehranCityArray: any[] = [], 
    guilanCityArray: any[] = [], 
    otherCityArray: any[] = [];

    // define value for Active Customers
    let totalNumberOfCustomers: number = 0
    let totalNameOfCustomers: string[] = []

    // define value for Total Sales Amount
    let totalSeyedZadehSalesAmout: number = 0,
    totalHamidiSalesAmout: number = 0,
    totalSalesAmout: number = 0;

    // define value for Total Sales Amount
    let microSDVariety: number = 0,
    ssdVariety: number = 0,
    flashDriveVariety: number = 0
    // -- Variables --


    // -- FUNCTIONS --
    //see String Countains in Array or not
    function ArrayContains(needle: string, arrhaystack: string[]) {
        return (arrhaystack.indexOf(needle) > -1);
    }

    //get Percentage of 2 Number
    function Percentage(partialValue: number, TotalValue: number): number {
        return Math.round((100 * partialValue) / TotalValue);
    }
    //-- FUNCTIONS --



    //count City's to see how many Customer we have
    for (var val of orders) {
        if (val.city == "مازندران" || val.city == "مازندران " || val.city == " مازندران") {
            mazandaranCity++
        } else if (val.city == "گلستان" || val.city == "گلستان " || val.city == " گلستان") {
            golestanCity++
        } else if (val.city == "تهران" || val.city == "تهران " || val.city == " تهران") {
            tehranCity++
        } else if (val.city == "گیلان" || val.city == "گیلان " || val.city == " گیلان") {
            guilanCity++
        } else {
            otherCity++
        }
    }

    for (var val of orderinfos) {

        // -- count Customers to see how many Active Customer we have
        if (ArrayContains(val.namecompany, totalNameOfCustomers) == false) {
            totalNameOfCustomers.push(val.namecompany)
        } else {
            totalNumberOfCustomers++
        }

        //count City's to see how many sales we have
        if (val.city == "مازندران" || val.city == "مازندران " || val.city == " مازندران") {
            mazandaranCitySells++
        } else if (val.city == "گلستان" || val.city == "گلستان " || val.city == " گلستان") {
            golestanCitySells++
        } else if (val.city == "تهران" || val.city == "تهران " || val.city == " تهران") {
            tehranCitySells++
        } else if (val.city == "گیلان" || val.city == "گیلان " || val.city == " گیلان") {
            guilanCitySells++
        } else {
            otherCitySells++
        }

        // -- count Total Amout of sales
        if(val.price != undefined && val.takhfif != undefined && val.rejectby == undefined){
            if(val.takhfif.length > 3){
                if(val.submittedby == 'سید صنم سیدزاده'){
                    totalSeyedZadehSalesAmout++
                }else if (val.submittedby == 'ارام حمیدی'){
                    totalHamidiSalesAmout++
                }
                totalSalesAmout = parseInt(val.price) - parseInt(val.takhfif) + totalSalesAmout
            }else {
                if(val.submittedby == 'سید صنم سیدزاده'){
                    totalSeyedZadehSalesAmout++
                }else if (val.submittedby == 'ارام حمیدی'){
                    totalHamidiSalesAmout++
                }
                totalSalesAmout = parseInt(val.price) - (parseInt(val.price) * parseInt(val.takhfif) / 100) + totalSalesAmout
                
            }
        }
    }


    for (var val of shops) {
        if(val.category == "SSD") {
            ssdVariety++
        }
        if(val.category == "Micro SD") {
            microSDVariety++
        }
        if(val.category == "Flash Drive") {
            flashDriveVariety++
        }
    }


    //push All Collected Information About Customers into array for better visualization
    mazandaranCityArray.push(mazandaranCity, Percentage(mazandaranCity, allCity), mazandaranCitySells, Percentage(mazandaranCitySells, allCitySells))
    golestanCityArray.push(golestanCity, Percentage(golestanCity, allCity), golestanCitySells, Percentage(golestanCitySells, allCitySells))
    tehranCityArray.push(tehranCity, Percentage(tehranCity, allCity), tehranCitySells, Percentage(tehranCitySells, allCitySells))
    guilanCityArray.push(guilanCity, Percentage(guilanCity, allCity), guilanCitySells, Percentage(guilanCitySells, allCitySells))
    otherCityArray.push(otherCity, Percentage(otherCity, allCity), otherCitySells, Percentage(otherCitySells, allCitySells))
    return {
        client: structuredClone(client),
        mazandaranCity: mazandaranCityArray,
        golestanCity: golestanCityArray,
        tehranCity: tehranCityArray,
        guilanCity: guilanCityArray,
        otherCity: otherCityArray,
        allCity: allCity,
        allCitySells: allCitySells,
        totalSuccesSells: orderinfos.filter(({ rejectby }) => rejectby == undefined).length,
        totalCustomers: customers.length,
        totalNumberOfCustomers: totalNumberOfCustomers,
        totalSalesAmout: totalSalesAmout,
        microSDVariety:microSDVariety,
        ssdVariety:ssdVariety,
        flashDriveVariety:flashDriveVariety,
        totalHamidiSalesAmout:totalHamidiSalesAmout,
        totalSeyedZadehSalesAmout:totalSeyedZadehSalesAmout,
        orderinfo:structuredClone(orderinfos)
    }
}else{
    return {
        client: structuredClone(client),
        orderinfo:structuredClone(orderinfos)
    }
}

}
