import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({posts, filter, setFilter}) => {
    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>posts list is empty</h1>
        )
    }

    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Search'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='name'
                options={[
                    {value: 'title', name: 'name'},
                    {value: 'body', name: 'description'},

                ]}
            />
        </div>
    );
};

export default PostFilter;