import React from "react";

const Destaque = () => {
  return (
    <section className="flex-section">
      <div>
        <div className="first_div">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/876/698/540/bring-me-the-horizon-oliver-sykes-futuristic-abstract-wallpaper-preview.jpg"
            alt=""
          />
          <div className="second_div">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShEIPfWZaVrjdkXxmBwe1ZlBQqIAveEVfrjA&usqp=CAU"
              alt=""
            />
          </div>
          <div className="third_div">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcSL8IyXUDNfQp8dZtiV5dvHMvlbA_1bPNeA&usqp=CAU"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="right_section">
        <h3>Lorem ipsum dolor sit amet.</h3>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          inventore minima! Voluptatum deleniti excepturi vel soluta quidem aut,
          accusamus quod!
        </span>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam
          inventore vitae obcaecati laudantium omnis fuga consequatur officiis
          nobis sequi, repudiandae modi nam sed eius nisi quos, et deserunt?
          Accusantium ab esse, aliquid quo eveniet nisi nobis voluptatum cum
          numquam a?
        </p>

        <button type="button" className="btn">
          leia mais
        </button>
      </div>
    </section>
  );
};

export default Destaque;
