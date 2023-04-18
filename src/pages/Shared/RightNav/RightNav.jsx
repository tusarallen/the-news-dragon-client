import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div className="mt-4">
      <h4>Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub /> Login with Github
      </Button>
      <div>
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebookF></FaFacebookF>
            facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter>
            twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram>
            instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone />
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
