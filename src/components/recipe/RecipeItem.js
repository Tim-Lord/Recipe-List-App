import React, { Component } from "react";

class RecipeItem extends Component {
  render() {
    const { name, ingredients, steps } = this.props.recipe;
    return (
      <div className='card text-center '>
        <h1>{name}</h1>
        <section className='text-left'>
          <ul>
            <h2> Ingredients </h2>
            {ingredients.map(ingredient => (
              <li>
                {ingredient.amount} {ingredient.measurement} {ingredient.name}
              </li>
            ))}
          </ul>
          <article>
            <h2> Steps </h2>
            {steps.map(step => (
              <li>{step}</li>
            ))}
          </article>
        </section>
      </div>
    );
  }
}

export default RecipeItem;
