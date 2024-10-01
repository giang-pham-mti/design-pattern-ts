var LinghtingPort = /** @class */ (function () {
    function LinghtingPort() {
    }
    LinghtingPort.prototype.connect = function () {
        console.log("Connected the lightning port");
    };
    return LinghtingPort;
}());
var PortAdapter = /** @class */ (function () {
    function PortAdapter(linghtingPort) {
        this.linghtingPort = linghtingPort;
    }
    PortAdapter.prototype.connect = function () {
        console.log("Adapter converts lightning port to Type-C port");
        this.linghtingPort.connect();
    };
    return PortAdapter;
}());
var linghtingPort = new LinghtingPort();
var portAdapter = new PortAdapter(linghtingPort);
portAdapter.connect();
