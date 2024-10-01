// Step 2: Concrete Products for Modern Furniture
var ModernChair = /** @class */ (function () {
    function ModernChair() {
    }
    ModernChair.prototype.sitOn = function () {
        console.log("Sitting on a modern chair.");
    };
    return ModernChair;
}());
var ModernSofa = /** @class */ (function () {
    function ModernSofa() {
    }
    ModernSofa.prototype.layOn = function () {
        console.log("Laying on a modern sofa.");
    };
    return ModernSofa;
}());
// Step 2: Concrete Products for Victorian Furniture
var VictorianChair = /** @class */ (function () {
    function VictorianChair() {
    }
    VictorianChair.prototype.sitOn = function () {
        console.log("Sitting on a Victorian chair.");
    };
    return VictorianChair;
}());
var VictorianSofa = /** @class */ (function () {
    function VictorianSofa() {
    }
    VictorianSofa.prototype.layOn = function () {
        console.log("Laying on a Victorian sofa.");
    };
    return VictorianSofa;
}());
// Step 4: Concrete Factories
var ModernFurnitureFactory = /** @class */ (function () {
    function ModernFurnitureFactory() {
    }
    ModernFurnitureFactory.prototype.createChair = function () {
        return new ModernChair();
    };
    ModernFurnitureFactory.prototype.createSofa = function () {
        return new ModernSofa();
    };
    return ModernFurnitureFactory;
}());
var VictorianFurnitureFactory = /** @class */ (function () {
    function VictorianFurnitureFactory() {
    }
    VictorianFurnitureFactory.prototype.createChair = function () {
        return new VictorianChair();
    };
    VictorianFurnitureFactory.prototype.createSofa = function () {
        return new VictorianSofa();
    };
    return VictorianFurnitureFactory;
}());
// Step 5: Client Code
var FurnitureStore = /** @class */ (function () {
    function FurnitureStore(factory) {
        this.chair = factory.createChair();
        this.sofa = factory.createSofa();
    }
    FurnitureStore.prototype.deliverFurniture = function () {
        this.chair.sitOn();
        this.sofa.layOn();
    };
    return FurnitureStore;
}());
// Step 6: Usage Example
var modernFactory = new ModernFurnitureFactory();
var victorianFactory = new VictorianFurnitureFactory();
// Delivering Modern Furniture
console.log("Delivering Modern Furniture:");
var modernStore = new FurnitureStore(modernFactory);
modernStore.deliverFurniture();
// Delivering Victorian Furniture
console.log("\nDelivering Victorian Furniture:");
var victorianStore = new FurnitureStore(victorianFactory);
victorianStore.deliverFurniture();
