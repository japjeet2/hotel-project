import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktail",
        info:
          "Id sunt esse elit anim sunt exercitation Lorem anim occaecat qui."
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
        info:
          "Id sunt esse elit anim sunt exercitation Lorem anim occaecat qui."
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Id sunt esse elit anim sunt exercitation Lorem anim occaecat qui."
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info:
          "Id sunt esse elit anim sunt exercitation Lorem anim occaecat qui."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
        {
            this.state.services.map((item,index) => {
                return (
                    <article key={Math.random()} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    </article>
                )
            })
        }
        </div>
      </section>
    );
  }
}

export default Services;
