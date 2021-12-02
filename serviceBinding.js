function initModel() {
	var sUrl = "/ODATA_ORG/V2/(S(x2gguaraamb04zq5cslpfghx))/OData/OData.svc/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}