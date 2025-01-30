sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project1.controller.View1", {
        onInit() {

            // Mocked JSON data - You can replace this with an OData service call
            let oData = {
                ASOPNumber: 300000043,
                DocumentType: "ZOR Test",
                OrderAmount: "123,322.32",
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
                AdditionalNotes: "N/A"
            };

            let oModel = new sap.ui.model.json.JSONModel(oData);
            this.getView().setModel(oModel);
        }
    });
});