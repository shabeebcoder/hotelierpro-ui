import React from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { VscStarFull } from "react-icons/vsc";
import {
  Button,
  DatePicker,
  Dropdown,
  Form,
  Input,
  Menu,
  //   Select,
  Space,
} from "antd";
import { Select, Switch } from "@mantine/core";
import "./styles.css";
import { TextInput } from "@mantine/core";
import { DownOutlined } from "@ant-design/icons";

function PreBookingDetail(props: any) {
  const {
    Roomname,
    Leftroom,
    Rating,
    Review,
    Guest,
    onCheckinChange,
    onCheckoutChange,
    onSelectAdult,
    onSelectKids,
    onSwitchChange,
  } = props;
  const menu = (
    <Menu>
      <Menu.Item key="1">1</Menu.Item>
      <Menu.Item key="2">2</Menu.Item>
      <Menu.Item key="3">3</Menu.Item>
    </Menu>
  );
  return (
    <div className="preBookingContainer">
      <div className="maincontainer">
        <img
          src="https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg"
          alt="hotel-img"
        ></img>
        <div className="info-container">
          <div className="room-name">
            <div className="room-title-container">
              {/* <div className="room-title"> */}
              <span
                className="room-title"
                //   title={roomName.length > 15 ? roomName : null}
              >
                {Roomname}
              </span>
              {/* </div> */}
            </div>
            <div className="room-left">
              <AiOutlineExclamationCircle
                style={{ width: "12px", height: "12px" }}
              />
              <span className="number">{Leftroom} Left</span>
            </div>
          </div>
          <div className="room-review">
            <VscStarFull className="icon-star" />
            <span className="rating">{Rating}</span>
            <span className="divider">|</span>
            <span className="review">{Review} reviews</span>
          </div>
          <span style={{ fontSize: "12px", color: "#595959" }}>Guest</span>
          <span
            style={{ fontSize: "12px", color: "#595959", marginLeft: "12px" }}
          >
            {Guest}
          </span>
        </div>
      </div>
      <div className="line">
        <hr />
      </div>

      <span
        style={{ fontSize: "14px", color: "#595959", marginBottom: "10px" }}
      >
        Enter Your Details
      </span>
      <div className="datepicker">
        <DatePicker
          placeholder="Check in"
          onChange={onCheckinChange}
          style={{
            width: "200px",
            height: "36px",
            fontSize: "14px",
            color: "#474747",
            fontFamily: "Inter",
            fontWeight: "500",
          }}
        />
        <DatePicker
          placeholder="Check out"
          onChange={onCheckoutChange}
          style={{
            width: "200px",
            height: "36px",
            fontSize: "14px",
            color: "#474747",
            fontFamily: "Inter",
            fontWeight: "500",
            marginLeft: "70px",
          }}
        />
      </div>
      <div className="formContainer">
        <Form className="form" name="horizontal_login" layout="inline">
          <Form.Item
            style={{ width: "200px" }}
            className="form-item"
            name="firstName"
            rules={[{ required: true, message: "First Name required" }]}
          >
            <div style={{ display: "block" }}>
              <label
                htmlFor="fName"
                style={{ fontSize: "12px", color: "#595959" }}
              >
                First Name
              </label>
              <Input id="fName" style={{ width: "200px", height: "36px" }} />
            </div>
          </Form.Item>
          <Form.Item
            className="form-item"
            name="lastName"
            rules={[{ required: true, message: "Last Name required" }]}
          >
            <div style={{ display: "block" }}>
              <label
                htmlFor="lName"
                style={{ fontSize: "12px", color: "#595959" }}
              >
                Last Name
              </label>
              <Input id="lName" style={{ width: "200px", height: "36px" }} />
            </div>
          </Form.Item>
          <Form.Item
            style={{ width: "200px" }}
            className="form-item"
            name="email"
            rules={[{ required: true, message: "email required" }]}
          >
            <div>
              <label
                htmlFor="email"
                style={{ fontSize: "12px", color: "#595959" }}
              >
                Email Address
              </label>
              <Input id="email" style={{ width: "200px", height: "36px" }} />
            </div>
          </Form.Item>
          <Form.Item
            className="form-item"
            name="phoneNumber"
            rules={[{ required: true, message: "Phone number required" }]}
          >
            <div>
              <label
                htmlFor="phoneNumber"
                style={{ fontSize: "12px", color: "#595959" }}
              >
                Phone Number
              </label>
              <Input
                id="phoneNumber"
                style={{ width: "200px", height: "36px" }}
              />
            </div>
          </Form.Item>
        </Form>
      </div>
      <div className="guest-count">
        <div className="select-container">
          <Select
            label="Adults"
            data={["1", "2", "3"]}
            onChange={onSelectAdult}
            labelProps={{
              style: {
                color: "595959",
                fontSize: "12px",
              },
            }}
            style={{ width: "91px", height: "36px" }}
          />
        </div>
        <div className="select-container">
          <Select
            label="Kids"
            onChange={onSelectKids}
            data={["1", "2", "3"]}
            labelProps={{
              style: {
                color: "595959",
                fontSize: "12px",
              },
            }}
            style={{ width: "91px", height: "36px", marginLeft: "10px" }}
          />
        </div>
        <div className="switch-container">
          <Switch
          onChange={onSwitchChange}
            //   label="I am booking for someone else"
            style={{
              marginLeft: "80px",
              marginTop: "27px",
            }}
            size="lg"

            //   className="custom-switch"
          />
          <span
            style={{
              marginTop: "35px",
              color: "#595959",
              fontSize: "12px",
              marginLeft: "10px",
            }}
          >
            I am booking for someone else
          </span>
        </div>
      </div>
    </div>
  );
}

export default PreBookingDetail;
