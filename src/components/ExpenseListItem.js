import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
const ExpenseListItem = ({ description, amount, createdAt, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>
        {description}
        <button>EDIT</button>
      </h3>
    </Link>
    <p>
      ${amount} -- {moment(createdAt).format("MMMM Do YYYY, h:mm a")}
    </p>
  </div>
);

export default ExpenseListItem;
