"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Day = void 0;
const typeorm_1 = require("typeorm");
const User_1 = __importDefault(require("./User"));
let Day = (() => {
    let Day = class Day {
    };
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Day.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Day.prototype, "goodThing", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Day.prototype, "badThing", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Day.prototype, "goalTomorrow", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Day.prototype, "mainActivity", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Day.prototype, "score", void 0);
    __decorate([
        typeorm_1.ManyToOne(type => User_1.default, user => user.days),
        typeorm_1.JoinColumn(),
        __metadata("design:type", User_1.default)
    ], Day.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column({ type: 'timestamp' }),
        __metadata("design:type", Date)
    ], Day.prototype, "registeredAt", void 0);
    Day = __decorate([
        typeorm_1.Entity()
    ], Day);
    return Day;
})();
exports.Day = Day;
exports.default = Day;
//# sourceMappingURL=Day.js.map