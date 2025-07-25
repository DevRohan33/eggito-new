"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const webhook_1 = __importDefault(require("./routes/webhook"));
const app = (0, express_1.default)();
const PORT = 3001;
// Middleware to parse raw body (important for Razorpay)
app.use("/webhook", body_parser_1.default.raw({ type: "*/*" }) // Capture raw buffer
);
// Enable CORS if needed
app.use((0, cors_1.default)());
// Register routes
app.use("/webhook", webhook_1.default);
app.get("/", (_, res) => res.send("Backend is running..."));
app.listen(PORT, () => {
    console.log(`🚀 Server started at http://localhost:${PORT}`);
});
