import React from "react";

const PublicLayout = (props) => {
  const childrenWithProps = React.Children.map(props.children, (child) => {
    return React.cloneElement(child, { onItemSelectedChanged: true });
  });
  return (
    <React.Fragment>
      <h1>this is public layout</h1>
      <div>{childrenWithProps}</div>
    </React.Fragment>
  );
};

export default PublicLayout;
