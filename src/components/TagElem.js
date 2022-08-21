import React from 'react';



const TagElem = (props) => {
    return (
        <>,
            <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">
            {props.title}
        </span>
        </>
    )
};

TagElem.defaultProps ={
    title:'default title'
}

export default TagElem;