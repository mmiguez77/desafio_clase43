const mongoose = require("mongoose");

class MongoCxn {
  constructor() {
    if (MongoCxn.instancia) {
      return MongoCxn.instancia;
    }

    this.connection = this.createConnection();
    MongoCxn.instancia = this;
  }

  createConnection() {
    const uri =
      "mongodb+srv://proyecto:coder@cluster0.tqtau.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const options = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };
    mongoose.connect(uri, options).then(
      () => {},
      (err) => {
        err;
      }
    );
  }
}

module.exports = MongoCxn;
