import React from "react";
import sl1 from "../assets/img/sl1.svg"
import sl2 from "../assets/img/sl2.svg"
import sl3 from "../assets/img/sl3.svg"

const Slide = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" >
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={sl1} class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={sl2}  class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src={sl3}  class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Proxima</span>
            </button>
        </div>
    )
}

export {Slide};