import React from "react";
import { Link } from "react-router-dom";
import "../todo/Todo.css";

const Instructions = () => {
    return (
        <>
            <div className="container">
                <div className="box">
                    <div className="title">
                        <Link to="/">
                            <h2>To-do Application</h2>
                        </Link>
                        <Link to="/instructions">
                            <h2 className="active">Instructions</h2>
                        </Link>
                    </div>
                    <div className="instructions">
                        <p className="intro">Add a search feature:</p>

                        <ul>
                            <li>
                            When a user enters text into the search input field, the task
                            list should dynamically filter to display only tasks that match
                            the search keyword.
                            </li>
                        </ul>
                        <p className="intro">
                            Add an Edit Functionality to edit the tasks.
                        </p>
                        <p className="intro">Add a priority feature:</p>
                        <ul>
                            <li>
                            Make a dropdown-list through which a user can select the
                            priority of the task.
                            </li>
                            <li>
                            The priority levels should include "High Priority," "Medium
                            Priority," and "Low Priority."
                            </li>

                            <li>
                            Tasks should be displayed in the task list sorted based on their
                            priority level, with high priority tasks displayed first,
                            followed by medium and low priority tasks.
                            </li>
                        </ul>
                        <p className="intro">Add a feature to add sub-tasks.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Instructions;