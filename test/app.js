process.env.NODE_ENV = "test";

import { UserModel } from "../models/user.js";

import chai from "chai";
import chaiHttp from "chai-http";

import app from "../index.js";
import md5 from "md5";

const should = chai.should();

chai.use(chaiHttp);

describe("User Login/Register", () => {
  beforeEach((done) => {
    UserModel.deleteMany({}, (err) => {
      done();
    });
  });

  describe("/POST signup", () => {
    it("it should register user", (done) => {
      let user = {
        name: "Satyam",
        email: "ksatyama8@gmail.com",
        password: "test@123",
      };

      chai
        .request(app)
        .post("/api/v1/signup")
        .send(user)
        .end((err, res) => {
          res.body.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("msg").eql("Registered Successfully");
          res.body.should.have.property("data");
          res.body.data.should.have.property("id");
          res.body.data.should.have.property("name");
          res.body.data.should.have.property("email");
          done();
        });
    });

    it("it should return error with same data", (done) => {
      let user = {
        name: "Satyam",
        email: "ksatyama8@gmail.com",
        password: "test@123",
      };
      let userData = new UserModel({ ...user, password: md5(user.password) });
      userData.save((err, data) => {
        chai
          .request(app)
          .post("/api/v1/signup")
          .send(user)
          .end((err, res) => {
            res.body.should.have.status(400);
            res.body.should.be.a("object");
            res.body.should.have
              .property("err_msg")
              .eql("Email already registered.");
            done();
          });
      });
    });
  });

  describe("/GET login", () => {
    it("it should return error (login without register)", (done) => {
      let user = {
        email: "ksatyama8@gmail.com",
        password: "test@123",
      };
      chai
        .request(app)
        .get("/api/v1/login")
        .send(user)
        .end((err, res) => {
          res.body.should.have.status(400);
          res.body.should.be.a("object");
          res.body.should.have
            .property("err_msg")
            .eql("Email address is not registered");
          done();
        });
    });

    it("it should login user", (done) => {
      let user = {
        name: "Satyam",
        email: "ksatyama8@gmail.com",
        password: "test@123",
      };
      let userData = new UserModel({ ...user, password: md5(user.password) });
      userData.save((err, data) => {
        chai
          .request(app)
          .get("/api/v1/login")
          .send({ email: user.email, password: user.password })
          .end((err, res) => {
            res.body.should.have.status(200);
            res.body.should.be.a("object");
            res.body.should.have.property("msg").eql("Login Successfully");
            done();
          });
      });
    });
  });
});
