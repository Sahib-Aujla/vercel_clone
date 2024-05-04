"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFilePaths = exports.genreateID = void 0;
const fs_1 = __importDefault(require("fs"));
const path = __importStar(require("path"));
const MAX_LENGTH = 6;
function genreateID() {
    const subset = "1234567890abcdefghijklmnopqrstuvwxyz";
    let ans = "";
    for (let i = 0; i < MAX_LENGTH; i++) {
        ans += subset[Math.floor(Math.random() * subset.length)];
    }
    return ans;
}
exports.genreateID = genreateID;
function getAllFilePaths(root) {
    let resp = [];
    const allfiles = fs_1.default.readdirSync(root);
    allfiles.forEach((file) => {
        const fullFilePath = path.join(root, file);
        if (fs_1.default.statSync(fullFilePath).isDirectory()) {
            resp = resp.concat(getAllFilePaths(fullFilePath));
        }
        else {
            resp.push(fullFilePath);
        }
    });
    return resp;
}
exports.getAllFilePaths = getAllFilePaths;
