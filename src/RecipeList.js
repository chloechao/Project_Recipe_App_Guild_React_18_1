import React from "react";

function RecipeList(props) {
  const { data, handler } = props;
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.
  const deleteHandler = (value) => {
    handler(data.filter((item) => item.id !== value))
  }
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.map((item, idx) => (
          <tr key={idx}>
            <td>{item.name}</td>
            <td>{item.cuisine}</td>
            <td><img src={item.photo} /></td>
              <td className="content_td"><p>{item.ingredients}</p></td>
              <td className="content_td"><p>{item.preparation}</p></td>
            <td><button name='delete' onClick={() => deleteHandler(item.id)}>Delete</button></td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
