import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MdDelete } from 'react-icons/md';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import './styles.css';

const TodoList = ({ todos, onToggle, onRemove }) => (
  <ul className="todo-list">
    {todos.map((todo) => (
      <li key={todo.id.toString()}>
        <span
          className={todo.checked ? 'todo checked' : 'todo'}
          onClick={() => onToggle && onToggle(todo)}
          onKeyPress={() => onToggle && onToggle(todo)}
          role="button"
          tabIndex={0}
        >
          {todo.title}
        </span>
        <button
          onClick={() => onRemove && onRemove(todo)}
          className="remove"
          type="button"
        >
          <MdDelete size={28} />
        </button>
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default TodoList;
