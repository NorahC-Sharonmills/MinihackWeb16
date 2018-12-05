const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ScoreSchema = new schema({
    Name: {
        Player1: {type: String, default: "Player1"},
        Player2: {type: String, default: "Player2"},
        Player3: {type: String, default: "Player3"},
        Player4: {type: String, default: "Player4"},
    },
    // players: [
    //     {type: String}
    // ],
    scores: [[
        {type: Number, default: 0}
    ]]
    // Content: {type: String, require: true, unique: true},
    //require - không được là ""
    //unique - không được trùng ""
}, {
    timestamps: true, //created_at update_at - thông tin thời gian ngày tạo và ngày cập nhập
    // _id: true, //false không tạo ra id mặc định mongo
});

module.exports = mongoose.model("QuestionModel", ScoreSchema);