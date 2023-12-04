module.exports = class {
  id = null;
  name = null;
  avatar = null;
  restID = null;
  dish = null;
  rating = null;
  date = null;
  body = null;
  
    constructor(data) {
      this.id = data.note_id;
      this.userID = data.note_userID;
      this.avatar = data.note_avatar;
      this.restID = data.note_restID;
      this.dish = data.note_dish;
      this.rating = data.note_rating;
      this.date = data.note_date;
      this.body = data.note_body;
    }

    toJSON() {
        return {
          id: this.id,
          userID : this.userID,
          avatar : this.avatar,
          restID : this.restID,
          dish : this.dish,
          rating: this.rating,
          date : this.date,
          body : this.body
        }
      }
    }