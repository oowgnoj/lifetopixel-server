"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterPeriod = void 0;
exports.filterPeriod = (data, term) => {
    const target = new Date();
    const range = { today: 1, week: 7, month: 30, year: 365 };
    if (term in range) {
        target.setDate(target.getDate() - range[term]);
        return data.filter((element) => element.createdAt > target);
    }
    else {
        throw new Error("기간을 확인해주세요");
    }
};
exports.default = {};
//# sourceMappingURL=helper.js.map