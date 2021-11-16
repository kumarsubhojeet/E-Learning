import React from "react";
import "../NavBar/Nav.css";
import { Layout } from "antd";
import Nav from '../../Components/NavBar/Nav'

export default function NavBar() {
  return (
    <div>
      <Layout className="layout">
          <Nav />
      </Layout>
    </div>
  );
}
