"use strict"


const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    
};

const users = {
    id: ["master-id", "test-id", "blakelee"],
    password: ["Master", "Test", "BlakeLee"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            password = req.body.password;

            if (users.id.includes(id)){
                const idx = users.id.indexOf(id);
                if (users.password[idx] === password){
                    return res.json({
                        success: true,
                    });
                }
            }

            return res.json({
                success: false,
                msg: "로그인에 실패하셨습니다.",
            });
    },
};

module.exports = {
    output,
    process,
}