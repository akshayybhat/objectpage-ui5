sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessagePopover",
    "sap/m/MessageItem",
    "sap/ui/model/json/JSONModel"
], (Controller, MessagePopover, MessageItem, JSONModel) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit() {
            let oData = {
                ASOPNumber: 300000043,
                ASOPDate: "05/21/2024",
                DocumentType: "ZOR Test",
                OrderAmount: "123,322.32 USD",
                Currency: "INR",
                BillTo: "400151",
                ShipTo: "400151",
                SoldTo: "400151 Marvel Foods",
                SalesOrganization: "WL",
                DistributionChannel: "Lorem Ipsum",
                Division: "Lorem Ipsum",
                Incoterms: "CIF Hyderabad",
                PaymentTerms: "90 days",
                DeliveryDate: "06/06/2025",
                Status: "Incomplete",
                CustomerPONumber: "-",
                AdditionalNotes: "N/A",
                SalesOrderItems: [
                    {
                        saleDocType: "ZOR",
                        item: "ZOR test",
                        material: "Test123",
                        materialDesc: "Test123",
                        qty: "1,200",
                        uom: "Lorem",
                        plant: "AB1717",
                        shippingPoint: "Lorem ipsum",
                        unitPrice: "90",
                        billingDate: "05/16/2024",
                        requestedDeliveryDate: "05/16/2024",
                        confirmedQty: "120",
                        salesUnit: "63"
                    },
                    {
                        saleDocType: "ZOR",
                        item: "ZOR test",
                        material: "Test123",
                        materialDesc: "Test123",
                        qty: "1,200",
                        uom: "Lorem",
                        plant: "AB1717",
                        shippingPoint: "Lorem ipsum",
                        unitPrice: "90",
                        billingDate: "05/16/2024",
                        requestedDeliveryDate: "05/16/2024",
                        confirmedQty: "120",
                        salesUnit: "63"
                    }
                ],
                Messages: [
                    { type: "Error", title: "Order Issue", description: "Missing mandatory field", groupName: "Sales Order" },
                    { type: "Warning", title: "Delivery Delay", description: "Possible shipping delay", groupName: "Logistics" },
                    { type: "Success", title: "Order Processed", description: "Order is successfully processed", groupName: "Sales Order" }
                ],
                SystemMessages: [
                    { saleDocType: "ZOR", status: "Pending", message: "Missing mandatory field" },
                    { saleDocType: "ZOR", status: "Complete", message: "Order processed successfully" }
                ],
                BusinessValidationMessages: [
                    { saleDocType: "ZOR", status: "Error", message: "Invalid data" },
                    { saleDocType: "ZOR", status: "Warning", message: "Data mismatch" }
                ]
            };

            let oModel = new JSONModel(oData);
            this.getView().setModel(oModel);



        },

        onPdf: function () {
            console.log("PDF pressed");
        }
    });
});
