import React, { useState, useEffect } from "react";

const Post = () => {
    return (
      <div class="ui stackable container menu">
        <div class="ui form">
          <form id="importantForm" class="ui form">
            <div class="field">
              <input
                name="article"
                id="title-input"
                placeholder="Title"
              ></input>
            </div>
            <div class="field">
              <textarea
                id="body-input"
                cols="160"
                rows="10"
                placeholder="Your thoughts..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="ui inverted blue button"
              id="create-post"
            >
              create post
            </button>
          </form>
        </div>
      </div>
    );
};

export default Post;