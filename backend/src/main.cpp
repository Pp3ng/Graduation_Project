#include "crow.h"
#include <unordered_map>
#include <string>
#include <iostream>
#include <crypt.h> //use libcrypt to hash passwords
#include <nlohmann/json.hpp>

using json = nlohmann::json;

std::unordered_map<std::string, std::string> users; // In-memory user storage

std::string hashPassword(const std::string &password)
{
    struct crypt_data data;
    data.initialized = 0;
    const char *salt = "$6$random_salt"; // $6$ is the id for SHA-512 hashing
    char *hashed = crypt_r(password.c_str(), salt, &data);
    return std::string(hashed);
}

bool verifyPassword(const std::string &password, const std::string &hashed)
{
    struct crypt_data data;
    data.initialized = 0;
    char *check = crypt_r(password.c_str(), hashed.c_str(), &data);
    return hashed == std::string(check);
}

int main()
{
    crow::SimpleApp app;

    CROW_ROUTE(app, "/api/register").methods("POST"_method)([](const crow::request &req)
                                                            {
        auto body = json::parse(req.body);
        std::string username = body["username"];
        std::string password = body["password"];

        if (users.find(username) != users.end()) {
            return crow::response(400, "User already exists");
        }

        std::string hashedPassword = hashPassword(password);
        users[username] = hashedPassword;

        return crow::response(201, "User registered successfully"); });

    CROW_ROUTE(app, "/api/login").methods("POST"_method)([](const crow::request &req)
                                                         {
        auto body = json::parse(req.body);
        std::string username = body["username"];
        std::string password = body["password"];

        auto it = users.find(username);
        if (it == users.end()) {
            return crow::response(404, "User not found");
        }

        if (!verifyPassword(password, it->second)) {
            return crow::response(401, "Invalid password");
        }

        json response;
        response["auth"] = true;
        response["message"] = "Login successful";

        return crow::response(200, response.dump()); });

    app.port(18080).multithreaded().run();
}