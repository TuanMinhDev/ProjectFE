import "./product.css"
import React, { useState } from "react";
const ProductSencond = (props) => {
  const [currentImage, setCurrentImage] = useState(props.anh); // Ảnh ban đầu là props.anh
  const [isHovered, setIsHovered] = useState(false);

  // Hàm xử lý khi hover vào ảnh
  const handleMouseEnter = () => {
    setCurrentImage(props.hoverAnh); // Thay đổi ảnh khi hover
    setIsHovered(true);
  };

  // Hàm xử lý khi chuột rời khỏi ảnh
  const handleMouseLeave = () => {
    setCurrentImage(props.anh); // Khôi phục ảnh ban đầu
    setIsHovered(false);
  };
  const renderPrice = () => {
    {
      /* Product price*/
    }
    switch (props.type) {
      case 1:
        return (
          <>
            <span className="text-muted text-decoration-line-through">
              ${props.price1}
            </span>
            <br />
            <span>${props.price2}</span>
          </>
        );
      default:
        return `$${props.price1}`;
    }
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        {props?.isSale ? (
          <div
            className="badge bg-dark text-white position-absolute"
            style={{ top: "0.5rem", right: "0.5rem" }}
          >
            Sale
          </div>
        ) : (
          ""
        )}

        <img
          className={`card-img-top ${isHovered ? "zoom-in" : ""}`}
          src={currentImage}
          alt="..."
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          //style={{ transition: "opacity 0.3s ease" }}
        />

        <div className="card-body p-4">
          <div className="text-center">
            <h5
              className="fw-bolder"
              style={{ color: "black", transition: "color 0.3s" }}
              onMouseEnter={(e) => {
                e.target.style.color = "red";
                handleMouseEnter();
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "black";
                handleMouseLeave();
              }}
            >
              {props.name}
            </h5>

            {props.isReview ? (
              <div className="d-flex justify-content-center small text-warning mb-2">
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
                <div className="bi-star-fill" />
              </div>
            ) : (
              ""
            )}

            {renderPrice()}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="#">
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductSencond;
