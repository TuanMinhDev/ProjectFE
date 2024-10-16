import React from "react";
import { Card, Col, CardBody } from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react"; // Import từ Swiper
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // Import các module cần thiết

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import hình ảnh


const Slider = () => {
    return (
        <Card>
            <Col xl={12} lg={6}>
                <Card>
                    <CardBody>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]} 
                            pagination={{ clickable: true }}
                            navigation={true}
                            loop={true}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            className="mySwiper swiper navigation-swiper rounded"
                        >
                            
                            <SwiperSlide><div style={{backgroundColor:"black", height:"200px"}}></div></SwiperSlide>
                            <SwiperSlide><div style={{backgroundColor:"red", height:"200px"}}></div></SwiperSlide>
                            <SwiperSlide><div style={{backgroundColor:"blue", height:"200px"}}></div></SwiperSlide>
                        </Swiper>
                    </CardBody>
                </Card>
            </Col>
        </Card>
    );
}

export default Slider;
