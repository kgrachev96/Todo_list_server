"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CommercialSettings_1 = require("../entity/CommercialSettings");
function initCommercialSettings() {
    return __awaiter(this, void 0, void 0, function* () {
        const commercialSettings = yield CommercialSettings_1.default.findOne();
        if (!commercialSettings) {
            yield initSettings();
        }
    });
}
exports.initCommercialSettings = initCommercialSettings;
function initSettings() {
    return __awaiter(this, void 0, void 0, function* () {
        const settings = new CommercialSettings_1.default();
        settings.title = "Ваша первая задача на сегодня...";
        settings.completed = true;
        yield settings.save();
    });
}
//# sourceMappingURL=commercialSettings.js.map