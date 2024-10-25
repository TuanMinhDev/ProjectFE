import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import { CiSearch } from "react-icons/ci";
import data from "./data";
const Product = () => {
  return (
    <Card>
      <CardBody>
        <Row>
          <Col
            lg={3}
            style={{
              border: "1px solid black",
              width: "250px",
              borderRadius: "20px",
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Col lg={12} style={{ marginBottom: "20px", marginTop: "20px" }}>
              <Button style={{ width: "100%" }}>Quần</Button>
            </Col>
            <Col lg={12} style={{ marginBottom: "20px" }}>
              <Button style={{ width: "100%" }}>Áo</Button>
            </Col>
            <Col lg={12} style={{ marginBottom: "20px" }}>
              <Button style={{ width: "100%" }}>Giày</Button>
            </Col>
            <Col lg={12} style={{ marginBottom: "20px" }}>
              <Button style={{ width: "100%" }}>Dép</Button>
            </Col>
            <Col lg={12} style={{ marginBottom: "20px" }}>
              <Button style={{ width: "100%" }}>Dụng cụ thể thao</Button>
            </Col>
          </Col>
          <Col lg={9} sm={7}>
            <Row>
              <Col lg={5} sm={3}>
                <h1>Quần</h1>
              </Col>
              <Col lg={7} sm={9}>
                <InputGroup>
                  <Input
                    type="text"
                    className="form-control"
                    id="basicInput"
                    placeholder="Search"
                  />
                  <InputGroupText>
                    <CiSearch />
                  </InputGroupText>
                </InputGroup>
              </Col>
            </Row>
            <Row>
                {data.map((index) => (
                  <Col lg={4} key={index.id}>
                    <img src={index.linkImg1} style={{width: "300px"}}/>
                    <h3>{index.name}</h3>
                    <p>{index.price}</p>
                    <p>{index.content}</p>
                  </Col>
                ))}
              </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
export default Product;
