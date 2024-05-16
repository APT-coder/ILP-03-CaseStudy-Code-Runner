"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b;
(_a = document
    .getElementById("sign-up-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d, _e;
    event.preventDefault();
    const username = (_c = document.getElementById("sign-up-username")) === null || _c === void 0 ? void 0 : _c.value;
    const email = (_d = document.getElementById("sign-up-email")) === null || _d === void 0 ? void 0 : _d.value;
    const password = (_e = document.getElementById("sign-up-password")) === null || _e === void 0 ? void 0 : _e.value;
    const initialScore = 0;
    if (!username || !password || !email) {
        alert("Username, email, and password are required");
        return;
    }
    try {
        const response = yield fetch(`http://localhost:3000/api/users/${username}/${email}/${password}/${initialScore}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            const errorMessage = yield response.text();
            throw new Error(errorMessage);
        }
        const data = yield response.json();
        alert(`User added\n${username} registered successfully`);
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    }
    catch (error) {
        alert("Error creating user: " + error.message);
    }
}));
(_b = document
    .getElementById("login-form")) === null || _b === void 0 ? void 0 : _b.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    var _f, _g;
    event.preventDefault();
    const username = (_f = document.getElementById("login-username")) === null || _f === void 0 ? void 0 : _f.value;
    const password = (_g = document.getElementById("login-password")) === null || _g === void 0 ? void 0 : _g.value;
    const response = yield fetch(`http://localhost:3000/api/users/${username}/${password}`, {
        method: "GET",
    });
    const data = yield response.json();
    if (data.user_name) {
        alert(`Welcome\n${username}`);
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    }
    else {
        alert(data.error);
    }
}));
